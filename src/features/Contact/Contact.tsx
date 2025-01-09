import { useState } from "react";
import styles from "./Contact.module.scss";
import { MainSectionContainer, MainSectionHeading } from "../../components";
import { Input, Textarea } from "../../components";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/emilyscottmn@gmail.com",
        {
          method: "POST",
          body: new FormData(event.currentTarget as HTMLFormElement),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmissionSuccess(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <MainSectionContainer sectionName="contact">
      <MainSectionHeading sectionName="Contact" />
      <div className={styles.contactInfo}>
        <section className={styles.contactSubsection}></section>
        <section className={styles.contactSubsection}>
          <h3>Send an Email</h3>
          <form
            target="_blank"
            action="https://formsubmit.co/emilyscottmn@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className={styles.contactForm}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Portfolio Contact Submission"
            />
            <div className={styles.formGroup}>
              <Input
                label="Name"
                id="name"
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                required
                name="name"
                placeholder="Full name"
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                label="Email"
                id="email"
                type="email"
                placeholder="Email address"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <Textarea
                label="Message"
                id="message"
                placeholder="Your message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <input type="submit" className={styles.formButton} />
          </form>
          {isSubmitting && <p>Message sening</p>}
          {submissionSuccess && <p>Message sent!</p>}
        </section>
      </div>
    </MainSectionContainer>
  );
}

export default Contact;
