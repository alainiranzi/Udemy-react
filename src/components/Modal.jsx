import React from 'react';
import classes from './Modal.module.css';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal} aria-modal="true" role="dialog">
        {children}
      </dialog>
    </>
  );
}

export default Modal;
