import React, { useState } from "react";

const Button = (props) => {
  // const [more, setMore] = useState("Selengkapnya");
  // const [adopt, setAdopt] = useState("Adopsi");
  return (
    <>
      <div className="flex w-[188px] h-[62px] items-center justify-center gap-[10px] p-[10px] relative bg-primary rounded-[15px]">
        <button className="relative w-fit mt-[-2.50px] mb-[-0.50px]  font-Satoshi-Regular text-3xl  text-white tracking-[-0.69px] leading-[34px] whitespace-nowrap">
          {props.button}
        </button>
      </div>
    </>
  );
};

export default Button;
