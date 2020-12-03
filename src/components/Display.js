import PropTypes from 'prop-types';

const Display = (props = 'O') => <h1>{props.result}</h1>;

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
