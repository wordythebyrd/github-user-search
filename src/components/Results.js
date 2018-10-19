import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import SearchLink from "./SearchLink";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    justifyContent: "space-around",
    height: "100vh",
    overflow: "auto",
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  item: {
    "margin-bottom": 5
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 5,
    position: "sticky",
    width: "100%"
  }
});

class Results extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {this.props.users.map(user => (
              <Grid
                item
                className={classNames(classes.item)}
                key={user.id}
                sm={6}
                md={4}
                lg={3}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={user.avatar_url}
                    title={user.login}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.login}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.props.handleOpen(user.url)}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              {Object.keys(this.props.links).map((key, index) => (
                <SearchLink
                  key={index}
                  text={key}
                  link={this.props.links[key]}
                  onPageLinkClick={this.props.getUsers}
                />
              ))}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              Total records: {this.props.total}
            </Typography>
          </footer>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
