import PropTypes from 'prop-types';

const Display = (props) => <h1>{props.result || props.next || '0'}</h1>;

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
