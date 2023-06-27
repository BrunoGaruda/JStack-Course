import PropTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/xCircleIcon.svg';
import checkCircle from '../../../assets/images/icons/checkCircle.svg';

function ToastMessage({
  id, text, type, onRemoveMessage,
}) {
  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <Container type={type} onClick={handleRemoveToast}>
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
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
  onRemoveMessage: PropTypes.func.isRequired,
};

ToastMessage.defaultProps = {
  type: 'default',
};
