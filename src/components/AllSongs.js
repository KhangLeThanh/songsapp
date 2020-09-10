import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import _ from "lodash";
import default_image from "../image/default-album-art.jpg";
import {
  addFavourite,
  getFavourite,
  removedFavourite,
} from "../reducers/favouriteReducer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    color: "#fff",
  },
  wrapperSong: {
    padding: "10px 5px",
    backgroundColor: "#0a0a0a",
    marginBottom: "1.5em",
    alignItems: "center",
  },
  imageSong: {
    width: "100%",
    verticalAlign: "middle",
  },
  wrapperLevel: {
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
  LeftTextLevel: {
    position: "absolute",
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-40%)",
    fontSize: "1em",
    fontWeight: "600",
    color: "#fff",
  },
  iconFavorite: {
    color: "#dc001c",
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconFavoriteBorder: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const AllSongs = (props) => {
  const classes = useStyles();
  const uniqueSongByID = _.uniqBy(props.songs, "id");

  const favourite = useSelector((state) => state.favourite);
  const handleAdd = (id) => {
    props.addFavourite(id);
  };
  const handleRemove = (song) => {
    props.removedFavourite(song);
  };

  return (
    <div>
      <div className={classes.grid} id="list">
        {props.message.length > 0 ? (
          <Typography variant="h3">{props.message}</Typography>
        ) : (
          uniqueSongByID
            .sort((a, b) => a.level - b.level)
            .map((item) => (
              <Grid container className={classes.wrapperSong} key={item.id}>
                <Grid item xs={1} sm={1} md={1} style={{ textAlign: "left" }}>
                  <img
                    src={item.images}
                    alt={item.images}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = default_image;
                    }}
                    className={classes.imageSong}
                  />
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                  <div style={{ marginLeft: "20px" }}>
                    <Typography variant="body2" style={{ textAlign: "left" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: "left" }}>
                      {item.artist}
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={2}
                  style={{ position: "relative" }}
                  className={classes.wrapperLevel}
                >
                  <span className={classes.LeftTextLevel}>{item.level}</span>
                  <CircularProgress
                    variant="static"
                    className={[classes.levelCircle, item.level, "level"].join(
                      " "
                    )}
                    data-level={item.level}
                    value={(item.level / 15) * 100}
                  >
                    {item.level}
                  </CircularProgress>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                  {favourite.findIndex((x) => x.songId === item.id) >= 0 ? (
                    <FavoriteIcon
                      className={classes.iconFavorite}
                      onClick={() =>
                        handleRemove(
                          favourite[
                            favourite.findIndex((x) => x.songId === item.id)
                          ]
                        )
                      }
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className={classes.iconFavoriteBorder}
                      onClick={() => handleAdd(item.id)}
                    />
                  )}
                </Grid>
              </Grid>
            ))
        )}
      </div>
    </div>
  );
};
const mapDispatchToProps = { addFavourite, getFavourite, removedFavourite };
export default connect(null, mapDispatchToProps)(AllSongs);
