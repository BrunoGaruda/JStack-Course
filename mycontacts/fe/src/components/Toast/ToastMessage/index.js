import PropTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/xCircleIcon.svg';
import checkCircle from '../../../assets/images/icons/checkCircle.svg';

function ToastMessage({ text, type }) {
  return (
    <Container>
      {type === 'danger' && <img src={xCircleIcon} alt="X" /> }
      {type === 'success' && <img src={checkCircle} alt="Check" /> }
      <strong>
        {text}
      </strong>
    </Container>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
