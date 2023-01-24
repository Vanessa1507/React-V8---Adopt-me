import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  //We useRef because we need the same thing back every time
  const elRef = useRef(null);

  //We will create this div once
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    //The node that is on the index.html
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
