/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { intializeSong, moreSong } from "./reducers/songReducer";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography, Grid } from "@material-ui/core";
import banner from "../src/image/banner.png";
import { makeStyles } from "@material-ui/core/styles";
import AllSongs from "./components/AllSongs";
import SearchSong from "./components/SearchSong";
import FilterLevel from "./components/FilterLevel";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    color: "#fff",
  },
  sectionBanner: {
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    paddingTop: "4em",
    paddingBottom: "4em",
  },
  buttonFilter: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
    },
  },
  button: {
    position: "relative",
    border: "0 none",
    backgroundColor: "transparent",
    padding: "0px",
    margin: "0 0.5em",
    cursor: "pointer",
    outline: " none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
      width: "15%",
      margin: "0 0.5em 0.5em 0.5em",
    },
    "& div[data-level='1']": {
      color: "#6fc13e",
    },
    "& div[data-level='2']": {
      color: "#6fc13e",
    },
    "& div[data-level='3']": {
      color: "#6fc13e",
    },
    "& div[data-level='4']": {
      color: "#6fc13e",
    },
    "& div[data-level='5']": {
      color: "#6fc13e",
    },
    "& div[data-level='6']": {
      color: "#ff8e00",
    },
    "& div[data-level='7']": {
      color: "#ff8e00",
    },
    "& div[data-level='8']": {
      color: "#ff8e00",
    },
    "& div[data-level='9']": {
      color: "#ff8e00",
    },
    "& div[data-level='10']": {
      color: "#ff8e00",
    },
    "& div[data-level='11']": {
      color: "#dc001c",
    },
    "& div[data-level='12']": {
      color: "#dc001c",
    },
    "& div[data-level='13']": {
      color: "#dc001c",
    },
    "& div[data-level='14']": {
      color: "#dc001c",
    },
    "& div[data-level='15']": {
      color: "#dc001c",
    },
  },
  songArea: {
    paddingTop: "2em",
  },

  Active: {
    border: "0 none",
    padding: "0px",
    margin: "0 0.5em",
    outline: " none",
    color: "#fff",
    cursor: "pointer",
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
      width: "15%",
      margin: "0 0.5em 0.5em 0.5em",
    },
    "& span": {
      color: "#000",
      zIndex: "99",
    },
    "& div": {
      color: "#fff",
      borderRadius: "50%",
      backgroundColor: "#fff",
    },
  },
  textLevel: {
    position: "absolute",
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "1.3em",
    fontWeight: "600",
    color: "#fff",
  },
}));
const App = (props) => {
  const classes = useStyles();

  const [level, setLevel] = useState([]);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const songs = useSelector((state) => state.songs.data);
  const message = useSelector((state) => state.songs.errorMessage);
  const loadMessage = useSelector((state) => state.songs.loadMessage);
  const level_song = [
    { level: 1 },
    { level: 2 },
    { level: 3 },
    { level: 4 },
    { level: 5 },
    { level: 6 },
    { level: 7 },
    { level: 8 },
    { level: 9 },
    { level: 10 },
    { level: 11 },
    { level: 12 },
    { level: 13 },
    { level: 14 },
    { level: 15 },
  ];
  useEffect(() => {
    props.intializeSong(search, level);
  }, [search, level, props]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, search, level]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setLoading(false);
      return;
    }
    setStart(start + 5);
    props.moreSong(start, search, level);
    setLoading(true);
  };
  const onSearch = async (event) => {
    event.preventDefault();
    const search = event.target.song.value;
    setSearch(event.target.song.value);
    if (search.length > 0) {
      setStart(0);
    } else {
      setStart(0);
    }
  };

  const chooseLevel = (id) => {
    if (level.includes(id)) {
      setStart(0);
      setLevel(level.filter((x) => x !== id));
    } else {
      setLevel((prevArray) => [...prevArray, id]);
      setStart(0);
    }
  };
  const toggleClick = () => {
    setDisplay(!display);
  };
  const sorted_level = level.sort((a, b) => a - b);
  return (
    <div className="App" style={{ backgroundColor: "#000" }}>
      <section className={classes.sectionBanner}>
        <div className={classes.grid}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Typography
                variant="h1"
                style={{ fontSize: "40px", marginBottom: "15px" }}
              >
                NEW SONGS DELIVERED EVERY WEEK
              </Typography>
              <Typography variant="body1" style={{ marginBottom: "20px" }}>
                Here are the most recent additions to the Yousician App. Start
                playing today!
              </Typography>
              <SearchSong onSearch={onSearch} />
            </Grid>
          </Grid>
        </div>
      </section>
      <section className={classes.songArea}>
        <div className={classes.grid}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{ textAlign: "right", paddingBottom: "20px" }}
            >
              <a
                href="#"
                onClick={toggleClick}
                className={classes.buttonFilter}
              >
                <FilterLevel display={display} sorted_level={sorted_level} />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{ textAlign: "center", paddingBottom: "20px" }}
            >
              {display && (
                <div style={{ display: "block" }}>
                  {level_song.map((item) => (
                    <button
                      key={item.level}
                      value={item.level}
                      className={
                        level.includes(item.level)
                          ? classes.Active
                          : classes.button
                      }
                      onClick={() => chooseLevel(item.level)}
                      style={{ position: "relative" }}
                    >
                      <span className={classes.textLevel}>{item.level}</span>
                      {level.includes(item.level) ? (
                        <CircularProgress
                          variant="static"
                          data-level={item.level}
                          value={100}
                        >
                          {item.level}
                        </CircularProgress>
                      ) : (
                        <CircularProgress
                          variant="static"
                          data-level={item.level}
                          value={(item.level / 15) * 100}
                        >
                          {item.level}
                        </CircularProgress>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </Grid>
          </Grid>
        </div>
        <AllSongs songs={songs} message={message} />
        {loadMessage.length === 0 ? (
          loading ? (
            <Typography variant="body2" style={{ fontSize: "2em" }}>
              {" "}
              ...
            </Typography>
          ) : (
            <div></div>
          )
        ) : (
          <Typography variant="body2" style={{ fontSize: "2em" }}>
            {loadMessage}
          </Typography>
        )}
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  intializeSong,
  moreSong,
};
export default connect(null, mapDispatchToProps)(App);
