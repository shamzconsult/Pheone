// 'use client'

// import PayPalButton from "@/components/PayPalButton";


// export function PayPalPayment({ 
//   amount,
//   onSuccess,
//   onBack 
// }: {
//   amount: string;
//   onSuccess: () => void;
//   onBack: () => void;
// }) {
//   return (
//     <div className="px-6">
//       <p className='text-sm text-center font-semibold -mt-4 mb-4'>
//         Complete your donation via PayPal
//       </p>
      
//       <div className="mb-6">
//         <PayPalButton 
//           amount={amount}
//           onSuccess={onSuccess}
//           onError={(err) => console.error(err)}
//         />
//       </div>

//       <div className="flex justify-between mt-6">
//         <button
//           onClick={onBack}
//           className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// }