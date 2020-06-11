import React from "react";

// this component will wotk only for production
class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <div>Ooooops!. Something went wrong!</div>
    ) : (
      <div>{children}</div>
    );
  }
}

export default ErrorBoundry;
