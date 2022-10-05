import React from 'react';
import { Grid } from '@material-ui/core';

import ExtraLink from '../../../utils/ExtraLink';
import Area from './rows/MicroAreaRow';
import BandedLine from './rows/MicroBandedLineRow';
import Bullet from './rows/MicroBulletRow';
import Column from './rows/MicroColumnRow';
import Donut from './rows/MicroDonutRow';
import Line from './rows/MicroLineRow';
import WinLoss from './rows/MicroWinLossRow';

export default function RMicroKpiCharts() {
  return (
    <Grid container spacing={4}>
      <Area />
      <BandedLine />
      <Bullet />
      <Column />
      <Donut />
      <Line />
      <WinLoss />
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5eea51b1edd37d2b43349a19" />
      </Grid>
    </Grid>
  );
}
