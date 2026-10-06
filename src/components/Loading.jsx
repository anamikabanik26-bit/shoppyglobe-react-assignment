import PropTypes from 'prop-types';

export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="status-card" role="status">
      <div className="spinner" />
      <p>{message}</p>
    </div>
  );
}

Loading.propTypes = {
  message: PropTypes.string,
};

