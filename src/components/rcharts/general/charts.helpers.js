const heights = {
  MULTI: 'multi',
  KPI: 'kpi',
  TABLE: 'table',
  MICROVIZ: 'microviz',
  DEFAULT: 'default',
  XAXIS: 'xaxis',
};

const heightMappings = (theme) => ({
  multi: theme.spacing(9),
  kpi: 70,
  table: theme.spacing(12),
  microviz: 365,
  default: 456,
  xaxis: theme.spacing(10),
});

const getHeight = (theme, heightType) => {
  const retHeight = heightType
    ? heightMappings(theme)[heightType]
    : heightMappings(theme)[heights.DEFAULT];
  return retHeight;
};

/* eslint-disable import/prefer-default-export */
export {
  heights,
  getHeight,
};
