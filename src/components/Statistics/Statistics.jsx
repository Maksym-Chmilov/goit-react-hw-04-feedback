import propTypes from 'prop-types';
import {
  StatisticskList,
  StatisticskItem,
  StatisticskStyle,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticskList>
      <StatisticskItem>
        Good: <StatisticskStyle>{good}</StatisticskStyle>
      </StatisticskItem>
      <StatisticskItem>
        Neutral: <StatisticskStyle>{neutral}</StatisticskStyle>
      </StatisticskItem>
      <StatisticskItem>
        Bad: <StatisticskStyle>{bad}</StatisticskStyle>
      </StatisticskItem>
      <StatisticskItem>
        Total: <StatisticskStyle>{total}</StatisticskStyle>
      </StatisticskItem>
      <StatisticskItem>
        Positive feedback:{' '}
        <StatisticskStyle>{positivePercentage}</StatisticskStyle>%
      </StatisticskItem>
    </StatisticskList>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};