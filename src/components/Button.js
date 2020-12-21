import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
const Button = (props) => {
  const inc = 0;
  return (
    <button className={props.color === 'orange' ? 'operand' : 'number'} onClick = {props.clickHandler}>{props.name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Button;
