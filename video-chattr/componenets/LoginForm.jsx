import { useState } from 'react'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formData

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="form__wrapper">
      <form onSubmit={onSubmit} className="form-control">
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={onChange}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <button type="submit" className="button btn_blue">
          Log into your Account
        </button>
      </form>
    </div>
  )
}

export default LoginForm