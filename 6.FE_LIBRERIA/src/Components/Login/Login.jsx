import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios"; // Necesitarás instalar axios con `npm install axios`
import { Context } from "../../App.jsx";
import { useContext } from "react";
import { convertLength } from "@mui/material/styles/cssUtils.js";
import { useEffect } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5500/api/v1/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.message == "success") {
        setIsAuthenticated(true);
        const cookies = document.cookie;
        console.log(cookies);
        console.log("");
      } else {
        setError("Login failed: " + response.data.message);
      }
    } catch (error) {
      setError("An error occurred: " + error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Book Shop Admin
        </Typography>
        {error && (
          <Typography variant="body1" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Ingresar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
