import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose }) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={onClose}
    ></div>
  );
}

export default ModalWithForm;
