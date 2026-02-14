import React from 'react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract Moon/Orb shape */}
      <circle cx="16" cy="16" r="12" className="fill-primary/20" />
      <path
        d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 16C28 9.37258 22.6274 4 16 4"
        className="stroke-primary/50"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <circle cx="16" cy="16" r="6" className="fill-primary" />
    </svg>
  );
};
