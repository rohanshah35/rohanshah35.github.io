import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content" onClick={handleModalClick}>
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
