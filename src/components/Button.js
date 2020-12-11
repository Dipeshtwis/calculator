import PropTypes from 'prop-types';

const Button = (props) => <button onClick = {props.clickHandler}>{props.name}</button>;

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
