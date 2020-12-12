import PropTypes from 'prop-types';

const Display = (props) => <h2 className ='input-value'>{props.result || props.next || '0'}</h2>;

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
