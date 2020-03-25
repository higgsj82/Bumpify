import React, { Children } from 'react';

const Modal = ({ active, exitModal, children }) => {
    if (!active) return null;
    return(
        <div className="modal-container">
            <button className="close-modal" onClick={exitModal}>
                <i className="fas fa-times"></i>
            </button>
            {children}
        </div>
    )
}

export default Modal;