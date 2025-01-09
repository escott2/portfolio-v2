import closeIcon from "../../../../assets/close-icon.svg";
import styles from "./MessageStatus.module.scss";

interface MessageStatusProps {
  isSubmitting: boolean;
  submissionSuccess: boolean;
  submissionError: boolean;
  closeStatus: (event: React.FormEvent) => void;
}

function MessageStatus({
  isSubmitting,
  submissionSuccess,
  submissionError,
  closeStatus,
}: MessageStatusProps) {
  return (
    <div className={styles.messageStatus}>
      {isSubmitting && <p className={styles.statusSending}>Message sending</p>}
      {submissionSuccess && (
        <div className={`${styles.statusContainer} ${styles.statusSent}`}>
          <p>Message sent!</p>
          <button onClick={closeStatus}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
      )}
      {submissionError && (
        <div className={`${styles.statusContainer} ${styles.statusError}`}>
          <p>
            Message delivery failed. Please try submitting your message again.
          </p>
          <button onClick={closeStatus}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
      )}
    </div>
  );
}

export default MessageStatus;
