import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";

function App() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/form", form);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "" });
      }, 3000);
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>🌞 Good Morning</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FiUser />
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FiMail />
            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FiPhone />
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">🚀 Submit</button>
        </form>
        {submitted && <p className="success">✅ Submitted Successfully!</p>}
      </div>
    </div>
  );
}

export default App;
