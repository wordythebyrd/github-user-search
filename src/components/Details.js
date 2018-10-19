import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    "flex-direction": "column",
    justifyContent: "center"
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

class Details extends React.Component {
  render() {
    const { classes, details } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography gutterBottom variant="h5" component="h2">
            <Avatar
              alt={details.login}
              src={details.avatar_url}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            {this.props.details.login}
          </Typography>
          {details.name ? <Typography>Name: {details.name}</Typography> : ""}
          {details.company ? (
            <Typography>Company: {details.company}</Typography>
          ) : (
            ""
          )}
          {details.location ? (
            <Typography>Location: {details.location}</Typography>
          ) : (
            ""
          )}
          {details.followers ? (
            <Typography>Followers: {details.followers}</Typography>
          ) : (
            ""
          )}
          {details.public_repos ? (
            <Typography>Public Repos: {details.public_repos}</Typography>
          ) : (
            ""
          )}
          <Button
            size="small"
            color="primary"
            href={details.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to profile
          </Button>
        </div>
      </Modal>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
