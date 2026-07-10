import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegistrationSuccessModal = ({ isOpen, onClose, onSignInClick }) => {
  function handleSignInClick() {
    if (onSignInClick) onSignInClick();
  }

  return (
    <ModalWithForm
      title="Registration successfully completed!"
      name="register-success"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={(e) => e.preventDefault()}
    >
      <button type="button" className="modal__link" onClick={handleSignInClick}>
        Sign in
      </button>
    </ModalWithForm>
  );
};

export default RegistrationSuccessModal;
