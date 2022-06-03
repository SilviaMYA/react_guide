
import styles from "./ErrorModal.module.css";

import Button from "../Button/Button";

const ErrorModal = (props) => {

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCancel}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.titleModal}</h2>
        </header>
        <div className={styles.content}>
          <p className={styles.message}>{props.messageModal}</p>
        </div>
        <footer className={styles.action}>
          <Button onClick={props.onCancel}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
