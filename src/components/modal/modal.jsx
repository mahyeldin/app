import React from 'react';
import './modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>Request a tour</h2>

        <label>
          First &amp; last name
          <input className='inputmodal' type="text" placeholder="Entre full name" />
        </label>

        <label>
          Phone
          <input className='inputmodal' type="text" placeholder="Entre password" />
        </label>

        <label className="signed-label">
          Signed in email
          <div className="signed-email">werent@gmail.com</div>
        </label>

        <hr className='hrmodal' />

        <label>
          Message
          <textarea className='textareamodal' placeholder="Write your message here" />
        </label>

        <button className="submit-btn-modal">Request a tour</button>
      </div>
    </div>
  );
};

export default Modal;
