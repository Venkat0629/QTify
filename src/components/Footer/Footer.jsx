import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./Footer.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <h1>FAQs</h1>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.summary}
          expandIcon={<ExpandMoreIcon className={styles.arrow} />}
        >
          Is QTify free to use?
        </AccordionSummary>
        <AccordionDetails className={styles.text}>
          Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.summary}
          expandIcon={<ExpandMoreIcon className={styles.arrow} />}
        >
          Can I download and listen to songs offline?
        </AccordionSummary>
        <AccordionDetails className={styles.text}>
          Sorry, unfortunately, we don't provide the service to download any
          songs.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
