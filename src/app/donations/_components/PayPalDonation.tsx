'use client';

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import type {
    CreateOrderData,
    CreateOrderActions,
    OnApproveData,
    OnApproveActions
} from '@paypal/paypal-js';

interface PayPalDonationProps {
  amount: string;
  currency: string;
  onSuccess: () => void;
  onError: (err: unknown) => void;
}

export function PayPalDonation({ amount, currency, onSuccess, onError }: PayPalDonationProps) {
  const [{ isPending }] = usePayPalScriptReducer();

  const createOrder = (
    data: CreateOrderData,
    actions: CreateOrderActions
  ): Promise<string> => {
    return actions.order.create({
      intent: "CAPTURE", 
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: currency,
          },
        },
      ],
    });
  };

  const onApprove = async (
    data: OnApproveData,
    actions: OnApproveActions
  ): Promise<void> => {
    try {
      const details = await actions.order?.capture();
      console.log('Transaction completed:', details);
      onSuccess();
    } catch (err) {
      onError(err);
    }
  };

  return (
    <div className="paypal-button-container mt-4">
      {isPending ? (
        <div className="text-center">Loading PayPal...</div>
      ) : (
        <PayPalButtons
          style={{
            layout: "vertical",
            color: "blue",
            shape: "pill",
            label: "pay",
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      )}
    </div>
  );
}