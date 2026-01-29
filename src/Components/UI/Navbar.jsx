import logo from "../../assets/logo2.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "../../Services/Login/Logout";

// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
        px: 2,
        py: 1,
        borderRadius: 999,
        backgroundColor: "#00458b",
        color: "#ffffff",
        boxShadow: 4,
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}>
        <Box component="img" src={logo} alt="SVASTHYa logo" sx={{ height: 40, width: 40, borderRadius: 1, objectFit: "contain" }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}>
          SVASTHYA
          <sup
            style={{
              fontSize: "0.55em",
              marginLeft: "0.15rem",
            }}>
            TM
          </sup>
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color="inherit"
        onClick={Logout}
        sx={{
          borderColor: "#ffffff",
          color: "#ffffff",
          textTransform: "none",
          fontWeight: 500,
          px: 2.5,
          "&:hover": {
            borderColor: "#bbdefb",
            backgroundColor: "rgba(187,222,251,0.15)",
          },
        }}>
        <LogoutIcon sx={{ mr: 1 }} />
      </Button>
    </Box>
  );
}
