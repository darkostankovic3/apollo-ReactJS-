import DateFnsUtils from '@date-io/date-fns';
import {
  Box,
  ClickAwayListener,
  Input,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import {
  ArrowDropDown, ArrowDropUp, ArrowRightAlt, Check,
} from '@material-ui/icons';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState, useEffect } from 'react';

import Accordion from '../../../components/Accordion/Accordion';
import HrDivider from '../../../components/Divider/HrDivider';
import Button from '../../buttons/Button';
import {
  sortProperties, sortTypes, statusFilters,
} from './Data';
import useStyles from './styles';
import { filterCards, sortCards } from './Logic';
import cardData from '../CardData';

export default function FilterAndSortBar(props) {
  const classes = useStyles();

  const { setCards } = props;

  const filterDefaults = {
    statusFilter: '',
    searchTitleFilter: '',
    searchCountryFilter: '',
    dateRange: { startDate: null, endDate: null },
  };
  const [filters, setFilters] = useState(filterDefaults);

  const [sortPropertyTitle, setSortPropertyTitle] = useState('');
  const [sortCardsProperty, setSortCardsProperty] = useState(sortProperties[0].propertyName);
  const [sortCardsType, setSortCardsType] = useState(sortTypes[0]);

  const [titleQuery, setTitleQuery] = useState('');
  const [countryQuery, setCountryQuery] = useState('');

  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const [sortDropdownActive, setSortDropdownActive] = useState(false);
  const [filterDropdownActive, setFilterDropdownActive] = useState(false);

  const sortAndFilterCards = () => {
    const sortedCards = sortCards(sortCardsType, sortCardsProperty, filterCards(filters, cardData));
    setCards({
      cards: sortedCards, sortType: sortCardsType, sortProperty: sortCardsProperty, filters,
    });
  };

  useEffect(() => {
    setSortPropertyTitle(sortProperties.filter(
      (property) => property.propertyName === sortCardsProperty,
    )[0].title);
  }, [sortCardsProperty]);

  useEffect(sortAndFilterCards, [filters, sortCardsType, sortCardsProperty]);

  const handleSortType = (sortType) => {
    setSortCardsType(sortType);
  };

  const handleSortProperty = (property) => {
    setSortCardsProperty(property);
  };

  const handleStartDateChange = (value) => {
    setStartDate(value);
    setFilters({ ...filters, ...filters.dateRange.startDate = value });
  };

  const handleEndDateChange = (value) => {
    setEndDate(value);
    setFilters({ ...filters, ...filters.dateRange.endDate = value });
  };

  const updatedFilters = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  const handleSortButton = () => {
    setSortDropdownActive(!sortDropdownActive);
  };

  const handleSortClickAway = () => {
    setSortDropdownActive(false);
  };

  const handleFilterButton = () => {
    setFilterDropdownActive(!filterDropdownActive);
  };

  const handleFilterClickAway = () => {
    setFilterDropdownActive(false);
  };

  return (
    <Box className={classes.filtersAndSortingWrapper}>
      <ClickAwayListener onClickAway={handleFilterClickAway}>
        <Box mr={4} className={classes.filtersWrapper}>
          <Box mr={1} component="span"><strong>Filters: </strong></Box>
          <Box className={`${classes.dropdownCardWrapper} ${classes.dropdownFiltersCardWrapper}`}>
            <Button
              className={`${classes.dropdownButton} ${filterDropdownActive ? classes.dropdownButtonActive : ''}`}
              type="text"
              onClick={handleFilterButton}
            >
              <Box component="span" className={classes.dropdownButtonText}>
                Filters
              </Box>
              <Box className={classes.dropdownButtonIconsWrapper}>
                {filterDropdownActive ? (
                  <ArrowDropUp fontSize="small" />
                ) : (
                  <ArrowDropDown fontSize="small" />
                )}
              </Box>
            </Button>
            <Box
              className={`
                ${classes.dropdownCard}
                ${classes.dropdownFiltersCard}
                ${filterDropdownActive && classes.dropdownActiveCard}
              `}
            >
              <Box className={classes.dropdownContent}>
                <div className={classes.main}>
                  <Accordion title="Status" id="status-filter">
                    <Box>
                      {statusFilters.map((item) => (
                        <Button
                          key={item}
                          type="text"
                          value={item.toLowerCase()}
                          onClick={() => updatedFilters('statusFilter', item.toLowerCase())}
                          style={{
                            textDecoration: filters.statusFilter === item.toLowerCase() ? 'underline' : '',
                          }}
                        >
                          {item}
                        </Button>
                      ))}
                    </Box>
                  </Accordion>
                  <Accordion title="Activity Name" id="activity-name-filter">
                    <Input
                      placeholder="Search by title.."
                      inputProps={{ 'aria-label': 'search' }}
                      value={titleQuery}
                      onChange={(e) => {
                        setTitleQuery(e.currentTarget.value);
                        updatedFilters('searchTitleFilter', e.currentTarget.value);
                      }}
                    />
                  </Accordion>
                  <Accordion title="Activity Country" id="activity-country-filter">
                    <Input
                      placeholder="Search by country"
                      inputProps={{ 'aria-label': 'search' }}
                      value={countryQuery}
                      onChange={(e) => {
                        setCountryQuery(e.currentTarget.value);
                        updatedFilters('searchCountryFilter', e.currentTarget.value);
                      }}
                    />
                  </Accordion>
                  <Accordion title="Date Range" id="date-range-filter">
                    <Box>
                      <Box className={classes.dateWrapper}>
                        <Box mr={3}><span><strong>From: </strong></span></Box>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            value={startDate}
                            onChange={handleStartDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'start date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Box>
                      <Box className={classes.dateWrapper}>
                        <Box mr={3}><span><strong>To: </strong></span></Box>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            value={endDate}
                            onChange={handleEndDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'end date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Box>
                    </Box>
                  </Accordion>
                </div>
                <footer className={classes.dropdownCardFooter}>
                  <Button
                    type="text"
                    onClick={() => {
                      setTitleQuery('');
                      setCountryQuery('');
                      setStartDate(null);
                      setEndDate(null);
                      setFilters(filterDefaults);
                    }}
                  >
                    Clear filters
                  </Button>
                </footer>
              </Box>
            </Box>
          </Box>
        </Box>
      </ClickAwayListener>
      <ClickAwayListener onClickAway={handleSortClickAway}>
        <Box className={classes.sortingWrapper}>
          <Box mr={1} component="span"><strong>Sort By: </strong></Box>
          <Box className={classes.dropdownCardWrapper}>
            <Button
              className={`${classes.dropdownButton} ${sortDropdownActive ? classes.dropdownButtonActive : ''}`}
              type="text"
              onClick={handleSortButton}
            >
              <Box component="span" className={classes.dropdownButtonText}>
                {sortPropertyTitle}
              </Box>
              <Box className={`${classes.dropdownButtonIconsWrapper} ${classes.dropdownButtonSortIcons}`}>
                <ArrowRightAlt
                  className={`${classes.sortTypeButtonIcon} ${sortCardsType.toLowerCase() === 'descending' ? classes.sortTypeDescending : classes.sortTypeAscending}`}
                  fontSize="small"
                />
                {sortDropdownActive ? (
                  <ArrowDropUp fontSize="small" />
                ) : (
                  <ArrowDropDown fontSize="small" />
                )}
              </Box>
            </Button>
            <Box
              className={`
                ${classes.dropdownCard}
                ${classes.dropdownSortCard}
                ${sortDropdownActive && classes.dropdownActiveCard}
              `}
            >
              <Box className={classes.dropdownContent}>
                <Box>
                  <List disablePadding>
                    {sortProperties.map((item) => (
                      <ListItem
                        key={item.propertyName}
                        className={classes.sortListItem}
                        button
                        disableGutters
                        value={item.propertyName}
                        onClick={() => handleSortProperty(item.propertyName)}
                      >
                        <Box className={classes.sortListIconWrapper}>
                          <Check
                            className={`${classes.sortListIcon} ${sortCardsProperty.toLowerCase() === item.propertyName.toLowerCase() ? classes.sortListIconActive : ''}`}
                            fontSize="small"
                          />
                        </Box>
                        <ListItemText className={`${classes.sortListText} ${sortCardsProperty.toLowerCase() === item.propertyName.toLowerCase() ? classes.sortListTextActive : ''}`}>
                          {item.title}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box mt={2} mb={2}><HrDivider /></Box>
                <Box>
                  <List disablePadding>
                    {sortTypes.map((item) => (
                      <ListItem
                        key={item}
                        className={classes.sortListItem}
                        button
                        disableGutters
                        value={item.toLowerCase()}
                        onClick={() => handleSortType(item.toLowerCase())}
                      >
                        <Box className={classes.sortListIconWrapper}>
                          <Check
                            className={`${classes.sortListIcon} ${sortCardsType.toLowerCase() === item.toLowerCase() ? classes.sortListIconActive : ''}`}
                            fontSize="small"
                          />
                        </Box>
                        <ListItemText className={`${classes.sortListText} ${sortCardsType.toLowerCase() === item.toLowerCase() ? classes.sortListTextActive : ''}`}>
                          {item}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}
