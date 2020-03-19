import React from 'react';

const Modal = ({ active, exitModal }) => {
    if (!active) return null;
    return(
        <div className="modal-container">
            <section className="modal-section">

            </section>
        </div>
    )
}

export default Modal;