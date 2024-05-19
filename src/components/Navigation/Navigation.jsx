import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Box, MenuItem, Typography } from "@mui/material";

export const Navigation = ({ styles = {} }) => {
  let location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const homeColor = location.pathname === "/" ? "primary" : "text.primary";
  const contactsColor =
    location.pathname === "/contacts" ? "primary" : "text.primary";

  return (
    <Box component="nav" sx={styles}>
      <Link to="/">
        <MenuItem sx={{ py: "6px", px: "12px" }}>
          <Typography variant="body2" color={homeColor}>
            HOME
          </Typography>
        </MenuItem>
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          <MenuItem sx={{ py: "6px", px: "12px" }}>
            <Typography variant="body2" color={contactsColor}>
              CONTACTS
            </Typography>
          </MenuItem>
        </Link>
      )}
    </Box>
  );
};
