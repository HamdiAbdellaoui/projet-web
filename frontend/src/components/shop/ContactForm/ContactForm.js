import React, { Fragment, useEffect, useState } from "react";
import Layout from "../layout";
function ContactForm() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici la logique d'envoi du formulaire, par exemple une requête HTTP

    // Réinitialisez les valeurs des champs après l'envoi
    setNom('');
    setEmail('');
    setTelephone('');
    setMessage('');
  };

  return (
    <Fragment>
    <div style={styles.container}>
      <h2 style={styles.heading}>CONTACT US</h2>
      <p style={styles.subheading}>Write to us</p>
      <h2 style={styles.heading}>CONTACT US</h2>
      <p style={styles.description}>
      Contact us and we will respond to you as quickly as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone number</label>
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>What do you want to say to us?</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
        Confirm
        </button>
      </form>
    </div>
    <Layout  />

    </Fragment>

  );
}

export default ContactForm;

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    background: '#f4f4f4',
    borderRadius: '4px',
  },
  heading: {
    fontSize: '30px',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '14px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '14px',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    padding: '10px',
    marginBottom: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    marginBottom: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    height: '100px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

