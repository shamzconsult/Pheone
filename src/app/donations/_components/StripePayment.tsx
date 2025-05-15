import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import type {
  StripeCardNumberElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardCvcElementChangeEvent,
} from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface StripePaymentFormProps {
  donationAmount: string;
  selectedCurrency: "USD" | "NGN";
  donorInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  handleCompleteDonation: () => void;
  handlePrevStep: () => void;
}

const StripePaymentFormInner: React.FC<StripePaymentFormProps> = ({
  donationAmount,
  selectedCurrency,
  donorInfo,
  handleCompleteDonation,
  handlePrevStep,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardNumberComplete, setCardNumberComplete] = useState(false);
  const [cardExpiryComplete, setCardExpiryComplete] = useState(false);
  const [cardCvcComplete, setCardCvcComplete] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const isCardComplete =
    cardNumberComplete && cardExpiryComplete && cardCvcComplete;

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: parseFloat(donationAmount),
            currency: selectedCurrency.toLowerCase(),
            donorInfo,
          }),
        });

        if (!response.ok) throw new Error("Failed to create payment intent");

        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Payment setup failed");
      }
    };

    createPaymentIntent();
  }, [donationAmount, selectedCurrency, donorInfo]);

  const getFriendlyErrorMessage = (error: unknown): string => {
    if (!error) return "";
    if (typeof error === "object" && error !== null && "code" in error) {
      const stripeError = error as { code?: string; message?: string };

      switch (stripeError.code) {
        case "card_declined":
          return "Your card was declined. Please try another card or contact your bank.";
        case "expired_card":
          return "Your card has expired. Please use a different card.";
        case "insufficient_funds":
          return "Insufficient funds. Please use a card with sufficient balance.";
        case "amount_too_small":
          return `Minimum donation is ${
            selectedCurrency === "USD" ? "$0.50" : "₦750"
          }.`;
        case "invalid_cvc":
          return "The security code is invalid. Please check and try again.";
        case "invalid_number":
          return "The card number is invalid. Please check and try again.";
        case "invalid_expiry":
          return "The expiration date is invalid. Please check and try again.";
        default:
          return (
            stripeError.message ||
            "Payment failed. Please check your details and try again."
          );
      }
    }

    if (error instanceof Error) {
      if (error.message.includes("payment intent")) {
        return "Payment processing failed. Please try again.";
      }
      return error.message;
    }

    return "We encountered an issue processing your payment. Please try again.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setProcessing(true);
    setError(null);
    setMessage("Processing your payment...");

    try {
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardNumberElement)!,
            billing_details: {
              name: `${donorInfo.firstName} ${donorInfo.lastName}`,
              email: donorInfo.email,
            },
          },
        });

      if (stripeError) {
        throw stripeError;
      }

      if (paymentIntent?.status === "succeeded") {
        setMessage("Payment succeeded! Thank you for your generosity!");
        handleCompleteDonation();
      }
    } catch (err) {
      setMessage(null);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setProcessing(false);
    }
  };

  const handleCardNumberChange = (
    event: StripeCardNumberElementChangeEvent
  ) => {
    setCardNumberComplete(event.complete);
    setError(event.error?.message || null);
  };

  const handleCardExpiryChange = (
    event: StripeCardExpiryElementChangeEvent
  ) => {
    setCardExpiryComplete(event.complete);
    setError(event.error?.message || null);
  };

  const handleCardCvcChange = (event: StripeCardCvcElementChangeEvent) => {
    setCardCvcComplete(event.complete);
    setError(event.error?.message || null);
  };

  const elementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
     paymentMethodCreation: 'manual' as const,
  };


  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='mb-6'>
        <div className='bg-gray-100 p-4 rounded-lg mb-6'>
          <h4 className='font-semibold mb-2 text-center'>Donation Summary</h4>
          <p className='flex justify-between mb-2 p-1 text-sm'>
            <span>Payment amount:</span>
            <span>
              {selectedCurrency === "USD" ? "$" : "₦"}
              {donationAmount}
            </span>
          </p>
          <p className='flex justify-between p-1 mb-2 text-sm'>
            <span>Giving frequency:</span>
            <span>One-Time Donation</span>
          </p>
          <p className='flex justify-between p-1 text-sm'>
            <span>Donor:</span>
            <span>
              {donorInfo.firstName} {donorInfo.lastName}
            </span>
          </p>
        </div>

        <div className='space-y-2 mb-4'>
          <div>
            <label className='block text-xs font-medium text-gray-700 mb-1'>
              Card number
            </label>
            <div className='border border-gray-300 p-2 rounded-lg bg-white'>
              <CardNumberElement
                options={elementOptions}
                onChange={handleCardNumberChange}
              />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-2'>
            <div>
              <label className='block text-xs font-medium text-gray-700 mb-1'>
                Expiry
              </label>
              <div className='border border-gray-300 p-2 rounded-lg bg-white'>
                <CardExpiryElement
                  options={elementOptions}
                  onChange={handleCardExpiryChange}
                />
              </div>
            </div>
            <div>
              <label className='block text-xs font-medium text-gray-700 mb-1'>
                CVC
              </label>
              <div className='border border-gray-300 p-2 rounded-lg bg-white'>
                <CardCvcElement
                  options={elementOptions}
                  onChange={handleCardCvcChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <button
          type='button'
          onClick={handlePrevStep}
          className='bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors'
          disabled={processing}
        >
          Back
        </button>
        <button
          type='submit'
          className='bg-[#2c7bbd] text-white py-3 px-6 rounded-lg hover:bg-[#1e5a8a] transition-colors disabled:opacity-50'
          disabled={!stripe || !isCardComplete || processing}
        >
          {processing
            ? "Processing..."
            : `Pay ${selectedCurrency === "USD" ? "$" : "#"}${donationAmount}`}
        </button>
      </div>

      {error && (
        <div className='mb-4 mt-2 p-3 bg-red-50 border-l-4 border-red-500 rounded'>
          <div className='flex items-center'>
            <svg
              className='w-5 h-5 text-red-500 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-red-700 font-medium'>{error}</span>
          </div>
          {error.includes("declined") && (
            <p className='mt-1 text-sm text-red-600'>
              Need help? Contact our support team at phebeanneuro@gmail.com
            </p>
          )}
        </div>
      )}

      {message && (
        <div className='mb-4 p-3 bg-green-50 border-l-4 border-green-500 rounded'>
          <div className='flex items-center'>
            <svg
              className='w-5 h-5 text-green-500 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-green-700 font-medium'>{message}</span>
          </div>
        </div>
      )}
    </form>
  );
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = (props) => {
  return (
    <div className='relative h-full'>
      <Elements stripe={stripePromise}>
        <StripePaymentFormInner {...props} />
      </Elements>
    </div>
  );
};

export default StripePaymentForm;
