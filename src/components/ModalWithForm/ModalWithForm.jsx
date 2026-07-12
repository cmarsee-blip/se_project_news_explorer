import { useEffect } from "react";
import "./ModalWithForm.css";
import close from "../../assets/close.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  isSubmitDisabled = false,
  altButtonText,
  altButtonHandler,
}) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={onClose}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="close icon"
        >
          <img className="modal__close-btn" src={close} alt="Close" />
        </button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <div className="modal__submit_row">
            {buttonText && (
              <button
                type="submit"
                className="modal__submit"
                disabled={isSubmitDisabled}
              >
                {buttonText}
              </button>
            )}
            {altButtonText ? (
              <button
                type="button"
                className="modal__submit-next"
                onClick={altButtonHandler}
              >
                or {altButtonText}
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
