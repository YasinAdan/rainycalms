import React from "react";
import Modal from "react-modal";

const modalStyles = {
  content: {
    width: "30%",
    height: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export function Contact() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal} className="contact-btn">
        Contact
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <div className="modal-items">
          <h1>Contact Form</h1>
          <form
            action="https://formsubmit.co/4f6e8979fc4347a507e7c54c6eb947ca"
            method="POST"
          >
            <label for="name">Name: </label>
            <input type="text" name="name" required id="name" />
            <label for="email">Email: </label>
            <input type="text" name="email" required id="email" />
            <label for="message">Message: </label>
            <textarea id="message" name="message" rows="3.5" cols="30" />
            <div className="modal-btns">
              <button type="submit" className="contact-btn-1">Send</button>
              <button onClick={closeModal} className="contact-btn-2">close</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
