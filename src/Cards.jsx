import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white"
  }
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid container spacing={1} xs={12} sm={12} md={6} lg={2}>
          <Grid item xs={4}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "blue" }}
            >
              item 1
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "blue" }}
            >
              item 1
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "blue" }}
            >
              item 1
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={2}>
          <Paper className={classes.paper} style={{ backgroundColor: "red" }}>
            item 2
          </Paper>
        </Grid>
        <Grid item xs={8} sm={12} md={6} lg={2}>
          <Paper className={classes.paper} style={{ backgroundColor: "green" }}>
            item 3
          </Paper>
        </Grid>
        <Grid item xs={4} sm={12} md={6} lg={2}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "violet" }}
          >
            item 4
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={2}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "orange" }}
          >
            item 5
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={2}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "blueviolet" }}
          >
            item 6
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
