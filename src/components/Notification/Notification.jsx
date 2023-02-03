import propTypes from 'prop-types';
import { NotificMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <div>
      <NotificMessage>{message}</NotificMessage>
    </div>
  );
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};