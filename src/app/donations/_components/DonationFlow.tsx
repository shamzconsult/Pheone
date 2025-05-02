// 'use client'

// import { useState } from 'react';
// import { DonationStep1 } from "./PaymentMethods/DonationStep1";
// import { DonationStep2 } from "./PaymentMethods/DonationStep2";
// import { DonationStep3 } from "./PaymentMethods/DonationStep3";

// export function DonationFlow({
//   donationType,
//   onComplete,
//   onBack
// }: {
//   donationType: 'one-time' | 'monthly' | 'partnership';
//   onComplete: () => void;
//   onBack: () => void;
// }) {
//   const [currentStep, setCurrentStep] = useState(1);
//   // ... other state and handlers

//   const renderStep = () => {
//     switch(currentStep) {
//       case 1: return <DonationStep1 /* props */ />;
//       case 2: return <DonationStep2 /* props */ />;
//       case 3: return <DonationStep3 /* props */ donationType={donationType} />;
//       default: return null;
//     }
//   };

//   return (
//     <div>
//       {/* Progress indicator */}
//       {renderStep()}
//     </div>
//   );
// }