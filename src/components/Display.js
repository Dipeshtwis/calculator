import PropTypes from 'prop-types';

const Display = (props = '0') => <h1>{props.result}</h1>;

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
