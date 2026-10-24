import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-10' : 'h-8';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* OpenTickets Icon: Open Ticket Notch Voucher Mark */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${heightClass} w-auto`}
        >
          {/* Ticket Base Outline with Turnstile Notch */}
          <path
            d="M4 8C4 5.79086 5.79086 4 8 4H28C30.2091 4 32 5.79086 32 8V14C30.3431 14 29 15.3431 29 17C29 18.6569 30.3431 20 32 20V28C32 30.2091 30.2091 32 28 32H8C5.79086 32 4 30.2091 4 28V20C5.65685 20 7 18.6569 7 17C7 15.3431 5.65685 14 4 14V8Z"
            fill="#0F172A"
            stroke="#00B4D8"
            strokeWidth="2"
          />
          {/* Dashed perforated admission line */}
          <line
            x1="13"
            y1="8"
            x2="13"
            y2="28"
            stroke="#00B4D8"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          {/* Turnstile Arrow / Admission Spark */}
          <path
            d="M20 12L24 17L20 22"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="17" cy="17" r="1.5" fill="#00B4D8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight font-display">
          <span className="text-xl sm:text-2xl font-extrabold text-white">open</span>
          <span className="text-xl sm:text-2xl font-extrabold text-[#00B4D8]">tickets</span>
          <span className="text-xs font-semibold text-[#F59E0B] ml-0.5">.co.za</span>
        </div>
      </div>
    </div>
  );
};
