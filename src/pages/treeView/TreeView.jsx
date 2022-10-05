import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FolderIcon from '@material-ui/icons/Folder';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HttpIcon from '@material-ui/icons/Http';
import LanguageIcon from '@material-ui/icons/Language';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import TreeView from '@material-ui/lab/TreeView';
import Box from '@material-ui/core/Box';
import Widget from '../../components/Widget/Widget';
import TreeItem from '../../components/TreeItem/TreeItem';
import ExtraLink from '../../utils/ExtraLink';

export default function TreeViewPage() {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Widget title="Single Select / No Icons" disableWidgetMenu>
                <TreeView
                  defaultCollapseIcon={<ArrowDropDownIcon />}
                  defaultExpandIcon={<ArrowRightIcon />}
                >
                  <TreeItem nodeId="1" labelText="Applications">
                    <TreeItem nodeId="2" labelText="Calendar" />
                    <TreeItem nodeId="3" labelText="Chrome" />
                    <TreeItem nodeId="4" labelText="Webstorm" />
                  </TreeItem>
                  <TreeItem nodeId="5" labelText="Documents">
                    <TreeItem nodeId="10" labelText="OSS" />
                    <TreeItem nodeId="6" labelText="Material-UI">
                      <TreeItem nodeId="7" labelText="src">
                        <TreeItem nodeId="8" labelText="index.js" />
                        <TreeItem nodeId="9" labelText="tree-view.js" />
                      </TreeItem>
                    </TreeItem>
                  </TreeItem>
                </TreeView>
              </Widget>
            </Grid>
            <Grid item xs={12} md={4}>
              <Widget title="Multi Select" disableWidgetMenu>
                <TreeView
                  defaultCollapseIcon={<ArrowDropDownIcon />}
                  defaultExpandIcon={<ArrowRightIcon />}
                  multiSelect
                >
                  <TreeItem nodeId="1" labelText="Applications">
                    <TreeItem nodeId="2" labelText="Calendar" />
                    <TreeItem nodeId="3" labelText="Chrome" />
                    <TreeItem nodeId="4" labelText="Webstorm" />
                  </TreeItem>
                  <TreeItem nodeId="5" labelText="Documents">
                    <TreeItem nodeId="10" labelText="OSS" />
                    <TreeItem nodeId="6" labelText="Material-UI">
                      <TreeItem nodeId="7" labelText="src">
                        <TreeItem nodeId="8" labelText="index.js" />
                        <TreeItem nodeId="9" labelText="tree-view.js" />
                      </TreeItem>
                    </TreeItem>
                  </TreeItem>
                </TreeView>
              </Widget>
            </Grid>
            <Grid item xs={12} md={4}>
              <Widget title="Single Select / Counter" disableWidgetMenu>
                <TreeView
                  defaultCollapseIcon={<ArrowDropDownIcon />}
                  defaultExpandIcon={<ArrowRightIcon />}
                >
                  <TreeItem nodeId="1" labelText="Applications" labelInfo={3}>
                    <TreeItem nodeId="2" labelText="Calendar" />
                    <TreeItem nodeId="3" labelText="Chrome" />
                    <TreeItem nodeId="4" labelText="Webstorm" />
                  </TreeItem>
                  <TreeItem nodeId="5" labelText="Documents" labelInfo={2}>
                    <TreeItem nodeId="10" labelText="OSS" />
                    <TreeItem nodeId="6" labelText="Material-UI" labelInfo={1}>
                      <TreeItem nodeId="7" labelText="src" labelInfo={2}>
                        <TreeItem nodeId="8" labelText="index.js" />
                        <TreeItem nodeId="9" labelText="tree-view.js" />
                      </TreeItem>
                    </TreeItem>
                  </TreeItem>
                </TreeView>
              </Widget>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Widget title="Icons" disableWidgetMenu>
                <TreeView
                  defaultCollapseIcon={<ArrowDropDownIcon />}
                  defaultExpandIcon={<ArrowRightIcon />}
                  defaultParentIcon={<FolderIcon />}
                >
                  <TreeItem nodeId="1" labelIcon={FolderIcon} labelText="Applications">
                    <TreeItem nodeId="2" labelIcon={CalendarTodayIcon} labelText="Calendar" />
                    <TreeItem nodeId="3" labelIcon={HttpIcon} labelText="Chrome" />
                    <TreeItem nodeId="4" labelIcon={LanguageIcon} labelText="Webstorm" />
                  </TreeItem>
                  <TreeItem nodeId="5" labelIcon={FolderIcon} labelText="Documents">
                    <TreeItem nodeId="6" labelIcon={FolderIcon} labelText="Material-UI">
                      <TreeItem nodeId="7" labelIcon={FolderIcon} labelText="src">
                        <TreeItem nodeId="8" labelIcon={PictureAsPdfIcon} labelText="document.pdf" />
                        <TreeItem nodeId="9" labelIcon={PictureAsPdfIcon} labelText="document-2.pdf" />
                      </TreeItem>
                    </TreeItem>
                  </TreeItem>
                </TreeView>
              </Widget>
            </Grid>
            <Grid item xs={12} md={4}>
              <Widget title="Overflow / Counter > 99" disableWidgetMenu>
                <TreeView
                  defaultCollapseIcon={<ArrowDropDownIcon />}
                  defaultExpandIcon={<ArrowRightIcon />}
                >
                  <TreeItem nodeId="1" labelText="Random title with very loooooong name" labelInfo={100}>
                    <TreeItem nodeId="2" labelText="Calendar" />
                    <TreeItem nodeId="3" labelText="Chrome" />
                    <TreeItem nodeId="4" labelText="Webstorm" />
                  </TreeItem>
                  <TreeItem nodeId="5" labelText="Documents">
                    <TreeItem nodeId="10" labelText="OSS" />
                    <TreeItem nodeId="6" labelText="Material-UI">
                      <TreeItem nodeId="7" labelText="src">
                        <TreeItem nodeId="8" labelText="index.js" />
                        <TreeItem nodeId="9" labelText="tree-view.js" />
                      </TreeItem>
                    </TreeItem>
                  </TreeItem>
                </TreeView>
              </Widget>
            </Grid>
            <Grid item xs={12} md={4}>
              <Widget title="Disabled" disableWidgetMenu>
                <TreeView
                  defaultCollapseIcon={<ArrowDropDownIcon />}
                  defaultExpandIcon={<ArrowRightIcon />}
                  disableSelection
                >
                  <TreeItem nodeId="1" labelText="Applications" disabled>
                    <TreeItem nodeId="2" labelText="Calendar" />
                    <TreeItem nodeId="3" labelText="Chrome" />
                    <TreeItem nodeId="4" labelText="Webstorm" />
                  </TreeItem>
                  <TreeItem nodeId="5" labelText="Documents" disabled>
                    <TreeItem nodeId="10" labelText="OSS" />
                    <TreeItem nodeId="6" labelText="Material-UI">
                      <TreeItem nodeId="7" labelText="src">
                        <TreeItem nodeId="8" labelText="index.js" />
                        <TreeItem nodeId="9" labelText="tree-view.js" />
                      </TreeItem>
                    </TreeItem>
                  </TreeItem>
                </TreeView>
              </Widget>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Tree View Material UI Component"
            link="https://material-ui.com/components/tree-view/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
