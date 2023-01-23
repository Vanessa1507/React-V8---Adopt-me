import { useEffect, useRef, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactElement }) => {
  //We useRef because we need the same thing back every time
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  //We will create this div once
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    //The node that is on the index.html
    const modalRoot = document.getElementById("modal");

    //To guarantee that modalRoot will be an HTML object
    if (!modalRoot || !elRef.current) return;
    modalRoot.appendChild(elRef.current);

    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
