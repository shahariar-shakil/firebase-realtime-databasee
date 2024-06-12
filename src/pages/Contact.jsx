// src/pages/Contact.jsx
import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { app, storage } from "../firebase/firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      let imageUrl = "";
      if (imageFile) {
        const storageReference = storageRef(
          storage,
          `images/${imageFile.name}`
        );
        await uploadBytes(storageReference, imageFile);
        imageUrl = await getDownloadURL(storageReference);
      }

      const db = getDatabase(app);
      const contactRef = ref(db, "contacts");
      push(contactRef, {
        name,
        age,
        city,
        image: imageUrl,
        message,
      });

      // Reset form fields
      setName("");
      setAge("");
      setCity("");
      setImageFile(null);
      setMessage("");
      setValidated(false);
    }
    setValidated(true);
  };

  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
      <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="invalid-feedback">Please provide your name.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min="1"
          />
          <div className="invalid-feedback">Please provide a valid age.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <div className="invalid-feedback">Please provide your city.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={handleImageChange}
            required
          />
          <div className="invalid-feedback">Please upload an image.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <div className="invalid-feedback">Please provide a message.</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
