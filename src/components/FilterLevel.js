import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import filterIcon from "../icons/filter.svg";

const useStyles = makeStyles((theme) => ({
  wrapperFilter: {
    display: "inline-block",
    position: "relative",
    top: "8px",
    padding: "5px",
    borderRadius: "50%",
    border: "1px solid #fff",
    marginLeft: "5px",
  },
  wrapperFilterRange: {
    display: "inline-block",
    position: "relative",
    top: "8px",
    padding: "5px",
    borderRadius: "50%",
    border: "1px solid #fff",
    marginLeft: "5px",
    backgroundColor: "#fff",
    "& span": {
      filter: "none",
    },
  },
  filterIcon: {
    backgroundImage: `url(${filterIcon})`,
    filter: "brightness(0) invert(1)",
    height: "12px",
    width: "12px",
    display: "block",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  levelRange: {
    display: "inline-block",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    borderTop: "2px solid #fff",
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    padding: "2px 12px",
    marginRight: "-11px",
    "& p": {
      fontSize: "0.8em",
    },
  },
}));

const FilterSong = (props) => {
  const classes = useStyles();
  return !props.display ? (
    <div>
      <Typography variant="body2">
        <span style={{ marginRight: "5px" }}>FILTER BY LEVEL</span>
        {props.sorted_level.length > 0 && (
          <span className={classes.levelRange}>
            {props.sorted_level.length === 1 ? (
              <Typography variant="body2">
                <span></span>
                {props.sorted_level[0]}
              </Typography>
            ) : (
              <Typography variant="body2">
                <span></span>
                {props.sorted_level[0]} -{" "}
                {props.sorted_level[props.sorted_level.length - 1]}
              </Typography>
            )}
          </span>
        )}
        <span
          className={
            props.sorted_level.length > 0
              ? classes.wrapperFilterRange
              : classes.wrapperFilter
          }
        >
          <span className={classes.filterIcon} />
        </span>
      </Typography>
    </div>
  ) : (
    <div>
      <Typography variant="body2">
        HIDE FILTER
        <span className={classes.wrapperFilter}>
          <span className={classes.filterIcon} />{" "}
        </span>
      </Typography>
    </div>
  );
};
export default FilterSong;
