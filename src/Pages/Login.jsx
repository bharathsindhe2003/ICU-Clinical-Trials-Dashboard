//
import handleLogin from "../Services/Login/Login";
import { useState } from "react";
// material ui components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "#25b2f394",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(username, password, rememberMe, navigate);
        }}>
        <TextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" fullWidth />
        <FormControlLabel control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />} label="Remember Me" />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
}
