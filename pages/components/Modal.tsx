import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Modal = ({ show, onClose, children, title }:any) => {
    const [isBrowser, setIsBrowser] = useState(true);
  
    // useEffect(() => {
    //   getSession().then((session) => {
    //     if (session) {
    //       setIsBrowser(false);
    //     } else {
    //       setIsBrowser(true);
    //     }
    //   });
    // }, []);
    const handleCloseClick = (e:any) => {
      e.preventDefault();
      onClose();
    };
  
    const modalContent = show ? (
    

    
      <StyledModalOverlay>
        {/* <StyledModal> */}
          <StyledModalHeader >
            {/* <a href="#" onClick={handleCloseClick}>
              x
            </a> */}
          </StyledModalHeader>
          {title && {title}}
          {children}
        {/* </StyledModal> */}
      </StyledModalOverlay>
      
    ) : null;
  
    if (isBrowser) {
      return modalContent
    } else {
      return null;
    }
  };

  
  const StyledModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
  `;
  
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