import React, { ReactChildren, ReactNode } from 'react';
interface IProps {
    isOpen : boolean,
    onClose : () => void,
    children: ReactNode

}
function Modal({ isOpen, onClose, children } : IProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-10 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* <button onClick={onClose} className="absolute top-50 right-50 text-lg font-semibold">X</button> */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
