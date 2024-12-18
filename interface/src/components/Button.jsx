import React from "react"; 

export const Button = ({ label, primary, shadow, onClick, small }) => {
  const padding = small ? 'px-5 py-2' : 'px-10 py-3';
  const fontSize = small ? 'text-base' : 'text-lg';

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `${shadow}` }}
      className="relative rounded-xl p-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500"
    >
      <span
        style={{ backgroundColor: `${primary}` }}
        className={`block ${padding} ${fontSize} rounded-xl font-medium bg-pink-600 text-white transform transition-transform duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] 
        translate-y-[-6px] hover:duration-[250ms] hover:ease-[cubic-bezier(.3,.7,.4,1.5)]
        active:translate-y-[-2px] active:duration-[34ms]`}
      >
        {label}
      </span>
    </button>
  );
};
