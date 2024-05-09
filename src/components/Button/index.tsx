import React from "react";

interface ButtonProps {
  name: string;
  click: () => Promise<void>;
}

const Button: React.FC<ButtonProps> = ({
  name,
  click
}) => {
  
  return (
    <div>
      <button 
        className="inline-block py-4 text-xl text-white rounded-xl p-5 duration-150 ease-in-out hover:bg-blue-600 bg-blue-500" 
        onClick={() => click()}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
