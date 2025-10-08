import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MyCard from "./card";
import Typography from "@mui/material/Typography";
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}
        sx={{ height: "100vh" }}
      >
        <MyCard />
      </Box>
        <Box
      sx={{
        background: "linear-gradient(135deg, #4F5BA6 0%, #30397A 100%)",
        py: 2,
        textAlign: "center",
        borderRadius: "12px",
        color: "#fff",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
        position: "fixed",
        bottom: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "90%", sm: "70%", md: "50%" },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: "500",
          fontSize: "1rem",
          letterSpacing: 0.5,
        }}
      >
        <a
          href="https://www.facebook.com/emad.nagy.19"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
     
            fontWeight:"bold"
          }}
        >
          Created by{" "}
          <span
            style={{
              fontWeight: "bold",
              color: "#FFD700",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Emad Nagy
            <CopyrightIcon sx={{ fontSize: "1rem", color: "#FFD700" }} />
          </span>
        </a>
      </Typography>
    </Box>
    </Container>
  );
}
