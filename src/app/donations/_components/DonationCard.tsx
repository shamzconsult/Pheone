// 'use client'

// import { Dialog, DialogTrigger } from "@/components/ui/dialog";
// import Image from "next/image";

// export function DonationCard({
//   type,
//   title,
//   description,
//   imageSrc,
//   buttonColor,
//   onSelectType
// }: {
//   type: 'one-time' | 'monthly' | 'partnership';
//   title: string;
//   description: string;
//   imageSrc: string;
//   buttonColor: string;
//   onSelectType: (type: 'one-time' | 'monthly' | 'partnership') => void;
// }) {
//   return (
//     <div className='flex-1 min-w-0 py-10 max-w-md text-center bg-white hover:border-l mb-6 md:mb-0 border shadow-lg border-gray-300 rounded-2xl p-6 hover:bg-gray-100 flex flex-col h-full'>
//       <div className='flex justify-center mb-6 flex-shrink-0'>
//         <Image src={imageSrc} alt="" width={64} height={64} />
//       </div>
//       <p className='font-semibold mb-4'>{title}</p>
//       <p className='text-gray-500 mb-4 px-4 flex-grow'>{description}</p>
//       <Dialog>
//         <DialogTrigger 
//           className={`${buttonColor} text-white rounded-full py-2 px-6 mt-auto w-fit mx-auto`} 
//           onClick={() => onSelectType(type)}
//         >
//           {type === 'one-time' ? 'Donate Now' : type === 'monthly' ? 'Give Monthly' : 'Partner Now'}
//         </DialogTrigger>
//       </Dialog>
//     </div>
//   );
// }