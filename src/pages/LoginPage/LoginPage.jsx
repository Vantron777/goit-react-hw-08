import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Avatar, Box, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Toaster } from "react-hot-toast";

const StyledLink = styled(Link)(() => ({
  textDecoration: "underline",
  color: "#2196f3",
  fontSize: 14,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const LoginPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <LoginForm />
        <StyledLink to="/register">I haven&apos;t had an account</StyledLink>
      </Box>
      <Toaster />
    </Container>
  );
};

export default LoginPage;
