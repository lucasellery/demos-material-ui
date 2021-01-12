import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Cards from "./Cards";
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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Welcome, Lucas
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={2}>
            <Button>Logout</Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} lg={12} container spacing={2} alignItems="center">
          <Grid item xs={6} lg={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur arcu non mi ornare, ac elementum sem accumsan. Etiam
            scelerisque eu nisi at imperdiet. Mauris non urna varius, tempor
            justo in, cursus mauris. Mauris lobortis eros mauris, quis ultrices
            diam gravida in. Pellentesque rutrum sed odio id cursus. Proin
            tincidunt fringilla mi in dapibus. Aenean tincidunt tincidunt
            tortor, ut venenatis nunc vehicula a. In eros enim, laoreet et enim
            in, accumsan consequat ligula. Suspendisse potenti. Proin sapien
            lorem, tempor tincidunt turpis at, sollicitudin pharetra magna.
          </Grid>
          <Grid item xs={6} lg={6}>
            Nunc convallis nibh vitae erat laoreet placerat. Quisque vel congue
            dolor, sed ullamcorper sapien. Nulla porttitor erat sapien, et
            fermentum mauris vehicula vitae. Phasellus massa mauris, pulvinar eu
            tempor vel, dictum ut ipsum. Duis ac magna augue. Sed nisl mi,
            tristique at rhoncus vel, interdum id arcu. Morbi fermentum velit
            quam, nec maximus felis congue non. Suspendisse hendrerit sem at
            ipsum pellentesque accumsan. Proin placerat arcu eu quam dictum
            semper. Phasellus rhoncus orci libero, sit amet dictum felis
            pulvinar dapibus. Mauris auctor odio eget nunc viverra, at dignissim
            nulla porttitor.
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      {/* <Cards /> */}
    </div>
  );
}
