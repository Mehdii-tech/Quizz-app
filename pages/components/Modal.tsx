import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Modal = ({ show, onClose, children}:any) => {
    const [isBrowser, setIsBrowser] = useState(true);
    const modalWrapperRef = useRef<any>();

    // check if the user has clickedinside or outside the modal
    const backDropHandler = (e:any) => {
      console.log(modalWrapperRef.current)
      console.log(!modalWrapperRef?.current?.contains(e.target),"ooo")
      if (!modalWrapperRef?.current?.contains(e.target) ) {
          onClose();
      }
    }
    // useEffect(() => {
    //   getSession().then((session) => {
    //     if (session) {
    //       setIsBrowser(false);
    //     } else {
    //       setIsBrowser(true);
    //     }
    //   });
    // }, []);

  
    const modalContent = show ? (
    
      <StyledModalOverlay onClick={(show)=>backDropHandler(show)} >

        <div className="container mx-auto px-4 h-full" >
        <div className="flex content-center items-center justify-center h-full" >
        <div className="w-full lg:w-4/12 sm:w-7/12 px-4  " onClick={(show)=>backDropHandler(show)} ref={modalWrapperRef}>
          {children}
          </div>
        </div>
        </div>
      </StyledModalOverlay>
      
    ) : null;
  
    if (isBrowser) {
      return modalContent
    } else {
      return null;
    }
  };
  
  const StyledModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  `;
  
  export default Modal;