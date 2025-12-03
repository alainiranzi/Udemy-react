import classes from './Modal.module.css';

function Modal({ children, onClose }) {
  return (
    <>
      {/* backdrop (lower z-index) */}
      <div
        className={classes.backdrop}
        onClick={onClose}
        style={{ zIndex: 1000 }}
      />

      {/* modal container (higher z-index) */}
      <div className={classes.modal} style={{ zIndex: 1001 }}>
        {children}
      </div>
    </>
  );
}

export default Modal;
