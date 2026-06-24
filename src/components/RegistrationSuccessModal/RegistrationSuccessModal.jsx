import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegistrationSuccessModal = ({ isOpen, onClose, onSignInClick }) => {
  function handleSubmit(e) {
    e.preventDefault();
    if (onSignInClick) onSignInClick();
    if (onClose) onClose();
  }

  return (
    <ModalWithForm
      title="Registration successfully completed!"
      name="register-success"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign in"
    >
      <p className="modal__info">Registration successfully completed!</p>
    </ModalWithForm>
  );
};

export default RegistrationSuccessModal;
