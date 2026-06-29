import "./LoginModal.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onLoginUser, handleSignUpClick }) => {
  const defaultValues = { email: "", password: "" };

  const { values, handleChange, resetForm } =
    useFormWithValidation(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
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
          className={"modal__input"}
          required
        />
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
