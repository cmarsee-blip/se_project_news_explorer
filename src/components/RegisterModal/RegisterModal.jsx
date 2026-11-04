import { useState } from "react";
import "./RegisterModal.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators = {
  email: (value) => {
    if (!value.trim()) return "Invalid email address";
    return emailRegex.test(value) ? "" : "Invalid email address";
  },
};

const RegisterModal = ({
  isOpen,
  onClose,
  handleLogInClick,
  onRegisterUser,
}) => {
  const defaultValues = { email: "", password: "", username: "" };

  const {
    values,
    handleChange,
    resetForm,
    errors,
    showErrors,
    setShowErrors,
    validateAll,
  } = useFormWithValidation(defaultValues, validators);

  const [emailTakenError, setEmailTakenError] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();
    setShowErrors(true);

    const isFormValid = validateAll();
    if (!isFormValid) return;

    try {
      await onRegisterUser(values);
      setEmailTakenError("");
      resetForm(defaultValues, {}, false);
    } catch (error) {
      setEmailTakenError(error.message || "This email is not available");
    }
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
          className={`modal__input ${showErrors && errors.email ? "modal__input_invalid" : ""}`}
        />
        {showErrors && errors.email && (
          <span className="modal__error">{errors.email}</span>
        )}
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
      {emailTakenError && (
        <span className="modal__error modal__error_center">
          {emailTakenError}
        </span>
      )}
    </ModalWithForm>
  );
};

export default RegisterModal;
