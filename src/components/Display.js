import PropTypes from 'prop-types';

const Display = (props) => <h1 className ='input-value'>{props.result || props.next || '0'}</h1>;

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
