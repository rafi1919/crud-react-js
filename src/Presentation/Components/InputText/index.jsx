import React from "react";

const index = ({ placeholder, value , onChange}) => {
  return (
    <div>
      <input className="rounded-md border-[1px] border-secondary p-5"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
    </div>
  );
};

export default index;
