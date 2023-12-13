import PropTypes from "prop-types";

export default function UserGreeting(props) {
  const message = {
    welcome: (
      <h2 className="message welcome">Welcome {props.username}</h2>
    ),

    loginPrompt: (
      <h2 className="message login-prompt">Please Log In to continue</h2>
    ),
  };

  return props.isLoggedIn ? message.welcome : message.loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
