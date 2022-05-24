import { useEffect, useState } from "react";
// import register from "../controllers/user/register";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";

const RegisterForm = () => {
  const { isLoading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "testuser101",
    password1: "123456",
    password2: "123456",
  });
  const [valid, setValid] = useState(false);

  const { username, password1, password2 } = formData;

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    // if (!valid) return;
    // await register({ username, password: password2 });
    dispatch(register(formData));
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (password1 === password2 && password2.length > 4) {
    } else {
      console.log(formData);
    }
  };

  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

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

export default RegisterForm;
