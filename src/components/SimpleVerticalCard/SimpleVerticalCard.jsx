import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Typography } from '../Wrappers/Wrappers';
// styles
import useStyles from './styles';

const SimpleVerticalCard = (props) => {
  // Static variables
  const {
    title,
    startDate,
    endDate,
    dueDate,
    saveDate,
    country,
    hasStar,
    isStarred,
    isActive,
    onCardClickCallback,
    onStarClickCallback,
    cardState,
  } = props;
  const classes = useStyles();
  const dateFormat = 'DD-MMM-YYYY';

  // State variables
  const [isStar, setStar] = useState(isStarred);

  return (
    <Box
      className={`${classes.cardContainer} ${isActive && classes.cardContainerActive}`}
      onClick={() => {
        onCardClickCallback();
      }}
    >
      {title && (
        <Box component="header">
          <Typography
            className={classes.title}
            variant="h5"
            weight="semiBold"
            color="colorBlack"
          >
            {title}
          </Typography>
        </Box>
      )}
      <Box component="main" className={classes.main}>
        <Box className={classes.contentWrapper}>
          {dueDate && (
            <Typography color={isActive ? 'colorBlack' : 'colorNeutral7'}>
              Due
              {' '}
              <span>{moment(dueDate).format(dateFormat)}</span>
              {country && (
                <span>
                  {' '}
                  &bull;
                  {' '}
                  {country}
                </span>
              )}
            </Typography>
          )}
          {saveDate && (
            <Typography color={isActive ? 'colorBlack' : 'colorNeutral7'}>
              Last saved
              {' '}
              {moment(saveDate).format(dateFormat)}
            </Typography>
          )}
          {startDate && endDate && (
            <Typography
              variant="caption"
              color={isActive ? 'colorBlack' : 'colorNeutral7'}
            >
              Start
              {' '}
              {moment(startDate).format(dateFormat)}
              {' '}
              &bull;
              {' '}
              End
              {' '}
              {moment(endDate).format(dateFormat)}
            </Typography>
          )}
        </Box>
        <Box className={classes.stateWrapper}>
          {cardState && (
            <Box mb={hasStar ? -1 : 0} textAlign="center">
              <Typography
                block={hasStar}
                color={isActive ? 'colorBlack' : 'colorNeutral7'}
              >
                {cardState}
              </Typography>
            </Box>
          )}
          {hasStar && (
            <IconButton
              classes={
                {
                  root: classes.starButton,
                }
              }
              onClick={(e) => {
                e.stopPropagation();
                setStar(!isStar);
                onStarClickCallback();
              }}
            >
              {isStar ? (
                <StarIcon classes={{ root: classes.starIcon }} />
              ) : (
                <StarBorderIcon classes={{ root: classes.starBorderIcon }} />
              )}
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

SimpleVerticalCard.defaultProps = {
  title: '',
  startDate: null,
  endDate: null,
  dueDate: null,
  saveDate: null,
  country: '',
  hasStar: true,
  isStarred: false,
  isActive: false,
  onCardClickCallback: () => { },
  onStarClickCallback: () => { },
  cardState: '',
};

SimpleVerticalCard.propTypes = {
  title: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  dueDate: PropTypes.instanceOf(Date),
  saveDate: PropTypes.instanceOf(Date),
  country: PropTypes.string,
  hasStar: PropTypes.bool,
  isStarred: PropTypes.bool,
  isActive: PropTypes.bool,
  onCardClickCallback: PropTypes.func,
  onStarClickCallback: PropTypes.func,
  cardState: PropTypes.string,
};

export default SimpleVerticalCard;
