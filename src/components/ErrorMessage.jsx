import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function ErrorMessage({ message = 'Something went wrong.' }) {
  return (
    <div className="status-card error-card" role="alert">
      <h2>Oops!</h2>
      <p>{message}</p>
      <Link className="button secondary" to="/">Back to Home</Link>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
