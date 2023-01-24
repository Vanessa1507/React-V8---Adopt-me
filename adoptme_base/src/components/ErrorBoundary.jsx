import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  //React has to call it directly on the class and not necessarily on an instance of the class
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //Typically we would log this to something like TrackJS, New Relic
    console.error("ErrorBoundary component caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.
          <Link to="/">Click here to go back to the home page.</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
