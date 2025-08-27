import Link from "next/link";
import React, { useState } from "react";

interface LockedVideoModalProps {
  open: boolean;
  onClose: () => void;
}

const prices = {
  SAR: { monthly: 'SAR 99/month', total: 'SAR 299' },
  USD: { monthly: 'USD 27/month', total: 'USD 81' }
};

const CurrencyTogglerInline = ({ currency, setCurrency }: { currency: 'SAR' | 'USD'; setCurrency: (c: 'SAR' | 'USD') => void }) => (
  <div className="flex items-center gap-2 px-1 py-1 ml-4 bg-white rounded-full shadow cursor-pointer">
    <button
      className={`px-3 py-1 rounded-full cursor-pointer font-semibold transition-colors duration-200 text-xs ${currency === 'SAR' ? 'bg-[#6606E3] text-white' : 'bg-gray-100 text-gray-700'}`}
      onClick={() => setCurrency('SAR')}
      aria-label="Show price in SAR"
    >
      SAR
    </button>
    <span className="text-xs font-bold text-gray-400">|</span>
    <button
      className={`px-3 py-1 rounded-full cursor-pointer font-semibold transition-colors duration-200 text-xs ${currency === 'USD' ? 'bg-[#6606E3] text-white' : 'bg-gray-100 text-gray-700'}`}
      onClick={() => setCurrency('USD')}
      aria-label="Show price in USD"
    >
      USD
    </button>
  </div>
);

const LockedVideoModal: React.FC<LockedVideoModalProps> = ({ open, onClose }) => {
  const [currency, setCurrency] = useState<'SAR' | 'USD'>('SAR');
  const overlayRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (overlayRef.current && e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!open) return null;
  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={handleOverlayClick}>
      <div className="relative flex flex-col w-full max-w-[95vw] sm:max-w-lg md:max-w-2xl gap-5 p-4 sm:p-6 md:p-10 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl animate-fadeIn">
        <button
          className="absolute text-3xl text-gray-600 transition top-3 right-3 md:top-5 md:right-5 md:text-3xl hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-center md:text-2xl"> Spoken English Mastery</h2>
        <p className="mb-4 text-sm text-center text-gray-700 md:text-base">Access all lessons, get certified, and boost your fluency.</p>
        <ul className="px-2 mb-4 space-y-1 text-xs text-gray-700 list-disc list-inside md:text-base md:space-y-1 md:px-2">
          <li>Lifetime access</li>
          <li>Certificate on completion</li>
          <li>14-day refund</li>
        </ul>
        <div className="flex flex-col items-center justify-between w-full gap-4 p-3 bg-gray-100 md:flex-row rounded-xl md:p-5">
          <div className="flex flex-col items-center w-full md:items-start md:w-auto">
            <span className="mb-2 text-xs font-semibold md:text-base">Choose your plan:</span>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 text-xs font-semibold bg-blue-100 rounded-full text-[#5708D8]">1 month</span>
              <span className="px-3 py-1 text-xs font-semibold text-[#5708D8] bg-blue-100 rounded-full">3 months</span>
              <span className="px-3 py-1 text-xs font-semibold text-[#5708D8] bg-blue-100 rounded-full">6 months</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:items-end md:w-auto">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-bold text-gray-900 md:text-2xl">{prices[currency].monthly}</span>
              <CurrencyTogglerInline currency={currency} setCurrency={setCurrency} />
            </div>
            <span className="text-xs text-gray-600 md:text-sm">(Total {prices[currency].total})</span>
          </div>
        </div>
       <Link href={'/payment-section'}>
          <button
            className="w-full py-3 mt-4 text-base font-medium text-white transition bg-[#5708D8] rounded-full shadow hover:bg-[#290b5a] active:scale-95 md:text-lg"
            onClick={onClose}
          >
            Continue
          </button>
       </Link>
        <div className="flex flex-col items-center justify-center w-full gap-2 mt-3 md:flex-row md:gap-6">
          <button className="w-full px-4 py-2 text-sm font-semibold text-blue-700 transition bg-blue-100 rounded-full md:w-auto hover:bg-blue-200">Syllabus</button>
          <button className="w-full px-4 py-2 text-sm font-semibold text-gray-700 transition bg-gray-100 rounded-full md:w-auto hover:bg-gray-200">Support</button>
          <button className="w-full px-4 py-2 text-sm font-semibold text-green-700 transition bg-green-100 rounded-full md:w-auto hover:bg-green-200">Free Demo</button>
        </div>
      </div>
    </div>
  );
};

export default LockedVideoModal;
