import { useState } from "react";
import styles from "../styles/Forms.module.scss";


const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form__wrapper signup__form">
      <form onSubmit={onSubmit} className="form-control">
        <input
          className="form-input"
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={onChange}
        />
        <input
          className="form-input"
          id="password1"
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          className="form-input"
          id="password2"
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={onChange}
        />
        <button type="submit" className="button btn_blue">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
