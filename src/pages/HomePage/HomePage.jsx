import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";

import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            width: "100%",
            gap: 2,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              px: 2,
              py: 3,
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar
              sx={{ bgcolor: "#3f50b5", height: "100px", width: "100px" }}
            >
              <ImportContactsIcon sx={{ fontSize: "60px", color: "#ffffff" }} />
            </Avatar>
            <Divider flexItem />

            <Typography
              component="h1"
              variant="h4"
              sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}
            >
              Welcome to our{" "}
              <Typography
                component="span"
                variant="h4"
                sx={{ fontWeight: 700, color: "#3f50b5" }}
              >
                Contact Management
              </Typography>{" "}
              Website!
            </Typography>
            <Typography component="p" variant="body1">
              Imagine having all your contacts in one place, accessible anytime,
              anywhere. With our app, you can create, edit, and delete contacts
              with ease. Our intuitive interface makes it simple to stay on top
              of your contact list.
            </Typography>
            <Button
              component={Link}
              to="/contacts"
              size="large"
              variant="contained"
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
