import { toast } from "react-toastify";

export default function handleLogin(username, password, rememberMe, navigate) {
  try {
    if (!username || !password) {
      toast.error("Username and Password are required");
      return;
    }
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.setItem("rememberMe", "false");
    }
    // For demo purposes, accept any username/password
    toast.success("Login Successful");
    navigate("/dashboard");
  } catch (error) {
    console.error("Error during login:", error);
  }
}
