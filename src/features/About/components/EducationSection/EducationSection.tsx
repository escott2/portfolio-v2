import commonStyles from "../../styles/commonStyles.module.scss";
import { combineClasses } from "../../../../utils";
import {
  BackgroundCard,
  BackgroundImage,
  BackgroundInfo,
} from "../BackgroundCard";
import stScholasticaLogo from "../../../../assets/st-scholastica-logo.svg";
import winonaStateLogo from "../../../../assets/winona-state-logo.svg";

function ExportSection() {
  return (
    <section
      className={combineClasses(
        commonStyles,
        "backgroundContainer",
        "aboutSubsection"
      )}
    >
      <h3>Education</h3>
      <BackgroundCard>
        <BackgroundImage
          imgSrc={stScholasticaLogo}
          imgAltText="The College of St. Scholastica logo"
        />
        <BackgroundInfo
          location="The College of St. Scholastica, Duluth, MN"
          title="Bachelor of Arts in Computer Information Systems"
          timeSpan="August 2018 - May 2020"
        />
      </BackgroundCard>
      <BackgroundCard>
        <BackgroundImage
          imgSrc={winonaStateLogo}
          imgAltText="Winona State University Logo"
        />
        <BackgroundInfo
          location="Winona State University, Winona, MN"
          title="Bachelor of Arts in Psychology"
          timeSpan="August 2006 - December 2011"
        />
      </BackgroundCard>
    </section>
  );
}

export default ExportSection;
