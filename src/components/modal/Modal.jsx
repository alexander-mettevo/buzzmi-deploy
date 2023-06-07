import React, {useEffect, useRef} from 'react';
import ReactPortal from "./ReactPortal.jsx";
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";
import renderContent from "./renderContent.jsx";
import {closeModal} from "../../store/slices/modalSlice/modalSlice.js";

function Modal() {
  const {isOpen, modalName, modalProps, modalType} = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  const handleClose = () => {
    dispatch(closeModal());
  }

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    if (isOpen)  document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);


  const modalClassName = modalType === 'big' ? 'modal__wrapper modal__wrapper_big' : 'modal__wrapper';

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{entry: 0, exit: 300}}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className={modalClassName}>
            <div className="modal__close">
              <button onClick={handleClose} className="modal__close-icon"/>
            </div>

            <div className="modal__content">{renderContent(modalName, modalProps)}</div>
          </div>
          <div onClick={handleClose} className="modal__overlay"/>
        </div>

      </CSSTransition>
    </ReactPortal>
  )
}

export default Modal;