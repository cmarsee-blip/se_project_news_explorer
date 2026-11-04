import "./LoginModal.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators = {
  email: (value) => {
    if (!value.trim()) return "Invalid email address";
    return emailRegex.test(value) ? "" : "Invalid email address";
  },
};

const LoginModal = ({ isOpen, onClose, onLoginUser, handleSignUpClick }) => {
  const defaultValues = { email: "", password: "" };

  const {
    values,
    handleChange,
    resetForm,
    errors,
    showErrors,
    setShowErrors,
    validateAll,
  } = useFormWithValidation(defaultValues, validators);

  function handleSubmit(evt) {
    evt.preventDefault();
    setShowErrors(true);

    const isFormValid = validateAll();
    if (!isFormValid) return;

    onLoginUser(values);
    resetForm(defaultValues, {}, false);
  }

  return (
    <ModalWithForm
      title="Sign in"
      name="signin-user"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign in"
      altButtonText="Sign Up"
      altButtonHandler={handleSignUpClick}
    >
      <label htmlFor="login-email" className="modal__label_email">
        Email{" "}
        <input
          name="email"
          type="email"
          id="login-email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          className={`modal__input ${showErrors && errors.email ? "modal__input_invalid" : ""}`}
          required
        />
        {showErrors && errors.email && (
          <span className="modal__error">{errors.email}</span>
        )}
      </label>
      <label htmlFor="login-password" className="modal__label_password">
        Password{" "}
        <input
          name="password"
          type="password"
          id="login-password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          className={"modal__input"}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
