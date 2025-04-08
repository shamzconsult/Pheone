'use client'

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdCheckmark } from "react-icons/io";


function HomePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [donationAmount, setDonationAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [donationType, setDonationType] = useState<'one-time' | 'monthly' | 'partnership'>('one-time');

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({ ...prev, [name]: value }));
  };  

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    handleNextStep()
  }

  const handleCompleteDonation = () => {
    setShowCardModal(false);
    setShowSuccess(false);
    setShowSuccessPage(true);
  };

  const handleDonationTypeSelect = (type: 'one-time' | 'monthly' | 'partnership') => {
    setDonationType(type);
  };

  const getFrequencyText = () => {
    switch (donationType) {
      case 'one-time':
        return 'One-Time Donation';
      case 'monthly':
        return 'Monthly Donation';
      case 'partnership':
        return 'Partnership Donation';
      default:
        return 'One-Time Donation';
    }
  };


  const SuccessPage = () => (
    <div className='relative py-40 flex flex-col'>
      <div className="flex-grow bg-white flex flex-col items-center justify-center p-6 text-center relative">
        <div className='relative overflow-x-hidden'>
          <div className="absolute  left-0 top-0 h-full xl:w-[350px] xl:max-w-[400px] -z-10">
            <img 
              src="/image/Group 4.png" 
              className="h-full w-full object-cover object-left"
              alt="Decorative blue shape"
            />
          </div>

          {/* Right Blue Shape */}
          <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[700] 2xl:h-[800] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[700px] -z-10">
            <img 
              src="/image/Rectangle 40.png" 
              className="h-[600px] lg:h-full w-full object-cover object-right"
              alt="Decorative blue shape"
            />
          </div>
        </div>
  
        {/* Success content */}
        <div className="max-w-md mx-auto z-10">
          <div className='gap-4 px-4 items-center mb-10 inline-flex p-1 rounded-full bg-[#2c7bbd]'>
            <IoMdCheckmark className='text-[#2c7bbd] text-2xl rounded-full bg-white p-1'/>
            <p className='text-white'>SUCCESS!</p>
          </div>
          <h3 className="text-2xl font-bold text-[#2c7bbd] mb-4">Hey {donorInfo.firstName}, Thanks for your donation!</h3>
          <p className="text-gray-700 mb-6">
            {donorInfo.firstName}, your contribution means a lot and will be put to good use in making a difference. 
            We have sent your donation receipt to <span className='font-semibold'>{donorInfo.email}</span> 
          </p>
          <button
            onClick={() => {
              setShowSuccessPage(false);
              // Reset all form states
              setCurrentStep(1);
              setDonationAmount('');
              setDonorInfo({ firstName: '', lastName: '', email: '' });
              setPaymentMethod('');
              setCardDetails({ cardName: '', cardNumber: '', expiry: '', cvv: '' });
            }}
            className="bg-[#2c7bbd] text-white py-2 rounded-full px-16"
          >
            OKAY
          </button>
        </div>
      </div>
      {/* <Footer  /> */}
    </div>
  );

  const renderCardModal = () => (
    <Dialog open={showCardModal} onOpenChange={setShowCardModal}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center mb-6">Enter Card Details</DialogTitle>
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              <span className="p-2 border rounded">VISA</span>
              <span className="p-2 border rounded">Mastercard</span>
              <span className="p-2 border rounded">Stripe</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder&apos;s Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={cardDetails.cardName}
                  onChange={handleCardDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter name on your card"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter card number"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                  <input
                    type="text"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleCardDetailsChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowCardModal(false)}
                className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={handleCompleteDonation}
                disabled={!cardDetails.cardName || !cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv}
                className="bg-[#2c7bbd] text-white py-2 px-6 rounded-lg disabled:opacity-50"
              >
                Pay ${donationAmount}
              </button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );


  const renderSuccessModal = () => (
    <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
      <DialogContent className="text-center max-w-md">
        <DialogHeader>
          <h3 className="text-2xl font-bold mb-4">Hey {donorInfo.firstName}, Thanks for your donation!</h3>
          <p className="text-gray-700 mb-6">
            {donorInfo.firstName}, your contribution means a lot and will be put to good use. 
            We&apos;ve sent your receipt to {donorInfo.email}
          </p>
          <button
            onClick={() => {
              setShowSuccess(false);
              setCurrentStep(1);
              setDonationAmount('');
              setDonorInfo({ firstName: '', lastName: '', email: '' });
              setPaymentMethod('');
              setCardDetails({ cardName: '', cardNumber: '', expiry: '', cvv: '' });
            }}
            className="bg-[#2c7bbd] text-white py-2 px-6 rounded-lg"
          >
            OKAY
          </button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );

  const renderStepContent = () => {
    if (showSuccess) {
      return (
        <div className="px-6 py-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Hey {donorInfo.firstName}, Thanks for your donation!</h3>
          <p className="text-gray-700 mb-6">
            {donorInfo.firstName}, your contribution means a lot and will be put to good use in making a difference. 
            We have sent your donation receipt to {donorInfo.email}
          </p>
          <button
            onClick={() => {
              setShowSuccess(false);
              setCurrentStep(1);
              setDonationAmount('');
              setDonorInfo({ firstName: '', lastName: '', email: '' });
              setPaymentMethod('');
            }}
            className="bg-[#2c7bbd] text-white py-2 px-6 rounded-lg"
          >
            OKAY
          </button>
        </div>
      );
    }


    switch (currentStep) {
      case 1:
        return (
          <div className="px-6">
            <div className="flex justify-between mb-4">
              <p className="text-black">Select donation amount</p>
              <div className="flex gap-4 sm:gap-6 border p-1 px-2 items-center rounded-full bg-gray-50">
                <select className="text-sm font-medium text-[#2c7bbd] bg-transparent border-none focus:outline-none">
                  <option>USD $</option>
                  <option>NGN #</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 font-semibold">
              {[10, 25, 50, 100, 250, 500].map(amount => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount.toString())}
                  className={`p-3 rounded-full border ${donationAmount === amount.toString() ? 'bg-[#2c7bbd] text-white border-blue-500' : 'border-[#2c7bbd]'}`}
                >
                  ${amount}.00
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter custom amount</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full p-3 border border-gray-300 rounded-full"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>

            <button
              onClick={handleNextStep}
              disabled={!donationAmount}
              className="w-full bg-[#2c7bbd] text-white py-3 px-6 rounded-full disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        );
      case 2:
        return (
          <div className="px-6">
            <h3 className="text-lg font-semibold mb-4">Who&apos;s Giving?</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={donorInfo.firstName}
                  onChange={handleDonorInfoChange}
                  className="w-full p-3 border border-gray-300 rounded-full"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={donorInfo.lastName}
                  onChange={handleDonorInfoChange}
                  className="w-full p-3 border border-gray-300 rounded-full"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={donorInfo.email}
                  onChange={handleDonorInfoChange}
                  className="w-full p-3 border border-gray-300 rounded-full"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!donorInfo.firstName || !donorInfo.lastName || !donorInfo.email}
                className="bg-[#2c7bbd] text-white py-2 px-6 rounded-lg disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        );
        case 3:
          return (
            <div className="px-6">
              <h3 className="text-sm font-semibold mb-4 text-center">How would you like to pay for your donation?</h3>
              <div className="mb-6">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2 text-center">Donation Summary</h4>
                  <p className="flex justify-between mb-2 p-1 text-sm">
                    <span>Payment amount:</span>
                    <span>${donationAmount}</span>
                  </p>
                  <p className="flex justify-between p-1 mb-2 text-sm">
                    <span>Giving frequency:</span>
                    <span>{getFrequencyText()}</span>
                  </p>
                  <p className="flex justify-between p-1 text-sm">
                    <span>Donor:</span>
                    <span>{donorInfo.firstName} {donorInfo.lastName}</span>
                  </p>
                  <p className="flex justify-between p-1 text-sm">
                    <span>Donation Total:</span>
                    <span className='text-[#2c7bbd] font-semibold'>${donationAmount}</span>
                  </p>
                </div>
  
                <h4 className="font-medium mb-2">Payment Method</h4>
                <fieldset className="space-y-3">
                  <legend className="sr-only">Payment Method</legend>
                  <div>
                    <label
                      htmlFor="payWithCard"
                      className={`flex items-center justify-between gap-4 p-3 text-sm font-medium transition-colors hover:bg-gray-50 hover:border-l-[#2c7bbd] hover:border-l-2 ${
                        paymentMethod === 'card' ? 'border-l-[#2c7bbd] border-l-2 bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <div>
                        <p className="text-gray-900">Pay Using Card</p>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        id="payWithCard"
                        className="size-5 border-gray-300"
                        checked={paymentMethod === 'card'}
                        onChange={() => handlePaymentMethodSelect('card')}
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="payOffline"
                      className={`flex items-center justify-between gap-4 p-3 text-sm font-medium transition-colors hover:bg-gray-50 hover:border-l-[#2c7bbd] hover:border-l-2 ${
                        paymentMethod === 'offline' ? 'border-l-[#2c7bbd] border-l-2 bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <div>
                        <p className="text-gray-900">Pay Offline</p>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="offline"
                        id="payOffline"
                        className="size-5 border-gray-300"
                        checked={paymentMethod === 'offline'}
                        onChange={() => handlePaymentMethodSelect('offline')}
                      />
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg"
                >
                  Back
                </button>
                <button
                  disabled
                  className="invisible py-2 px-6"
                >
                  {/* Spacer */}
                </button>
              </div>
            </div>
          );
          case 4:
            return paymentMethod === 'card' ? (
              <div className="px-6">
                {/* <h3 className="text-lg font-semibold mb-4 text-center">Card Details</h3> */}
                <p className='text-sm text-center font-semibold -mt-4 mb-4'>Enter your debit card details to complete payment</p>
                <p className='font-semibold text-sm'>Payment methods</p>
                <div className='flex justify-around py-6'>
                  <img src="/image/credit-card.png" alt="" className='h-10 w-14'/>
                  <img src="/image/credit-card (1).png" alt="" className='h-10 w-14'/>
                  <img src="/image/credit-card (2).png" alt="" className='h-10 w-14'/>
                  <img src="/image/credit-card (3).png" alt="" className='h-10 w-14'/>
                  <img src="/image/credit-card (4).png" alt="" className='h-10 w-14'/>
                </div>
               
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder&apos;s Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={cardDetails.cardName}
                      onChange={handleCardDetailsChange}
                      className="w-full p-3 border border-[#2c7bbd] rounded-full"
                      placeholder="Enter name on your card"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleCardDetailsChange}
                      className="w-full p-3 border border-[#2c7bbd] rounded-full"
                      placeholder="Enter card number"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                      <input
                        type="text"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleCardDetailsChange}
                        className="w-full p-3 border border-[#2c7bbd] rounded-full"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardDetailsChange}
                        className="w-full p-3 border border-[#2c7bbd] rounded-full"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
    
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevStep}
                    className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCompleteDonation}
                    disabled={!cardDetails.cardName || !cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv}
                    className="bg-[#2c7bbd] text-white py-2 px-6 rounded-lg disabled:opacity-50"
                  >
                    Pay ${donationAmount}
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-6">
                <h3 className="text-lg font-semibold mb-4">Bank Transfer Details</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">USD Account</h5>
                    <p className="text-sm">Bank Name: International Bank</p>
                    <p className="text-sm">Account Number: 1234567890</p>
                    <p className="text-sm">SWIFT Code: ABCDUS123</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">NGN Account</h5>
                    <p className="text-sm">Bank Name: Local Bank</p>
                    <p className="text-sm">Account Number: 0987654321</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Please include your name as reference when making the transfer.
                  </p>
                </div>
    
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevStep}
                    className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCompleteDonation}
                    className="bg-[#2c7bbd] text-white py-2 px-6 rounded-lg"
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            );
          default:
            return null;
        }
      };
    


  return (
    <div className='relative overflow-x-hidden'>
      {showSuccessPage ? (
      <SuccessPage />
    ) : (
      <>
      <div className="absolute left-0 top-64 -z-10">
        <img 
          src="/image/Polygon 1.png" 
          className="h-full w-full object-cover object-left"
          alt="Decorative blue shape"
        />
      </div>
      <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[600] 2xl:h-[700] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[900px] -z-10">
        <img 
          src="/image/Rectangle 40.png" 
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </div>

      <div className='max-w-screen-xl mx-auto mt-40 mb-40'>
        <div>
          <div className='text-center'>
            <h1 className='text-xl font-bold mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>Donation</h1>
            <h2 className='text-3xl mb-4 font-semibold tracking-wide'>Support Our Mission</h2>
            <p className='text-md text-black mb-8 max-w-4xl mx-auto leading-loose'>
              Your donation helps us provide resources, education, and advocacy for neurodivergent individuals. Every contribution makes a difference!
            </p>
          </div>

          <div className='flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-10 p-6'>
            {/* Card 1 */}
            <div className='flex-1 min-w-0 py-10 max-w-md text-center bg-white hover:border-l mb-6 md:mb-0 hover:border-l-[#2c7bbd] border shadow-lg border-gray-300 rounded-2xl p-6 hover:bg-gray-100 flex flex-col h-full'>
              <div className='flex justify-center mb-6 flex-shrink-0'>
                <img src="/image/Get Cash.png" alt="" className='h-16 w-auto' />
              </div>
              <p className='font-semibold mb-4'>One-Time Donation</p>
              <p className='text-gray-500 mb-4 px-4 flex-grow'>Make a one-time contribution to support our initiatives</p>
              <Dialog>
                <DialogTrigger className='bg-[#2c7bbd] text-white rounded-full py-2 px-6 mt-auto w-fit mx-auto' onClick={() => handleDonationTypeSelect('one-time')}>
                  Donate Now
                </DialogTrigger>
                <DialogContent className='text-center max-w-md'>
                  <DialogHeader>
                    {!showSuccess && (
                      <div className='mt-6 p-4'>
                        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200">
                          <ol className="relative z-10 flex justify-between text-sm font-medium text-black">
                            {[1, 2, 3].map((step) => (
                              <li key={step} className="flex items-center gap-2 bg-white p-2">
                                <span className={`size-6 rounded-full text-center text-xs font-bold flex items-center justify-center ${
                                  currentStep > step ? 'bg-green-500 text-white' :
                                  currentStep === step ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                }`}>
                                  {currentStep > step ? '✓' : step}
                                </span>
                                <span className="hidden sm:block text-xs">
                                  {step === 1 ? 'Select Amount' : step === 2 ? "Who's Giving" : 'Payment'}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}

                    {!showSuccess && (
                      <DialogTitle className='text-center mb-6'>
                        {currentStep === 1 ? 'How much would you like to donate?' : 
                        currentStep === 2 ? "Who's Giving?" : 
                        currentStep === 3 ? 'Payment Method' : 
                        'Card Details'}
                      </DialogTitle>
                    )}
                    
                    {renderStepContent()}
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            {/* Card 2 */}
            <div className='flex-1 min-w-0 py-10 max-w-md text-center bg-white hover:border-l mb-6 md:mb-0 hover:border-l-[#6AA541] border shadow-lg border-gray-300 rounded-2xl p-6 hover:bg-gray-100 flex flex-col h-full'>
              <div className='flex justify-center mb-6 flex-shrink-0'>
                <img src="/image/Donate.png" alt="" className='h-16 w-auto' />
              </div>
              <p className='font-semibold mb-4'>Monthly Giving</p>
              <p className='text-gray-500 mb-4 px-4 flex-grow'>Join our community of supporters with a recurring donation.</p>
              <Dialog>
                <DialogTrigger className='bg-[#6AA541] text-white rounded-full py-2 px-6 mt-auto w-fit mx-auto' onClick={() => handleDonationTypeSelect('monthly')}>
                  Give Monthly
                </DialogTrigger>
                <DialogContent className='text-center max-w-md'>
                  <DialogHeader>
                    {!showSuccess && (
                      <div className='mt-6 p-4'>
                        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200">
                          <ol className="relative z-10 flex justify-between text-sm font-medium text-black">
                            {[1, 2, 3].map((step) => (
                              <li key={step} className="flex items-center gap-2 bg-white p-2">
                                <span className={`size-6 rounded-full text-center text-xs font-bold flex items-center justify-center ${
                                  currentStep > step ? 'bg-green-500 text-white' :
                                  currentStep === step ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                }`}>
                                  {currentStep > step ? '✓' : step}
                                </span>
                                <span className="hidden sm:block text-xs">
                                  {step === 1 ? 'Select Amount' : step === 2 ? "Who's Giving" : 'Payment'}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}

                    {!showSuccess && (
                      <DialogTitle className='text-center mb-6'>
                        {currentStep === 1 ? 'How much would you like to donate?' : 
                        currentStep === 2 ? "Who's Giving?" : 
                        currentStep === 3 ? 'Payment Method' : 
                        'Card Details'}
                      </DialogTitle>
                    )}
                    
                    {renderStepContent()}
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            {/* Card 3 */}
            <div className='flex-1 min-w-0 py-10 max-w-md text-center bg-white hover:border-l mb-6 md:mb-0 hover:border-l-[#F9AE40] border shadow-lg border-gray-300 rounded-2xl p-6 hover:bg-gray-100 flex flex-col h-full'>
              <div className='flex justify-center mb-6 flex-shrink-0'>
                <img src="/image/Hand Holding Heart.png" alt="" className='h-16 w-auto' />
              </div>
              <p className='font-semibold mb-4'>Corporate Sponsorship</p>
              <p className='text-gray-500 mb-4 px-4 flex-grow'>Make a one-time contribution to support our initiatives</p>
              <Dialog>
                <DialogTrigger className='bg-[#F9AE40] text-white rounded-full py-2 px-6 mt-auto w-fit mx-auto'  onClick={() => handleDonationTypeSelect('partnership')}>
                  Partner Now
                </DialogTrigger>
                <DialogContent className='text-center max-w-md'>
                  <DialogHeader>
                    {!showSuccess && (
                      <div className='mt-6 p-4'>
                        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200">
                          <ol className="relative z-10 flex justify-between text-sm font-medium text-black">
                            {[1, 2, 3].map((step) => (
                              <li key={step} className="flex items-center gap-2 bg-white p-2">
                                <span className={`size-6 rounded-full text-center text-xs font-bold flex items-center justify-center ${
                                  currentStep > step ? 'bg-green-500 text-white' :
                                  currentStep === step ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                }`}>
                                  {currentStep > step ? '✓' : step}
                                </span>
                                <span className="hidden sm:block text-xs">
                                  {step === 1 ? 'Select Amount' : step === 2 ? "Who's Giving" : 'Payment'}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}

                    {!showSuccess && (
                      <DialogTitle className='text-center mb-6'>
                        {currentStep === 1 ? 'How much would you like to donate?' : 
                        currentStep === 2 ? "Who's Giving?" : 
                        currentStep === 3 ? 'Payment Method' : 
                        'Card Details'}
                      </DialogTitle>
                    )}
                    
                    {renderStepContent()}
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      {renderCardModal()}
      {renderSuccessModal()}
      </>
    )}
    </div>
  );

}

export default HomePage