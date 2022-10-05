import React from 'react';
import {
  Grid, Box,
} from '@material-ui/core';

// components
import CheckCircle from '@material-ui/icons/CheckCircle';
import Tag from '../../components/Tag/Tag';

import Widget from '../../components/Widget/Widget';
import ExtraLink from '../../utils/ExtraLink';

export default function TooltipsComp() {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Widget title="Text" disableWidgetMenu variant="tinychart">
            <Box component="div" display="inline-block" m={1} p={1} ml={0} pl={0}>
              <Tag label="Label" colorBg="colorDataViz1" />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz2" />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz3" />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz4" />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz5" />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz6" />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorNeutral5" />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorNeutral8" />
            </Box>
          </Widget>
        </Grid>
        <Grid item md={12} xs={12}>
          <Widget title="Text w/ Icon" disableWidgetMenu variant="tinychart">
            <Box component="div" display="inline-block" m={1} p={1} ml={0} pl={0}>
              <Tag label="Label" colorBg="colorDataViz1" icon={<CheckCircle />} />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz2" icon={<CheckCircle />} />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz3" icon={<CheckCircle />} />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz4" icon={<CheckCircle />} />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz5" icon={<CheckCircle />} />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorDataViz6" icon={<CheckCircle />} />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorNeutral5" icon={<CheckCircle />} />
            </Box>
            <Box component="div" display="inline-block" m={1} p={1}>
              <Tag label="Label" colorBg="colorNeutral8" icon={<CheckCircle />} />
            </Box>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Chip Material UI Component"
            link="https://material-ui.com/components/chips/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
