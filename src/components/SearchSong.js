import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, Input } from "@material-ui/core";
import Search from "../icons/search.svg";

const useStyles = makeStyles((theme) => ({
  inputSearch: {
    backgroundColor: "#fff",
    padding: "10px 15px",
    borderRadius: "25px",
    width: "50%",
    marginTop: "15px",
    height: "45px",
    "&:before": {
      borderBottom: "0 none",
    },
    "&:after": {
      borderBottom: "0 none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },
  search: {
    backgroundImage: `url(${Search})`,
    height: "14px",
    width: "14px",
    border: "0 none",
    outline: "none",
    cursor: "pointer",
    display: "block",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
}));

const SearchSong = (props) => {
  const classes = useStyles();
  return (
    <div>
      <form onSubmit={props.onSearch} noValidate autoComplete="off">
        <Input
          placeholder="Search for song by artist or title"
          name="song"
          className={classes.inputSearch}
          endAdornment={
            <InputAdornment position="end">
              <button type="submit" className={classes.search} />
            </InputAdornment>
          }
        />
      </form>
    </div>
  );
};
export default SearchSong;
