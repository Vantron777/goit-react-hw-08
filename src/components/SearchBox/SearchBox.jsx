import { useDispatch, useSelector } from "react-redux";
import { styled, alpha } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";

import { selectNameFilter } from "../../redux/filters/selectors.js";
import { setFilter } from "../../redux/filters/slice.js";
import { Box, InputBase, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <Box
      sx={{
        flexDirection: { xs: "column-reverse", sm: "row" },
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        width: "100%",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: 24 }}>
        Your contacts:{" "}
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={onChange}
          value={filterName}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
};

export default SearchBox;
