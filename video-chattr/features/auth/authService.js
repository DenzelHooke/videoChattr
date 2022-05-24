import axios from "axios";

const API_URL = "/api/users/";

const register = async (userData) => {
  const res = await axios.post("http://localhost:8080/api/users/" + "register", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(userData));
  }

  return res.data;
};

const logout = () => {
  localStorage.removeItem("user");
}

const authService = {
  register,
  logout,
};

export default authService;
