import React, { useState } from "react";
import './login_register.css'
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './AuthDetails'


export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const auth = getAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="apple">
        <div className="auth-form-container">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleRegister}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
            <button type="submit">Sign up</button>
          </form>
          <a href="/login">Already have an account? Login here.</a>
        </div>
      </div>
    </>
  );
};

export default Register;
