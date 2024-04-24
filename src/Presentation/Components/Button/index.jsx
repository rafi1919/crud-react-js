import React from "react";

const index = ({ handleClick, text, type }) => {
  return (
    <div className="bg-primary w-[200px] h-[50px] rounded-full px-2 flex justify-between items-center">
      <div className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
        <span>+</span>
      </div>
      <div className="w-[70%]">
        <button
          aria-label="Button action"
          onClick={handleClick}
          className="text-[18px] text-white"
          type={type}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default index;
