import React from 'react';

// returns a button with the given text you can add more components to this folder
function Button(props: {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  props?: any;
}) {
  return (
    <button
      type="button"
      className="shadow text-green-400 shadow-green-400 even:text-green-400 border rounded-lg p-2 border-green-400"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
