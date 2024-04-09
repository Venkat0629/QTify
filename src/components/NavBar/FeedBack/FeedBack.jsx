import React, { useState } from "react";
import styles from "./FeedBack.module.css";

function FeedBack({ setFeedBack }) {
  const [state, setState] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      description: "",
    });
    console.log(formData);
    setState(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.close} onClick={() => setFeedBack(false)}>
        x
      </button>
      {state ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className={styles.fields}
          />

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            required
            className={styles.fields}
          />

          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className={styles.fields}
          />

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className={styles.fields}
          />

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      ) : (
        <div>Thank you for your valued feedback!</div>
      )}
    </div>
  );
}

export default FeedBack;
