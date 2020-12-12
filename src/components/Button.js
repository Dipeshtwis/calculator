import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
const Button = (props) => {
  const a = 9;
  return (
    <button className = {props.name} onClick = {props.clickHandler}>{props.name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
