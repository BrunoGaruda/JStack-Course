import PropTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/xCircleIcon.svg';
import checkCircle from '../../../assets/images/icons/checkCircle.svg';

function ToastMessage({ message, onRemoveMessage }) {
  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container type={message.type} onClick={handleRemoveToast}>
      {message.type === 'danger' && <img src={xCircleIcon} alt="X" /> }
      {message.type === 'success' && <img src={checkCircle} alt="Check" /> }
      <strong>
        {message.text}
      </strong>
    </Container>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
