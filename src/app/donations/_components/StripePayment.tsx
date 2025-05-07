import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import type { StripeCardElementChangeEvent } from '@stripe/stripe-js';

interface StripePaymentFormProps {
  donationAmount: string;
  selectedCurrency: 'USD' | 'NGN';
  donorInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  handleCompleteDonation: () => void;
  handlePrevStep: () => void;
}

const StripePaymentForm: React.FC<StripePaymentFormProps> = ({
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
  const [cardComplete, setCardComplete] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Create PaymentIntent when component mounts
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: Math.round(parseFloat(donationAmount) * 100),
            currency: selectedCurrency.toLowerCase(),
            donorInfo,
          }),
        });

        if (!response.ok) throw new Error('Failed to create payment intent');

        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Payment setup failed');
      }
    };

    createPaymentIntent();
  }, [donationAmount, selectedCurrency, donorInfo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setProcessing(true);
    setError(null);
    setMessage('Processing your payment...');

    try {
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: `${donorInfo.firstName} ${donorInfo.lastName}`,
            email: donorInfo.email,
          },
        },
      });

      if (stripeError) {
        throw stripeError;
      }

      if (paymentIntent?.status === 'succeeded') {
        setMessage('Payment succeeded!');
        handleCompleteDonation();
      }
    } catch (err) {
      setMessage(null);
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  const handleCardChange = (event: StripeCardElementChangeEvent) => {
    setCardComplete(event.complete);
    setError(event.error?.message || null);
  };

  // Add loading state while PaymentIntent is being created
  if (!clientSecret) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2c7bbd] mb-4"></div>
        <p>Setting up payment...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-6">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2 text-center">Donation Summary</h4>
          <p className="flex justify-between mb-2 p-1 text-sm">
            <span>Payment amount:</span>
            <span>{selectedCurrency === 'USD' ? '$' : '#'}{donationAmount}</span>
          </p>
          <p className="flex justify-between p-1 mb-2 text-sm">
            <span>Giving frequency:</span>
            <span>One-Time Donation</span>
          </p>
          <p className="flex justify-between p-1 text-sm">
            <span>Donor:</span>
            <span>{donorInfo.firstName} {donorInfo.lastName}</span>
          </p>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Enter Card Details</h4>
          <div className="border border-gray-300 p-3 rounded-lg bg-white">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                    ':-webkit-autofill': {
                      color: '#424770',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
                hidePostalCode: true,
              }}
              onChange={handleCardChange}
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePrevStep}
          className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg"
          disabled={processing}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-[#2c7bbd] text-white py-2 px-6 rounded-lg disabled:opacity-50"
          disabled={!stripe || !cardComplete || processing}
        >
          {processing ? 'Processing...' : `Pay ${selectedCurrency === 'USD' ? '$' : '#'}${donationAmount}`}
        </button>
      </div>
    </form>
  );
};

export default StripePaymentForm;