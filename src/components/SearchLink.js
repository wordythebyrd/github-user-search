import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class SearchLink extends React.Component {
  handleClick = () => {
    this.props.onPageLinkClick(this.props.link);
  };
  render() {
    const { classes } = this.props;

    return (
      <Button
        className={classes.button}
        color="inherit"
        variant="outlined"
        onClick={this.handleClick}
      >
        {this.props.text}
      </Button>
    );
  }
}

export default withStyles(styles)(SearchLink);
