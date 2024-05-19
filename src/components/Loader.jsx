import { Box, CircularProgress, Container } from "@mui/material";

const Loader = () => {
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
        <CircularProgress disableShrink />
      </Box>
    </Container>
  );
};

export default Loader;
