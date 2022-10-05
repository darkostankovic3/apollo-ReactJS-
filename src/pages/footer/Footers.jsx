import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import Icon from '@mdi/react';
import {
  mdiFacebookBox as FacebookIcon,
  mdiTwitterBox as TwitterIcon,
  mdiGithubBox as GithubIcon,
} from '@mdi/js';
import Widget from '../../components/Widget/Widget';
import Footer from '../../components/Footer/Footer';
import {
  Link,
  Tooltip,
} from '../../components/Wrappers/Wrappers';

import useStyles from './styles';

export default function FootersPage() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget title="Footer Example" disableWidgetMenu className={classes.footerContainer}>
            <div>
              <p>
                Place the footer component at the bottom of the relatively
                positioned container in which you want it to appear.
              </p>
              <p className={classes.explanation}>
                The Footer component basically acts as a container, and is a pure component,
                so style the child elements as desired and the Footer will take care of the
                positioning on the page. There is a footer component at the bottom of this card,
                and also at the bottom of this app on every page.
              </p>
            </div>
            <Footer neutralPosition>
              <div className={classes.footerContentContainer}>
                <p className={classes.footerText}>Footer content goes here</p>
                <div className={classes.iconContainer}>
                  <Tooltip
                    placement="top"
                    disableFocusListener
                    disableTouchListener
                    title="Facebook"
                  >
                    <span>
                      <Link href="/" target="_blank">
                        <IconButton aria-label="facebook">
                          <Icon path={FacebookIcon} size={1} color="#6E6E6E99" />
                        </IconButton>
                      </Link>
                    </span>
                  </Tooltip>
                  <Tooltip
                    placement="top"
                    disableFocusListener
                    disableTouchListener
                    title="Twitter"
                  >
                    <span>
                      <Link href="/" target="_blank">
                        <IconButton aria-label="twitter">
                          <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
                        </IconButton>
                      </Link>
                    </span>
                  </Tooltip>
                  <Tooltip
                    placement="top"
                    disableFocusListener
                    disableTouchListener
                    title="Github"
                  >
                    <span>
                      <Link href="/" target="_blank">
                        <IconButton aria-label="github">
                          <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                        </IconButton>
                      </Link>
                    </span>
                  </Tooltip>
                </div>
              </div>
            </Footer>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
