// Custom Imports
import logo from "../assets/logo2.png";
import handleLogin from "../Services/Login/Login";
// React Imports
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI Imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    function pageReloaded() {
      const remembered = localStorage.getItem("rememberMe") === "true";
      if (remembered) {
        const storedUsername = localStorage.getItem("username") || "";
        const storedPassword = localStorage.getItem("password") || "";
        setUserEmail(storedUsername);
        setUserPassword(storedPassword);
        setRememberMe(true);
      }
    }
    pageReloaded();
  }, []);

  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(userEmail, userPassword, rememberMe, navigate);
  };
  return (
    <Box
      sx={{
        bgcolor: "#25b2f394",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        p: { xs: 2, md: 8 },
        gap: 4,
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", md: "60%" },
        }}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            mb: 4,
            gap: 2,
          }}>
          <img src={logo} alt="logo" style={{ width: "100%", maxWidth: 400 }} />
        </Box>
        <Typography sx={{ color: "white", fontSize: "1rem", textAlign: "justify" }}>
          Sri Shankara National Centre for Cancer Prevention and Research is a leading centre for oncology research in India and is committed to advancing the strategies for cancer prevention, cancer
          detection and cancer treatment to alleviate the burden of cancer across the globe. Under Sri Shankara Cancer Foundation, Sri Shankara National Centre for Cancer Prevention & Research is
          recognised as a Scientific & Industrial Research Organisation by DSIR, Government of India.
          <br />
          <br />
          "Svasthya" is a Bio-informatics platform for remote health discovery and delivery. Svasthya enables automation of complex clinical workflows along with the time coordinated bio vitals
          measurement. Svasthya enables remote review of the users vitals, context & other details enabling effective triaging & screening.
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", md: "40%" },
          gap: 3,
          p: 4,
        }}>
        <FormControl fullWidth variant="outlined">
          <TextField
            label="Email"
            variant="outlined"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              style: { backgroundColor: "white" },
            }}
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "white",
              },
              "& .MuiInputLabel-root": {
                color: "black",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
              "& .MuiSvgIcon-root": {
                color: "black",
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth variant="outlined">
          <InputLabel sx={{ color: "black" }} htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff sx={{ color: "black" }} /> : <Visibility sx={{ color: "black" }} />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            sx={{
              "& .MuiOutlinedInput-input": {
                backgroundColor: "white",
              },
              bgcolor: "white",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
          />
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              onClick={() => setRememberMe((prev) => !prev)}
              checked={rememberMe}
              sx={{
                color: "white",
                "&.Mui-checked": { color: "white" },
              }}
            />
          }
          label="Remember Me"
          sx={{ alignSelf: "flex-start", color: "white" }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
          }}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
