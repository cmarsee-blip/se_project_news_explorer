import "./RegisterModal.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  onClose,
  handleLogInClick,
  onRegisterUser,
}) => {
  const defaultValues = { email: "", password: "", username: "" };

  const { values, handleChange, resetForm } =
    useFormWithValidation(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegisterUser(values);
    resetForm(defaultValues, {}, false);
  }

  return (
    <ModalWithForm
      title="Sign up"
      name="register-user"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign up"
      altButtonText="Sign in"
      altButtonHandler={handleLogInClick}
    >
      <label htmlFor="register-email" className="modal__label_email">
        Email{" "}
        <input
          name="email"
          type="email"
          id="register-email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          className={"modal__input"}
        />
      </label>
      <label htmlFor="register-password" className="modal__label_password">
        Password{" "}
        <input
          name="password"
          type="password"
          id="register-password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          className={"modal__input"}
        />
      </label>
      <label htmlFor="register-username" className="modal__label_username">
        Username{" "}
        <input
          name="username"
          type="text"
          id="register-username"
          placeholder="Enter your username"
          value={values.name}
          onChange={handleChange}
          className={"modal__input"}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
