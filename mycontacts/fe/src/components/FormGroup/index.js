import PropTypes from 'prop-types';
import { Container } from './styles';
import Spinner from '../Spinner';
import Loader from '../Loader';

export default function FormGroup({ children, error, isLoading }) {
  return (
    <Container>

      <Loader isLoading />
      <div className="form-item">
        {children}

        {isLoading && <Spinner />}
      </div>

      {error && <small>{error}</small>}
    </Container>

  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormGroup.defaultProps = {
  error: null,
  isLoading: false,
};
