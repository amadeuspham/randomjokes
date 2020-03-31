import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "left",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AboutCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          About this website
        </Typography>
        <Typography variant="h5" component="h2">
          Random Jokes
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by Harry Pham
        </Typography>
        <Typography variant="body2" component="p">
          A small and fun website created during COVID-19 self-isolation period.
          <br />
          Built with React and TypeScript, the jokes themselves are fetched from {" "}
          <br/>
          <a href="https://github.com/15Dkatz/official_joke_api" target="_blank" rel="noopener noreferrer">
            Official Joke API
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}