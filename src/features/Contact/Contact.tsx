import styles from "./Contact.module.scss";
import { MainSectionContainer, MainSectionHeading } from "../../components";
import { ContactFormSection, ContactLinkSection } from "./components";

function Contact() {
  return (
    <MainSectionContainer sectionName="contact">
      <MainSectionHeading sectionName="Contact" />
      <div className={styles.contactInfo}>
        <ContactFormSection />
        <ContactLinkSection />
      </div>
    </MainSectionContainer>
  );
}

export default Contact;
