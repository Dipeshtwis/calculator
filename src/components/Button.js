import PropTypes from 'prop-types';

const Button = (props) => <h2>{props.name}</h2>;

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
