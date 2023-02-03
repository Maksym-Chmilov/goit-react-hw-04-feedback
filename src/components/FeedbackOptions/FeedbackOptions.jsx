import propTypes from 'prop-types';
import { FeedbackBtn, FeedbackBox } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackBox>
    {options.map(option => (
      <FeedbackBtn key={option} onClick={onLeaveFeedback}>
        {option}
      </FeedbackBtn>
    ))}
  </FeedbackBox>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};