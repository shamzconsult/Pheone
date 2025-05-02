// 'use client'

// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// export default function PayPalButton({ 
//   amount,
//   onSuccess,
//   onError 
// }: {
//   amount: string;
//   onSuccess: (details: any) => void;
//   onError: (err: any) => void;
// }) {
//   return (
//     <PayPalScriptProvider 
//       options={{ 
//         "client-id": "YOUR_PAYPAL_CLIENT_ID",
//         currency: "USD" 
//       }}
//     >
//       <PayPalButtons
//         style={{ layout: "vertical" }}
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: amount,
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={(data, actions) => {
//           return actions.order!.capture().then((details) => {
//             onSuccess(details);
//           });
//         }}
//         onError={onError}
//       />
//     </PayPalScriptProvider>
//   );
// }