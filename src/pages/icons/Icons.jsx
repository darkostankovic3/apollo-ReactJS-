import React, { useState } from 'react';
import {
  Typography, Grid, Tabs, Tab,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';

import useStyles from './styles';

// icons sets
import 'font-awesome/css/font-awesome.min.css';

function IconGridItem({ children }) {
  // This Grid item is abstracted on this page to make changing the grid columns easier
  const classes = useStyles();
  return (
    <Grid
      className={classes.materialIcon}
      item
      md={3}
      lg={2}
      sm={4}
      xs={12}
    >
      {children}
    </Grid>
  );
}

export default function IconsPage() {
  const classes = useStyles();

  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={activeTabId}
        onChange={(e, id) => setActiveTabId(id)}
        className={classes.iconsBar}
      >
        <Tab label="Material Icons" classes={{ root: classes.tab }} />
        <Tab label="Apollo Next Icons" classes={{ root: classes.tab }} />
      </Tabs>
      {activeTabId === 0 && (
      <div>
        <Grid container spacing={2} className="icon-list">
          <IconGridItem>
            <Icons.AccessAlarms />
            <Typography className={classes.materialIconText}>
              AccessAlarms
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Accessibility />
            <Typography className={classes.materialIconText}>
              Accessibility
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Accessible />
            <Typography className={classes.materialIconText}>
              Accessible
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AccessibleForward />
            <Typography className={classes.materialIconText}>
              AccessibleForward
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AccessTime />
            <Typography className={classes.materialIconText}>
              AccessTime
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AccountBalance />
            <Typography className={classes.materialIconText}>
              AccountBalance
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AccountBalanceWallet />
            <Typography className={classes.materialIconText}>
              AccountBalanceWallet
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AccountBox />
            <Typography className={classes.materialIconText}>
              AccountBox
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AccountCircle />
            <Typography className={classes.materialIconText}>
              AccountCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AcUnit />
            <Typography className={classes.materialIconText}>
              AcUnit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Adb />
            <Typography className={classes.materialIconText}>
              Adb
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Adjust />
            <Typography className={classes.materialIconText}>
              Adjust
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirlineSeatFlat />
            <Typography className={classes.materialIconText}>
              AirlineSeatFlat
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirlineSeatFlatAngled />
            <Typography className={classes.materialIconText}>
              AirlineSeatFlatAngled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirlineSeatIndividualSuite />
            <Typography className={classes.materialIconText}>
              AirlineSeatIndividualSuite
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirlineSeatLegroomExtra />
            <Typography className={classes.materialIconText}>
              AirlineSeatLegroomExtra
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirlineSeatLegroomNormal />
            <Typography className={classes.materialIconText}>
              AirlineSeatLegroomNormal
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirlineSeatLegroomReduced />
            <Typography className={classes.materialIconText}>
              AirlineSeatLegroomReduced
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirlineSeatReclineExtra />
            <Typography className={classes.materialIconText}>
              AirlineSeatReclineExtra
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirlineSeatReclineNormal />
            <Typography className={classes.materialIconText}>
              AirlineSeatReclineNormal
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirplanemodeActive />
            <Typography className={classes.materialIconText}>
              AirplanemodeActive
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirplanemodeInactive />
            <Typography className={classes.materialIconText}>
              AirplanemodeInactive
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Airplay />
            <Typography className={classes.materialIconText}>
              Airplay
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AirportShuttle />
            <Typography className={classes.materialIconText}>
              AirportShuttle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Alarm />
            <Typography className={classes.materialIconText}>
              Alarm
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Album />
            <Typography className={classes.materialIconText}>
              Album
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AllInbox />
            <Typography className={classes.materialIconText}>
              AllInbox
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AllInclusive />
            <Typography className={classes.materialIconText}>
              AllInclusive
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AllOut />
            <Typography className={classes.materialIconText}>
              AllOut
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AlternateEmail />
            <Typography className={classes.materialIconText}>
              AlternateEmail
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Android />
            <Typography className={classes.materialIconText}>
              Android
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Announcement />
            <Typography className={classes.materialIconText}>
              Announcement
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Apps />
            <Typography className={classes.materialIconText}>
              Apps
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Archive />
            <Typography className={classes.materialIconText}>
              Archive
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowBack />
            <Typography className={classes.materialIconText}>
              ArrowBack
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowBackIos />
            <Typography className={classes.materialIconText}>
              ArrowBackIos
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowDownward />
            <Typography className={classes.materialIconText}>
              ArrowDownward
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowDropDown />
            <Typography className={classes.materialIconText}>
              ArrowDropDown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowDropDownCircle />
            <Typography className={classes.materialIconText}>
              ArrowDropDownCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowDropUp />
            <Typography className={classes.materialIconText}>
              ArrowDropUp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowForward />
            <Typography className={classes.materialIconText}>
              ArrowForward
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowForwardIos />
            <Typography className={classes.materialIconText}>
              ArrowForwardIos
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowLeft />
            <Typography className={classes.materialIconText}>
              ArrowLeft
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowRight />
            <Typography className={classes.materialIconText}>
              ArrowRight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowRightAlt />
            <Typography className={classes.materialIconText}>
              ArrowRightAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArrowUpward />
            <Typography className={classes.materialIconText}>
              ArrowUpward
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ArtTrack />
            <Typography className={classes.materialIconText}>
              ArtTrack
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AspectRatio />
            <Typography className={classes.materialIconText}>
              AspectRatio
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Assessment />
            <Typography className={classes.materialIconText}>
              Assessment
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Assignment />
            <Typography className={classes.materialIconText}>
              Assignment
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AssignmentInd />
            <Typography className={classes.materialIconText}>
              AssignmentInd
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AssignmentLate />
            <Typography className={classes.materialIconText}>
              AssignmentLate
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AssignmentReturn />
            <Typography className={classes.materialIconText}>
              AssignmentReturn
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AssignmentReturned />
            <Typography className={classes.materialIconText}>
              AssignmentReturned
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AssignmentTurnedIn />
            <Typography className={classes.materialIconText}>
              AssignmentTurnedIn
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Assistant />
            <Typography className={classes.materialIconText}>
              Assistant
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AssistantPhoto />
            <Typography className={classes.materialIconText}>
              AssistantPhoto
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Atm />
            <Typography className={classes.materialIconText}>
              Atm
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AttachFile />
            <Typography className={classes.materialIconText}>
              AttachFile
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Attachment />
            <Typography className={classes.materialIconText}>
              Attachment
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AttachMoney />
            <Typography className={classes.materialIconText}>
              AttachMoney
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Audiotrack />
            <Typography className={classes.materialIconText}>
              Audiotrack
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Autorenew />
            <Typography className={classes.materialIconText}>
              Autorenew
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.AvTimer />
            <Typography className={classes.materialIconText}>
              AvTimer
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Backspace />
            <Typography className={classes.materialIconText}>
              Backspace
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Backup />
            <Typography className={classes.materialIconText}>
              Backup
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Ballot />
            <Typography className={classes.materialIconText}>
              Ballot
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BarChart />
            <Typography className={classes.materialIconText}>
              BarChart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Battery20 />
            <Typography className={classes.materialIconText}>
              Battery20
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Battery30 />
            <Typography className={classes.materialIconText}>
              Battery30
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Battery50 />
            <Typography className={classes.materialIconText}>
              Battery50
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Battery60 />
            <Typography className={classes.materialIconText}>
              Battery60
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Battery80 />
            <Typography className={classes.materialIconText}>
              Battery80
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Battery90 />
            <Typography className={classes.materialIconText}>
              Battery90
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryAlert />
            <Typography className={classes.materialIconText}>
              BatteryAlert
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryCharging20 />
            <Typography className={classes.materialIconText}>
              BatteryCharging20
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryCharging30 />
            <Typography className={classes.materialIconText}>
              BatteryCharging30
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryCharging50 />
            <Typography className={classes.materialIconText}>
              BatteryCharging50
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryCharging60 />
            <Typography className={classes.materialIconText}>
              BatteryCharging60
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryCharging80 />
            <Typography className={classes.materialIconText}>
              BatteryCharging80
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryCharging90 />
            <Typography className={classes.materialIconText}>
              BatteryCharging90
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryChargingFull />
            <Typography className={classes.materialIconText}>
              BatteryChargingFull
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryFull />
            <Typography className={classes.materialIconText}>
              BatteryFull
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryStd />
            <Typography className={classes.materialIconText}>
              BatteryStd
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BatteryUnknown />
            <Typography className={classes.materialIconText}>
              BatteryUnknown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BeachAccess />
            <Typography className={classes.materialIconText}>
              BeachAccess
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Beenhere />
            <Typography className={classes.materialIconText}>
              Beenhere
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Block />
            <Typography className={classes.materialIconText}>
              Block
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Bluetooth />
            <Typography className={classes.materialIconText}>
              Bluetooth
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BluetoothAudio />
            <Typography className={classes.materialIconText}>
              BluetoothAudio
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BluetoothConnected />
            <Typography className={classes.materialIconText}>
              BluetoothConnected
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BluetoothDisabled />
            <Typography className={classes.materialIconText}>
              BluetoothDisabled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BluetoothSearching />
            <Typography className={classes.materialIconText}>
              BluetoothSearching
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BlurCircular />
            <Typography className={classes.materialIconText}>
              BlurCircular
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BlurLinear />
            <Typography className={classes.materialIconText}>
              BlurLinear
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Book />
            <Typography className={classes.materialIconText}>
              Book
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Bookmark />
            <Typography className={classes.materialIconText}>
              Bookmark
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BookmarkBorder />
            <Typography className={classes.materialIconText}>
              BookmarkBorder
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Bookmarks />
            <Typography className={classes.materialIconText}>
              Bookmarks
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderAll />
            <Typography className={classes.materialIconText}>
              BorderAll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderBottom />
            <Typography className={classes.materialIconText}>
              BorderBottom
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderClear />
            <Typography className={classes.materialIconText}>
              BorderClear
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderColor />
            <Typography className={classes.materialIconText}>
              BorderColor
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderHorizontal />
            <Typography className={classes.materialIconText}>
              BorderHorizontal
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderInner />
            <Typography className={classes.materialIconText}>
              BorderInner
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderLeft />
            <Typography className={classes.materialIconText}>
              BorderLeft
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderOuter />
            <Typography className={classes.materialIconText}>
              BorderOuter
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderRight />
            <Typography className={classes.materialIconText}>
              BorderRight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderStyle />
            <Typography className={classes.materialIconText}>
              BorderStyle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderTop />
            <Typography className={classes.materialIconText}>
              BorderTop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BorderVertical />
            <Typography className={classes.materialIconText}>
              BorderVertical
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BrandingWatermark />
            <Typography className={classes.materialIconText}>
              BrandingWatermark
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Brightness1 />
            <Typography className={classes.materialIconText}>
              Brightness1
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Brightness2 />
            <Typography className={classes.materialIconText}>
              Brightness2
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Brightness3 />
            <Typography className={classes.materialIconText}>
              Brightness3
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Brightness4 />
            <Typography className={classes.materialIconText}>
              Brightness4
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Brightness5 />
            <Typography className={classes.materialIconText}>
              Brightness5
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Brightness6 />
            <Typography className={classes.materialIconText}>
              Brightness6
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Brightness7 />
            <Typography className={classes.materialIconText}>
              Brightness7
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BrightnessAuto />
            <Typography className={classes.materialIconText}>
              BrightnessAuto
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BrightnessHigh />
            <Typography className={classes.materialIconText}>
              BrightnessHigh
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BrightnessLow />
            <Typography className={classes.materialIconText}>
              BrightnessLow
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BrightnessMedium />
            <Typography className={classes.materialIconText}>
              BrightnessMedium
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BrokenImage />
            <Typography className={classes.materialIconText}>
              BrokenImage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Brush />
            <Typography className={classes.materialIconText}>
              Brush
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BubbleChart />
            <Typography className={classes.materialIconText}>
              BubbleChart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BugReport />
            <Typography className={classes.materialIconText}>
              BugReport
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Build />
            <Typography className={classes.materialIconText}>
              Build
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BurstMode />
            <Typography className={classes.materialIconText}>
              BurstMode
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Business />
            <Typography className={classes.materialIconText}>
              Business
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.BusinessCenter />
            <Typography className={classes.materialIconText}>
              BusinessCenter
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Cached />
            <Typography className={classes.materialIconText}>
              Cached
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Cake />
            <Typography className={classes.materialIconText}>
              Cake
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CalendarToday />
            <Typography className={classes.materialIconText}>
              CalendarToday
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CalendarViewDay />
            <Typography className={classes.materialIconText}>
              CalendarViewDay
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Call />
            <Typography className={classes.materialIconText}>
              Call
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CallEnd />
            <Typography className={classes.materialIconText}>
              CallEnd
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CallMade />
            <Typography className={classes.materialIconText}>
              CallMade
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CallMerge />
            <Typography className={classes.materialIconText}>
              CallMerge
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CallMissed />
            <Typography className={classes.materialIconText}>
              CallMissed
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CallMissedOutgoing />
            <Typography className={classes.materialIconText}>
              CallMissedOutgoing
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CallReceived />
            <Typography className={classes.materialIconText}>
              CallReceived
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CallSplit />
            <Typography className={classes.materialIconText}>
              CallSplit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CallToAction />
            <Typography className={classes.materialIconText}>
              CallToAction
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Camera />
            <Typography className={classes.materialIconText}>
              Camera
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CameraAlt />
            <Typography className={classes.materialIconText}>
              CameraAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CameraEnhance />
            <Typography className={classes.materialIconText}>
              CameraEnhance
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CameraFront />
            <Typography className={classes.materialIconText}>
              CameraFront
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CameraRear />
            <Typography className={classes.materialIconText}>
              CameraRear
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CameraRoll />
            <Typography className={classes.materialIconText}>
              CameraRoll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Cancel />
            <Typography className={classes.materialIconText}>
              Cancel
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CancelPresentation />
            <Typography className={classes.materialIconText}>
              CancelPresentation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CardGiftcard />
            <Typography className={classes.materialIconText}>
              CardGiftcard
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CardMembership />
            <Typography className={classes.materialIconText}>
              CardMembership
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CardTravel />
            <Typography className={classes.materialIconText}>
              CardTravel
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Casino />
            <Typography className={classes.materialIconText}>
              Casino
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Cast />
            <Typography className={classes.materialIconText}>
              Cast
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CastConnected />
            <Typography className={classes.materialIconText}>
              CastConnected
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CastForEducation />
            <Typography className={classes.materialIconText}>
              CastForEducation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Category />
            <Typography className={classes.materialIconText}>
              Category
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CellWifi />
            <Typography className={classes.materialIconText}>
              CellWifi
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CenterFocusStrong />
            <Typography className={classes.materialIconText}>
              CenterFocusStrong
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CenterFocusWeak />
            <Typography className={classes.materialIconText}>
              CenterFocusWeak
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ChangeHistory />
            <Typography className={classes.materialIconText}>
              ChangeHistory
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Chat />
            <Typography className={classes.materialIconText}>
              Chat
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ChatBubble />
            <Typography className={classes.materialIconText}>
              ChatBubble
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ChatBubbleOutline />
            <Typography className={classes.materialIconText}>
              ChatBubbleOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Check />
            <Typography className={classes.materialIconText}>
              Check
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CheckBox />
            <Typography className={classes.materialIconText}>
              CheckBox
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CheckBoxOutlineBlank />
            <Typography className={classes.materialIconText}>
              CheckBoxOutlineBlank
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CheckCircle />
            <Typography className={classes.materialIconText}>
              CheckCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CheckCircleOutline />
            <Typography className={classes.materialIconText}>
              CheckCircleOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ChevronLeft />
            <Typography className={classes.materialIconText}>
              ChevronLeft
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ChevronRight />
            <Typography className={classes.materialIconText}>
              ChevronRight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ChildCare />
            <Typography className={classes.materialIconText}>
              ChildCare
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ChildFriendly />
            <Typography className={classes.materialIconText}>
              ChildFriendly
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ChromeReaderMode />
            <Typography className={classes.materialIconText}>
              ChromeReaderMode
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Class />
            <Typography className={classes.materialIconText}>
              Class
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Clear />
            <Typography className={classes.materialIconText}>
              Clear
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ClearAll />
            <Typography className={classes.materialIconText}>
              ClearAll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Close />
            <Typography className={classes.materialIconText}>
              Close
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ClosedCaption />
            <Typography className={classes.materialIconText}>
              ClosedCaption
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Cloud />
            <Typography className={classes.materialIconText}>
              Cloud
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CloudCircle />
            <Typography className={classes.materialIconText}>
              CloudCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CloudDone />
            <Typography className={classes.materialIconText}>
              CloudDone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CloudDownload />
            <Typography className={classes.materialIconText}>
              CloudDownload
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CloudQueue />
            <Typography className={classes.materialIconText}>
              CloudQueue
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CloudUpload />
            <Typography className={classes.materialIconText}>
              CloudUpload
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Code />
            <Typography className={classes.materialIconText}>
              Code
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Collections />
            <Typography className={classes.materialIconText}>
              Collections
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CollectionsBookmark />
            <Typography className={classes.materialIconText}>
              CollectionsBookmark
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Colorize />
            <Typography className={classes.materialIconText}>
              Colorize
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ColorLens />
            <Typography className={classes.materialIconText}>
              ColorLens
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Comment />
            <Typography className={classes.materialIconText}>
              Comment
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Commute />
            <Typography className={classes.materialIconText}>
              Commute
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Compare />
            <Typography className={classes.materialIconText}>
              Compare
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CompareArrows />
            <Typography className={classes.materialIconText}>
              CompareArrows
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CompassCalibration />
            <Typography className={classes.materialIconText}>
              CompassCalibration
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Computer />
            <Typography className={classes.materialIconText}>
              Computer
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ConfirmationNumber />
            <Typography className={classes.materialIconText}>
              ConfirmationNumber
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ContactMail />
            <Typography className={classes.materialIconText}>
              ContactMail
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ContactPhone />
            <Typography className={classes.materialIconText}>
              ContactPhone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Contacts />
            <Typography className={classes.materialIconText}>
              Contacts
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ContactSupport />
            <Typography className={classes.materialIconText}>
              ContactSupport
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ControlCamera />
            <Typography className={classes.materialIconText}>
              ControlCamera
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ControlPoint />
            <Typography className={classes.materialIconText}>
              ControlPoint
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ControlPointDuplicate />
            <Typography className={classes.materialIconText}>
              ControlPointDuplicate
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Copyright />
            <Typography className={classes.materialIconText}>
              Copyright
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Create />
            <Typography className={classes.materialIconText}>
              Create
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CreditCard />
            <Typography className={classes.materialIconText}>
              CreditCard
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Crop />
            <Typography className={classes.materialIconText}>
              Crop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Crop169 />
            <Typography className={classes.materialIconText}>
              Crop169
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Crop32 />
            <Typography className={classes.materialIconText}>
              Crop32
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Crop54 />
            <Typography className={classes.materialIconText}>
              Crop54
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Crop75 />
            <Typography className={classes.materialIconText}>
              Crop75
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CropDin />
            <Typography className={classes.materialIconText}>
              CropDin
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CropFree />
            <Typography className={classes.materialIconText}>
              CropFree
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CropLandscape />
            <Typography className={classes.materialIconText}>
              CropLandscape
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CropOriginal />
            <Typography className={classes.materialIconText}>
              CropOriginal
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CropPortrait />
            <Typography className={classes.materialIconText}>
              CropPortrait
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CropRotate />
            <Typography className={classes.materialIconText}>
              CropRotate
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.CropSquare />
            <Typography className={classes.materialIconText}>
              CropSquare
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Dashboard />
            <Typography className={classes.materialIconText}>
              Dashboard
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DataUsage />
            <Typography className={classes.materialIconText}>
              DataUsage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DateRange />
            <Typography className={classes.materialIconText}>
              DateRange
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Dehaze />
            <Typography className={classes.materialIconText}>
              Dehaze
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Delete />
            <Typography className={classes.materialIconText}>
              Delete
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DeleteForever />
            <Typography className={classes.materialIconText}>
              DeleteForever
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DeleteOutline />
            <Typography className={classes.materialIconText}>
              DeleteOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DeleteSweep />
            <Typography className={classes.materialIconText}>
              DeleteSweep
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DepartureBoard />
            <Typography className={classes.materialIconText}>
              DepartureBoard
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Description />
            <Typography className={classes.materialIconText}>
              Description
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DesktopAccessDisabled />
            <Typography className={classes.materialIconText}>
              DesktopAccessDisabled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DesktopMac />
            <Typography className={classes.materialIconText}>
              DesktopMac
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DesktopWindows />
            <Typography className={classes.materialIconText}>
              DesktopWindows
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Details />
            <Typography className={classes.materialIconText}>
              Details
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DeveloperBoard />
            <Typography className={classes.materialIconText}>
              DeveloperBoard
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DeveloperMode />
            <Typography className={classes.materialIconText}>
              DeveloperMode
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DeviceHub />
            <Typography className={classes.materialIconText}>
              DeviceHub
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Devices />
            <Typography className={classes.materialIconText}>
              Devices
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DevicesOther />
            <Typography className={classes.materialIconText}>
              DevicesOther
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DeviceUnknown />
            <Typography className={classes.materialIconText}>
              DeviceUnknown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DialerSip />
            <Typography className={classes.materialIconText}>
              DialerSip
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Dialpad />
            <Typography className={classes.materialIconText}>
              Dialpad
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Directions />
            <Typography className={classes.materialIconText}>
              Directions
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsBike />
            <Typography className={classes.materialIconText}>
              DirectionsBike
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsBoat />
            <Typography className={classes.materialIconText}>
              DirectionsBoat
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsBus />
            <Typography className={classes.materialIconText}>
              DirectionsBus
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsCar />
            <Typography className={classes.materialIconText}>
              DirectionsCar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsRailway />
            <Typography className={classes.materialIconText}>
              DirectionsRailway
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsRun />
            <Typography className={classes.materialIconText}>
              DirectionsRun
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsSubway />
            <Typography className={classes.materialIconText}>
              DirectionsSubway
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsTransit />
            <Typography className={classes.materialIconText}>
              DirectionsTransit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DirectionsWalk />
            <Typography className={classes.materialIconText}>
              DirectionsWalk
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DiscFull />
            <Typography className={classes.materialIconText}>
              DiscFull
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Dns />
            <Typography className={classes.materialIconText}>
              Dns
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Dock />
            <Typography className={classes.materialIconText}>
              Dock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Domain />
            <Typography className={classes.materialIconText}>
              Domain
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DomainDisabled />
            <Typography className={classes.materialIconText}>
              DomainDisabled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Done />
            <Typography className={classes.materialIconText}>
              Done
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DoneAll />
            <Typography className={classes.materialIconText}>
              DoneAll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DoneOutline />
            <Typography className={classes.materialIconText}>
              DoneOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DonutLarge />
            <Typography className={classes.materialIconText}>
              DonutLarge
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DonutSmall />
            <Typography className={classes.materialIconText}>
              DonutSmall
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Drafts />
            <Typography className={classes.materialIconText}>
              Drafts
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DragHandle />
            <Typography className={classes.materialIconText}>
              DragHandle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DragIndicator />
            <Typography className={classes.materialIconText}>
              DragIndicator
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.DriveEta />
            <Typography className={classes.materialIconText}>
              DriveEta
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Duo />
            <Typography className={classes.materialIconText}>
              Duo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Dvr />
            <Typography className={classes.materialIconText}>
              Dvr
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Edit />
            <Typography className={classes.materialIconText}>
              Edit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EditAttributes />
            <Typography className={classes.materialIconText}>
              EditAttributes
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EditLocation />
            <Typography className={classes.materialIconText}>
              EditLocation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Eject />
            <Typography className={classes.materialIconText}>
              Eject
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Email />
            <Typography className={classes.materialIconText}>
              Email
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EnhancedEncryption />
            <Typography className={classes.materialIconText}>
              EnhancedEncryption
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Equalizer />
            <Typography className={classes.materialIconText}>
              Equalizer
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Error />
            <Typography className={classes.materialIconText}>
              Error
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ErrorOutline />
            <Typography className={classes.materialIconText}>
              ErrorOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EuroSymbol />
            <Typography className={classes.materialIconText}>
              EuroSymbol
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Event />
            <Typography className={classes.materialIconText}>
              Event
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EventAvailable />
            <Typography className={classes.materialIconText}>
              EventAvailable
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EventBusy />
            <Typography className={classes.materialIconText}>
              EventBusy
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EventNote />
            <Typography className={classes.materialIconText}>
              EventNote
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EventSeat />
            <Typography className={classes.materialIconText}>
              EventSeat
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.EvStation />
            <Typography className={classes.materialIconText}>
              EvStation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ExitToApp />
            <Typography className={classes.materialIconText}>
              ExitToApp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ExpandLess />
            <Typography className={classes.materialIconText}>
              ExpandLess
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ExpandMore />
            <Typography className={classes.materialIconText}>
              ExpandMore
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Explicit />
            <Typography className={classes.materialIconText}>
              Explicit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Explore />
            <Typography className={classes.materialIconText}>
              Explore
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Exposure />
            <Typography className={classes.materialIconText}>
              Exposure
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ExposureNeg1 />
            <Typography className={classes.materialIconText}>
              ExposureNeg1
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ExposureNeg2 />
            <Typography className={classes.materialIconText}>
              ExposureNeg2
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ExposurePlus1 />
            <Typography className={classes.materialIconText}>
              ExposurePlus1
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ExposurePlus2 />
            <Typography className={classes.materialIconText}>
              ExposurePlus2
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ExposureZero />
            <Typography className={classes.materialIconText}>
              ExposureZero
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Extension />
            <Typography className={classes.materialIconText}>
              Extension
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Face />
            <Typography className={classes.materialIconText}>
              Face
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Fastfood />
            <Typography className={classes.materialIconText}>
              Fastfood
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FastForward />
            <Typography className={classes.materialIconText}>
              FastForward
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FastRewind />
            <Typography className={classes.materialIconText}>
              FastRewind
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Favorite />
            <Typography className={classes.materialIconText}>
              Favorite
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FavoriteBorder />
            <Typography className={classes.materialIconText}>
              FavoriteBorder
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FeaturedPlayList />
            <Typography className={classes.materialIconText}>
              FeaturedPlayList
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FeaturedVideo />
            <Typography className={classes.materialIconText}>
              FeaturedVideo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Feedback />
            <Typography className={classes.materialIconText}>
              Feedback
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FiberDvr />
            <Typography className={classes.materialIconText}>
              FiberDvr
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FiberManualRecord />
            <Typography className={classes.materialIconText}>
              FiberManualRecord
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FiberPin />
            <Typography className={classes.materialIconText}>
              FiberPin
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FiberSmartRecord />
            <Typography className={classes.materialIconText}>
              FiberSmartRecord
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FileCopy />
            <Typography className={classes.materialIconText}>
              FileCopy
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter />
            <Typography className={classes.materialIconText}>
              Filter
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter1 />
            <Typography className={classes.materialIconText}>
              Filter1
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter2 />
            <Typography className={classes.materialIconText}>
              Filter2
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter3 />
            <Typography className={classes.materialIconText}>
              Filter3
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter4 />
            <Typography className={classes.materialIconText}>
              Filter4
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter5 />
            <Typography className={classes.materialIconText}>
              Filter5
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter6 />
            <Typography className={classes.materialIconText}>
              Filter6
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter7 />
            <Typography className={classes.materialIconText}>
              Filter7
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter8 />
            <Typography className={classes.materialIconText}>
              Filter8
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter9 />
            <Typography className={classes.materialIconText}>
              Filter9
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Filter9Plus />
            <Typography className={classes.materialIconText}>
              Filter9Plus
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterBAndW />
            <Typography className={classes.materialIconText}>
              FilterBAndW
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterCenterFocus />
            <Typography className={classes.materialIconText}>
              FilterCenterFocus
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterDrama />
            <Typography className={classes.materialIconText}>
              FilterDrama
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterFrames />
            <Typography className={classes.materialIconText}>
              FilterFrames
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterHdr />
            <Typography className={classes.materialIconText}>
              FilterHdr
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterList />
            <Typography className={classes.materialIconText}>
              FilterList
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterNone />
            <Typography className={classes.materialIconText}>
              FilterNone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterTiltShift />
            <Typography className={classes.materialIconText}>
              FilterTiltShift
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FilterVintage />
            <Typography className={classes.materialIconText}>
              FilterVintage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FindInPage />
            <Typography className={classes.materialIconText}>
              FindInPage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FindReplace />
            <Typography className={classes.materialIconText}>
              FindReplace
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Fingerprint />
            <Typography className={classes.materialIconText}>
              Fingerprint
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FirstPage />
            <Typography className={classes.materialIconText}>
              FirstPage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FitnessCenter />
            <Typography className={classes.materialIconText}>
              FitnessCenter
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Flag />
            <Typography className={classes.materialIconText}>
              Flag
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Flare />
            <Typography className={classes.materialIconText}>
              Flare
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FlashAuto />
            <Typography className={classes.materialIconText}>
              FlashAuto
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Flight />
            <Typography className={classes.materialIconText}>
              Flight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FlightLand />
            <Typography className={classes.materialIconText}>
              FlightLand
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FlightTakeoff />
            <Typography className={classes.materialIconText}>
              FlightTakeoff
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Flip />
            <Typography className={classes.materialIconText}>
              Flip
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FlipToBack />
            <Typography className={classes.materialIconText}>
              FlipToBack
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FlipToFront />
            <Typography className={classes.materialIconText}>
              FlipToFront
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Folder />
            <Typography className={classes.materialIconText}>
              Folder
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FolderOpen />
            <Typography className={classes.materialIconText}>
              FolderOpen
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FolderShared />
            <Typography className={classes.materialIconText}>
              FolderShared
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FolderSpecial />
            <Typography className={classes.materialIconText}>
              FolderSpecial
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FontDownload />
            <Typography className={classes.materialIconText}>
              FontDownload
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatAlignCenter />
            <Typography className={classes.materialIconText}>
              FormatAlignCenter
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatAlignJustify />
            <Typography className={classes.materialIconText}>
              FormatAlignJustify
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatAlignLeft />
            <Typography className={classes.materialIconText}>
              FormatAlignLeft
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatAlignRight />
            <Typography className={classes.materialIconText}>
              FormatAlignRight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatBold />
            <Typography className={classes.materialIconText}>
              FormatBold
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatClear />
            <Typography className={classes.materialIconText}>
              FormatClear
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatColorFill />
            <Typography className={classes.materialIconText}>
              FormatColorFill
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatColorReset />
            <Typography className={classes.materialIconText}>
              FormatColorReset
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatColorText />
            <Typography className={classes.materialIconText}>
              FormatColorText
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatIndentDecrease />
            <Typography className={classes.materialIconText}>
              FormatIndentDecrease
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatIndentIncrease />
            <Typography className={classes.materialIconText}>
              FormatIndentIncrease
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatItalic />
            <Typography className={classes.materialIconText}>
              FormatItalic
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatLineSpacing />
            <Typography className={classes.materialIconText}>
              FormatLineSpacing
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatListBulleted />
            <Typography className={classes.materialIconText}>
              FormatListBulleted
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatListNumbered />
            <Typography className={classes.materialIconText}>
              FormatListNumbered
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatListNumberedRtl />
            <Typography className={classes.materialIconText}>
              FormatListNumberedRtl
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatPaint />
            <Typography className={classes.materialIconText}>
              FormatPaint
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatQuote />
            <Typography className={classes.materialIconText}>
              FormatQuote
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatShapes />
            <Typography className={classes.materialIconText}>
              FormatShapes
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatSize />
            <Typography className={classes.materialIconText}>
              FormatSize
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatStrikethrough />
            <Typography className={classes.materialIconText}>
              FormatStrikethrough
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatTextdirectionLToR />
            <Typography className={classes.materialIconText}>
              FormatTextdirectionLToR
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatTextdirectionRToL />
            <Typography className={classes.materialIconText}>
              FormatTextdirectionRToL
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FormatUnderlined />
            <Typography className={classes.materialIconText}>
              FormatUnderlined
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Forum />
            <Typography className={classes.materialIconText}>
              Forum
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Forward />
            <Typography className={classes.materialIconText}>
              Forward
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Forward10 />
            <Typography className={classes.materialIconText}>
              Forward10
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Forward30 />
            <Typography className={classes.materialIconText}>
              Forward30
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Forward5 />
            <Typography className={classes.materialIconText}>
              Forward5
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FourK />
            <Typography className={classes.materialIconText}>
              FourK
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FreeBreakfast />
            <Typography className={classes.materialIconText}>
              FreeBreakfast
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Fullscreen />
            <Typography className={classes.materialIconText}>
              Fullscreen
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.FullscreenExit />
            <Typography className={classes.materialIconText}>
              FullscreenExit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Functions />
            <Typography className={classes.materialIconText}>
              Functions
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Gamepad />
            <Typography className={classes.materialIconText}>
              Gamepad
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Games />
            <Typography className={classes.materialIconText}>
              Games
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Gavel />
            <Typography className={classes.materialIconText}>
              Gavel
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Gesture />
            <Typography className={classes.materialIconText}>
              Gesture
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.GetApp />
            <Typography className={classes.materialIconText}>
              GetApp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Gif />
            <Typography className={classes.materialIconText}>
              Gif
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.GolfCourse />
            <Typography className={classes.materialIconText}>
              GolfCourse
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.GpsFixed />
            <Typography className={classes.materialIconText}>
              GpsFixed
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.GpsNotFixed />
            <Typography className={classes.materialIconText}>
              GpsNotFixed
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Grade />
            <Typography className={classes.materialIconText}>
              Grade
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Gradient />
            <Typography className={classes.materialIconText}>
              Gradient
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Grain />
            <Typography className={classes.materialIconText}>
              Grain
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.GraphicEq />
            <Typography className={classes.materialIconText}>
              GraphicEq
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Group />
            <Typography className={classes.materialIconText}>
              Group
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.GroupWork />
            <Typography className={classes.materialIconText}>
              GroupWork
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.GTranslate />
            <Typography className={classes.materialIconText}>
              GTranslate
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Hd />
            <Typography className={classes.materialIconText}>
              Hd
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HdrStrong />
            <Typography className={classes.materialIconText}>
              HdrStrong
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HdrWeak />
            <Typography className={classes.materialIconText}>
              HdrWeak
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Headset />
            <Typography className={classes.materialIconText}>
              Headset
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HeadsetMic />
            <Typography className={classes.materialIconText}>
              HeadsetMic
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Healing />
            <Typography className={classes.materialIconText}>
              Healing
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Hearing />
            <Typography className={classes.materialIconText}>
              Hearing
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Help />
            <Typography className={classes.materialIconText}>
              Help
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HelpOutline />
            <Typography className={classes.materialIconText}>
              HelpOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Highlight />
            <Typography className={classes.materialIconText}>
              Highlight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HighQuality />
            <Typography className={classes.materialIconText}>
              HighQuality
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.History />
            <Typography className={classes.materialIconText}>
              History
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Home />
            <Typography className={classes.materialIconText}>
              Home
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HorizontalSplit />
            <Typography className={classes.materialIconText}>
              HorizontalSplit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Hotel />
            <Typography className={classes.materialIconText}>
              Hotel
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HotTub />
            <Typography className={classes.materialIconText}>
              HotTub
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HourglassEmpty />
            <Typography className={classes.materialIconText}>
              HourglassEmpty
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HourglassFull />
            <Typography className={classes.materialIconText}>
              HourglassFull
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HowToReg />
            <Typography className={classes.materialIconText}>
              HowToReg
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.HowToVote />
            <Typography className={classes.materialIconText}>
              HowToVote
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Http />
            <Typography className={classes.materialIconText}>
              Http
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Https />
            <Typography className={classes.materialIconText}>
              Https
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Image />
            <Typography className={classes.materialIconText}>
              Image
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ImageAspectRatio />
            <Typography className={classes.materialIconText}>
              ImageAspectRatio
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ImageSearch />
            <Typography className={classes.materialIconText}>
              ImageSearch
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ImportantDevices />
            <Typography className={classes.materialIconText}>
              ImportantDevices
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ImportContacts />
            <Typography className={classes.materialIconText}>
              ImportContacts
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ImportExport />
            <Typography className={classes.materialIconText}>
              ImportExport
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Inbox />
            <Typography className={classes.materialIconText}>
              Inbox
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.IndeterminateCheckBox />
            <Typography className={classes.materialIconText}>
              IndeterminateCheckBox
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Info />
            <Typography className={classes.materialIconText}>
              Info
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Input />
            <Typography className={classes.materialIconText}>
              Input
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.InsertChart />
            <Typography className={classes.materialIconText}>
              InsertChart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.InsertComment />
            <Typography className={classes.materialIconText}>
              InsertComment
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.InsertDriveFile />
            <Typography className={classes.materialIconText}>
              InsertDriveFile
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.InsertEmoticon />
            <Typography className={classes.materialIconText}>
              InsertEmoticon
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.InsertInvitation />
            <Typography className={classes.materialIconText}>
              InsertInvitation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.InsertLink />
            <Typography className={classes.materialIconText}>
              InsertLink
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.InsertPhoto />
            <Typography className={classes.materialIconText}>
              InsertPhoto
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.InvertColors />
            <Typography className={classes.materialIconText}>
              InvertColors
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Iso />
            <Typography className={classes.materialIconText}>
              Iso
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Keyboard />
            <Typography className={classes.materialIconText}>
              Keyboard
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardArrowDown />
            <Typography className={classes.materialIconText}>
              KeyboardArrowDown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardArrowLeft />
            <Typography className={classes.materialIconText}>
              KeyboardArrowLeft
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardArrowRight />
            <Typography className={classes.materialIconText}>
              KeyboardArrowRight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardArrowUp />
            <Typography className={classes.materialIconText}>
              KeyboardArrowUp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardBackspace />
            <Typography className={classes.materialIconText}>
              KeyboardBackspace
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardCapslock />
            <Typography className={classes.materialIconText}>
              KeyboardCapslock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardHide />
            <Typography className={classes.materialIconText}>
              KeyboardHide
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardReturn />
            <Typography className={classes.materialIconText}>
              KeyboardReturn
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardTab />
            <Typography className={classes.materialIconText}>
              KeyboardTab
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.KeyboardVoice />
            <Typography className={classes.materialIconText}>
              KeyboardVoice
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Kitchen />
            <Typography className={classes.materialIconText}>
              Kitchen
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Label />
            <Typography className={classes.materialIconText}>
              Label
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LabelImportant />
            <Typography className={classes.materialIconText}>
              LabelImportant
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Landscape />
            <Typography className={classes.materialIconText}>
              Landscape
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Language />
            <Typography className={classes.materialIconText}>
              Language
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Laptop />
            <Typography className={classes.materialIconText}>
              Laptop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LaptopChromebook />
            <Typography className={classes.materialIconText}>
              LaptopChromebook
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LaptopMac />
            <Typography className={classes.materialIconText}>
              LaptopMac
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LaptopWindows />
            <Typography className={classes.materialIconText}>
              LaptopWindows
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LastPage />
            <Typography className={classes.materialIconText}>
              LastPage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Launch />
            <Typography className={classes.materialIconText}>
              Launch
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Layers />
            <Typography className={classes.materialIconText}>
              Layers
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LayersClear />
            <Typography className={classes.materialIconText}>
              LayersClear
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LeakRemove />
            <Typography className={classes.materialIconText}>
              LeakRemove
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Lens />
            <Typography className={classes.materialIconText}>
              Lens
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LibraryBooks />
            <Typography className={classes.materialIconText}>
              LibraryBooks
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LibraryMusic />
            <Typography className={classes.materialIconText}>
              LibraryMusic
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LinearScale />
            <Typography className={classes.materialIconText}>
              LinearScale
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LineStyle />
            <Typography className={classes.materialIconText}>
              LineStyle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LineWeight />
            <Typography className={classes.materialIconText}>
              LineWeight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Link />
            <Typography className={classes.materialIconText}>
              Link
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LinkedCamera />
            <Typography className={classes.materialIconText}>
              LinkedCamera
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.List />
            <Typography className={classes.materialIconText}>
              List
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ListAlt />
            <Typography className={classes.materialIconText}>
              ListAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LiveHelp />
            <Typography className={classes.materialIconText}>
              LiveHelp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LiveTv />
            <Typography className={classes.materialIconText}>
              LiveTv
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalActivity />
            <Typography className={classes.materialIconText}>
              LocalActivity
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalAirport />
            <Typography className={classes.materialIconText}>
              LocalAirport
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalAtm />
            <Typography className={classes.materialIconText}>
              LocalAtm
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalBar />
            <Typography className={classes.materialIconText}>
              LocalBar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalCafe />
            <Typography className={classes.materialIconText}>
              LocalCafe
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalCarWash />
            <Typography className={classes.materialIconText}>
              LocalCarWash
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalConvenienceStore />
            <Typography className={classes.materialIconText}>
              LocalConvenienceStore
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalDining />
            <Typography className={classes.materialIconText}>
              LocalDining
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalDrink />
            <Typography className={classes.materialIconText}>
              LocalDrink
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalFlorist />
            <Typography className={classes.materialIconText}>
              LocalFlorist
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalGasStation />
            <Typography className={classes.materialIconText}>
              LocalGasStation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalGroceryStore />
            <Typography className={classes.materialIconText}>
              LocalGroceryStore
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalHospital />
            <Typography className={classes.materialIconText}>
              LocalHospital
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalHotel />
            <Typography className={classes.materialIconText}>
              LocalHotel
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalLaundryService />
            <Typography className={classes.materialIconText}>
              LocalLaundryService
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalLibrary />
            <Typography className={classes.materialIconText}>
              LocalLibrary
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalMall />
            <Typography className={classes.materialIconText}>
              LocalMall
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalMovies />
            <Typography className={classes.materialIconText}>
              LocalMovies
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalParking />
            <Typography className={classes.materialIconText}>
              LocalParking
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalPharmacy />
            <Typography className={classes.materialIconText}>
              LocalPharmacy
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalPhone />
            <Typography className={classes.materialIconText}>
              LocalPhone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalPizza />
            <Typography className={classes.materialIconText}>
              LocalPizza
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalPlay />
            <Typography className={classes.materialIconText}>
              LocalPlay
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalPrintshop />
            <Typography className={classes.materialIconText}>
              LocalPrintshop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalSee />
            <Typography className={classes.materialIconText}>
              LocalSee
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalShipping />
            <Typography className={classes.materialIconText}>
              LocalShipping
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocalTaxi />
            <Typography className={classes.materialIconText}>
              LocalTaxi
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocationCity />
            <Typography className={classes.materialIconText}>
              LocationCity
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocationDisabled />
            <Typography className={classes.materialIconText}>
              LocationDisabled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LocationSearching />
            <Typography className={classes.materialIconText}>
              LocationSearching
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Lock />
            <Typography className={classes.materialIconText}>
              Lock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LockOpen />
            <Typography className={classes.materialIconText}>
              LockOpen
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Looks />
            <Typography className={classes.materialIconText}>
              Looks
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Looks3 />
            <Typography className={classes.materialIconText}>
              Looks3
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Looks4 />
            <Typography className={classes.materialIconText}>
              Looks4
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Looks5 />
            <Typography className={classes.materialIconText}>
              Looks5
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Looks6 />
            <Typography className={classes.materialIconText}>
              Looks6
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LooksTwo />
            <Typography className={classes.materialIconText}>
              LooksTwo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Loop />
            <Typography className={classes.materialIconText}>
              Loop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Loupe />
            <Typography className={classes.materialIconText}>
              Loupe
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.LowPriority />
            <Typography className={classes.materialIconText}>
              LowPriority
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Loyalty />
            <Typography className={classes.materialIconText}>
              Loyalty
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Mail />
            <Typography className={classes.materialIconText}>
              Mail
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MailOutline />
            <Typography className={classes.materialIconText}>
              MailOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Map />
            <Typography className={classes.materialIconText}>
              Map
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Markunread />
            <Typography className={classes.materialIconText}>
              Markunread
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MarkunreadMailbox />
            <Typography className={classes.materialIconText}>
              MarkunreadMailbox
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Maximize />
            <Typography className={classes.materialIconText}>
              Maximize
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MeetingRoom />
            <Typography className={classes.materialIconText}>
              MeetingRoom
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Memory />
            <Typography className={classes.materialIconText}>
              Memory
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Menu />
            <Typography className={classes.materialIconText}>
              Menu
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MergeType />
            <Typography className={classes.materialIconText}>
              MergeType
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Message />
            <Typography className={classes.materialIconText}>
              Message
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Mic />
            <Typography className={classes.materialIconText}>
              Mic
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MicNone />
            <Typography className={classes.materialIconText}>
              MicNone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Minimize />
            <Typography className={classes.materialIconText}>
              Minimize
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MissedVideoCall />
            <Typography className={classes.materialIconText}>
              MissedVideoCall
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Mms />
            <Typography className={classes.materialIconText}>
              Mms
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MobileFriendly />
            <Typography className={classes.materialIconText}>
              MobileFriendly
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MobileScreenShare />
            <Typography className={classes.materialIconText}>
              MobileScreenShare
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ModeComment />
            <Typography className={classes.materialIconText}>
              ModeComment
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Money />
            <Typography className={classes.materialIconText}>
              Money
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MonochromePhotos />
            <Typography className={classes.materialIconText}>
              MonochromePhotos
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Mood />
            <Typography className={classes.materialIconText}>
              Mood
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MoodBad />
            <Typography className={classes.materialIconText}>
              MoodBad
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.More />
            <Typography className={classes.materialIconText}>
              More
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MoreHoriz />
            <Typography className={classes.materialIconText}>
              MoreHoriz
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MoreVert />
            <Typography className={classes.materialIconText}>
              MoreVert
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Motorcycle />
            <Typography className={classes.materialIconText}>
              Motorcycle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Mouse />
            <Typography className={classes.materialIconText}>
              Mouse
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MoveToInbox />
            <Typography className={classes.materialIconText}>
              MoveToInbox
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Movie />
            <Typography className={classes.materialIconText}>
              Movie
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MovieCreation />
            <Typography className={classes.materialIconText}>
              MovieCreation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MovieFilter />
            <Typography className={classes.materialIconText}>
              MovieFilter
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MultilineChart />
            <Typography className={classes.materialIconText}>
              MultilineChart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MusicNote />
            <Typography className={classes.materialIconText}>
              MusicNote
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MusicVideo />
            <Typography className={classes.materialIconText}>
              MusicVideo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.MyLocation />
            <Typography className={classes.materialIconText}>
              MyLocation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Nature />
            <Typography className={classes.materialIconText}>
              Nature
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NaturePeople />
            <Typography className={classes.materialIconText}>
              NaturePeople
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NavigateBefore />
            <Typography className={classes.materialIconText}>
              NavigateBefore
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NavigateNext />
            <Typography className={classes.materialIconText}>
              NavigateNext
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Navigation />
            <Typography className={classes.materialIconText}>
              Navigation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NearMe />
            <Typography className={classes.materialIconText}>
              NearMe
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NetworkCell />
            <Typography className={classes.materialIconText}>
              NetworkCell
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NetworkCheck />
            <Typography className={classes.materialIconText}>
              NetworkCheck
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NetworkLocked />
            <Typography className={classes.materialIconText}>
              NetworkLocked
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NetworkWifi />
            <Typography className={classes.materialIconText}>
              NetworkWifi
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NextWeek />
            <Typography className={classes.materialIconText}>
              NextWeek
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Nfc />
            <Typography className={classes.materialIconText}>
              Nfc
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NoEncryption />
            <Typography className={classes.materialIconText}>
              NoEncryption
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NoMeetingRoom />
            <Typography className={classes.materialIconText}>
              NoMeetingRoom
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NoSim />
            <Typography className={classes.materialIconText}>
              NoSim
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Note />
            <Typography className={classes.materialIconText}>
              Note
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Notes />
            <Typography className={classes.materialIconText}>
              Notes
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NotificationImportant />
            <Typography className={classes.materialIconText}>
              NotificationImportant
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Notifications />
            <Typography className={classes.materialIconText}>
              Notifications
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NotificationsActive />
            <Typography className={classes.materialIconText}>
              NotificationsActive
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NotificationsNone />
            <Typography className={classes.materialIconText}>
              NotificationsNone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NotificationsPaused />
            <Typography className={classes.materialIconText}>
              NotificationsPaused
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NotInterested />
            <Typography className={classes.materialIconText}>
              NotInterested
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.NotListedLocation />
            <Typography className={classes.materialIconText}>
              NotListedLocation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Opacity />
            <Typography className={classes.materialIconText}>
              Opacity
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.OpenInBrowser />
            <Typography className={classes.materialIconText}>
              OpenInBrowser
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.OpenWith />
            <Typography className={classes.materialIconText}>
              OpenWith
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Pages />
            <Typography className={classes.materialIconText}>
              Pages
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Pageview />
            <Typography className={classes.materialIconText}>
              Pageview
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Palette />
            <Typography className={classes.materialIconText}>
              Palette
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Panorama />
            <Typography className={classes.materialIconText}>
              Panorama
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PanoramaFishEye />
            <Typography className={classes.materialIconText}>
              PanoramaFishEye
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PanoramaHorizontal />
            <Typography className={classes.materialIconText}>
              PanoramaHorizontal
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PanoramaVertical />
            <Typography className={classes.materialIconText}>
              PanoramaVertical
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PanoramaWideAngle />
            <Typography className={classes.materialIconText}>
              PanoramaWideAngle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PanTool />
            <Typography className={classes.materialIconText}>
              PanTool
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PartyMode />
            <Typography className={classes.materialIconText}>
              PartyMode
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Pause />
            <Typography className={classes.materialIconText}>
              Pause
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PauseCircleFilled />
            <Typography className={classes.materialIconText}>
              PauseCircleFilled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PauseCircleOutline />
            <Typography className={classes.materialIconText}>
              PauseCircleOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PausePresentation />
            <Typography className={classes.materialIconText}>
              PausePresentation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Payment />
            <Typography className={classes.materialIconText}>
              Payment
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.People />
            <Typography className={classes.materialIconText}>
              People
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PeopleOutline />
            <Typography className={classes.materialIconText}>
              PeopleOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PermCameraMic />
            <Typography className={classes.materialIconText}>
              PermCameraMic
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PermContactCalendar />
            <Typography className={classes.materialIconText}>
              PermContactCalendar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PermDataSetting />
            <Typography className={classes.materialIconText}>
              PermDataSetting
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PermDeviceInformation />
            <Typography className={classes.materialIconText}>
              PermDeviceInformation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PermIdentity />
            <Typography className={classes.materialIconText}>
              PermIdentity
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PermMedia />
            <Typography className={classes.materialIconText}>
              PermMedia
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PermPhoneMsg />
            <Typography className={classes.materialIconText}>
              PermPhoneMsg
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PermScanWifi />
            <Typography className={classes.materialIconText}>
              PermScanWifi
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Person />
            <Typography className={classes.materialIconText}>
              Person
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PersonalVideo />
            <Typography className={classes.materialIconText}>
              PersonalVideo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PersonOutline />
            <Typography className={classes.materialIconText}>
              PersonOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PersonPin />
            <Typography className={classes.materialIconText}>
              PersonPin
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PersonPinCircle />
            <Typography className={classes.materialIconText}>
              PersonPinCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Pets />
            <Typography className={classes.materialIconText}>
              Pets
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Phone />
            <Typography className={classes.materialIconText}>
              Phone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhoneAndroid />
            <Typography className={classes.materialIconText}>
              PhoneAndroid
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhoneBluetoothSpeaker />
            <Typography className={classes.materialIconText}>
              PhoneBluetoothSpeaker
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhoneCallback />
            <Typography className={classes.materialIconText}>
              PhoneCallback
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhoneForwarded />
            <Typography className={classes.materialIconText}>
              PhoneForwarded
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhoneInTalk />
            <Typography className={classes.materialIconText}>
              PhoneInTalk
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhoneIphone />
            <Typography className={classes.materialIconText}>
              PhoneIphone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Phonelink />
            <Typography className={classes.materialIconText}>
              Phonelink
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhonelinkErase />
            <Typography className={classes.materialIconText}>
              PhonelinkErase
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhonelinkLock />
            <Typography className={classes.materialIconText}>
              PhonelinkLock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhonelinkRing />
            <Typography className={classes.materialIconText}>
              PhonelinkRing
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhonelinkSetup />
            <Typography className={classes.materialIconText}>
              PhonelinkSetup
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhoneLocked />
            <Typography className={classes.materialIconText}>
              PhoneLocked
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhoneMissed />
            <Typography className={classes.materialIconText}>
              PhoneMissed
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhonePaused />
            <Typography className={classes.materialIconText}>
              PhonePaused
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Photo />
            <Typography className={classes.materialIconText}>
              Photo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhotoAlbum />
            <Typography className={classes.materialIconText}>
              PhotoAlbum
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhotoCamera />
            <Typography className={classes.materialIconText}>
              PhotoCamera
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhotoFilter />
            <Typography className={classes.materialIconText}>
              PhotoFilter
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhotoLibrary />
            <Typography className={classes.materialIconText}>
              PhotoLibrary
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhotoSizeSelectActual />
            <Typography className={classes.materialIconText}>
              PhotoSizeSelectActual
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhotoSizeSelectLarge />
            <Typography className={classes.materialIconText}>
              PhotoSizeSelectLarge
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PhotoSizeSelectSmall />
            <Typography className={classes.materialIconText}>
              PhotoSizeSelectSmall
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PictureAsPdf />
            <Typography className={classes.materialIconText}>
              PictureAsPdf
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PictureInPicture />
            <Typography className={classes.materialIconText}>
              PictureInPicture
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PictureInPictureAlt />
            <Typography className={classes.materialIconText}>
              PictureInPictureAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PieChart />
            <Typography className={classes.materialIconText}>
              PieChart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PinDrop />
            <Typography className={classes.materialIconText}>
              PinDrop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Place />
            <Typography className={classes.materialIconText}>
              Place
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PlayArrow />
            <Typography className={classes.materialIconText}>
              PlayArrow
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PlayCircleFilled />
            <Typography className={classes.materialIconText}>
              PlayCircleFilled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PlayCircleFilledWhite />
            <Typography className={classes.materialIconText}>
              PlayCircleFilledWhite
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PlayCircleOutline />
            <Typography className={classes.materialIconText}>
              PlayCircleOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PlayForWork />
            <Typography className={classes.materialIconText}>
              PlayForWork
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PlaylistPlay />
            <Typography className={classes.materialIconText}>
              PlaylistPlay
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Poll />
            <Typography className={classes.materialIconText}>
              Poll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Polymer />
            <Typography className={classes.materialIconText}>
              Polymer
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Pool />
            <Typography className={classes.materialIconText}>
              Pool
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Portrait />
            <Typography className={classes.materialIconText}>
              Portrait
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Power />
            <Typography className={classes.materialIconText}>
              Power
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PowerInput />
            <Typography className={classes.materialIconText}>
              PowerInput
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PregnantWoman />
            <Typography className={classes.materialIconText}>
              PregnantWoman
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PresentToAll />
            <Typography className={classes.materialIconText}>
              PresentToAll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Print />
            <Typography className={classes.materialIconText}>
              Print
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PrintDisabled />
            <Typography className={classes.materialIconText}>
              PrintDisabled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.PriorityHigh />
            <Typography className={classes.materialIconText}>
              PriorityHigh
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Public />
            <Typography className={classes.materialIconText}>
              Public
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Publish />
            <Typography className={classes.materialIconText}>
              Publish
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.QueryBuilder />
            <Typography className={classes.materialIconText}>
              QueryBuilder
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.QuestionAnswer />
            <Typography className={classes.materialIconText}>
              QuestionAnswer
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Queue />
            <Typography className={classes.materialIconText}>
              Queue
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.QueueMusic />
            <Typography className={classes.materialIconText}>
              QueueMusic
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.QueuePlayNext />
            <Typography className={classes.materialIconText}>
              QueuePlayNext
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Radio />
            <Typography className={classes.materialIconText}>
              Radio
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RadioButtonChecked />
            <Typography className={classes.materialIconText}>
              RadioButtonChecked
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RadioButtonUnchecked />
            <Typography className={classes.materialIconText}>
              RadioButtonUnchecked
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RateReview />
            <Typography className={classes.materialIconText}>
              RateReview
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Receipt />
            <Typography className={classes.materialIconText}>
              Receipt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RecentActors />
            <Typography className={classes.materialIconText}>
              RecentActors
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RecordVoiceOver />
            <Typography className={classes.materialIconText}>
              RecordVoiceOver
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Redeem />
            <Typography className={classes.materialIconText}>
              Redeem
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Redo />
            <Typography className={classes.materialIconText}>
              Redo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Refresh />
            <Typography className={classes.materialIconText}>
              Refresh
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Remove />
            <Typography className={classes.materialIconText}>
              Remove
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RemoveCircle />
            <Typography className={classes.materialIconText}>
              RemoveCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RemoveCircleOutline />
            <Typography className={classes.materialIconText}>
              RemoveCircleOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RemoveFromQueue />
            <Typography className={classes.materialIconText}>
              RemoveFromQueue
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RemoveRedEye />
            <Typography className={classes.materialIconText}>
              RemoveRedEye
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RemoveShoppingCart />
            <Typography className={classes.materialIconText}>
              RemoveShoppingCart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Reorder />
            <Typography className={classes.materialIconText}>
              Reorder
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Repeat />
            <Typography className={classes.materialIconText}>
              Repeat
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Replay />
            <Typography className={classes.materialIconText}>
              Replay
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Replay10 />
            <Typography className={classes.materialIconText}>
              Replay10
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Replay30 />
            <Typography className={classes.materialIconText}>
              Replay30
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Replay5 />
            <Typography className={classes.materialIconText}>
              Replay5
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Reply />
            <Typography className={classes.materialIconText}>
              Reply
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ReplyAll />
            <Typography className={classes.materialIconText}>
              ReplyAll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Report />
            <Typography className={classes.materialIconText}>
              Report
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ReportProblem />
            <Typography className={classes.materialIconText}>
              ReportProblem
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Restaurant />
            <Typography className={classes.materialIconText}>
              Restaurant
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RestaurantMenu />
            <Typography className={classes.materialIconText}>
              RestaurantMenu
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Restore />
            <Typography className={classes.materialIconText}>
              Restore
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RestoreFromTrash />
            <Typography className={classes.materialIconText}>
              RestoreFromTrash
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RestorePage />
            <Typography className={classes.materialIconText}>
              RestorePage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RingVolume />
            <Typography className={classes.materialIconText}>
              RingVolume
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Room />
            <Typography className={classes.materialIconText}>
              Room
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RoomService />
            <Typography className={classes.materialIconText}>
              RoomService
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Rotate90DegreesCcw />
            <Typography className={classes.materialIconText}>
              Rotate90DegreesCcw
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RotateLeft />
            <Typography className={classes.materialIconText}>
              RotateLeft
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RotateRight />
            <Typography className={classes.materialIconText}>
              RotateRight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Router />
            <Typography className={classes.materialIconText}>
              Router
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Rowing />
            <Typography className={classes.materialIconText}>
              Rowing
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RssFeed />
            <Typography className={classes.materialIconText}>
              RssFeed
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.RvHookup />
            <Typography className={classes.materialIconText}>
              RvHookup
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Satellite />
            <Typography className={classes.materialIconText}>
              Satellite
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Save />
            <Typography className={classes.materialIconText}>
              Save
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SaveAlt />
            <Typography className={classes.materialIconText}>
              SaveAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Scanner />
            <Typography className={classes.materialIconText}>
              Scanner
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ScatterPlot />
            <Typography className={classes.materialIconText}>
              ScatterPlot
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Schedule />
            <Typography className={classes.materialIconText}>
              Schedule
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.School />
            <Typography className={classes.materialIconText}>
              School
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Score />
            <Typography className={classes.materialIconText}>
              Score
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ScreenLockLandscape />
            <Typography className={classes.materialIconText}>
              ScreenLockLandscape
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ScreenLockPortrait />
            <Typography className={classes.materialIconText}>
              ScreenLockPortrait
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ScreenLockRotation />
            <Typography className={classes.materialIconText}>
              ScreenLockRotation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ScreenRotation />
            <Typography className={classes.materialIconText}>
              ScreenRotation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ScreenShare />
            <Typography className={classes.materialIconText}>
              ScreenShare
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SdCard />
            <Typography className={classes.materialIconText}>
              SdCard
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SdStorage />
            <Typography className={classes.materialIconText}>
              SdStorage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Search />
            <Typography className={classes.materialIconText}>
              Search
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Security />
            <Typography className={classes.materialIconText}>
              Security
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SelectAll />
            <Typography className={classes.materialIconText}>
              SelectAll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Send />
            <Typography className={classes.materialIconText}>
              Send
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SentimentDissatisfied />
            <Typography className={classes.materialIconText}>
              SentimentDissatisfied
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SentimentSatisfied />
            <Typography className={classes.materialIconText}>
              SentimentSatisfied
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SentimentSatisfiedAlt />
            <Typography className={classes.materialIconText}>
              SentimentSatisfiedAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SentimentVeryDissatisfied />
            <Typography className={classes.materialIconText}>
              SentimentVeryDissatisfied
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SentimentVerySatisfied />
            <Typography className={classes.materialIconText}>
              SentimentVerySatisfied
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Settings />
            <Typography className={classes.materialIconText}>
              Settings
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsApplications />
            <Typography className={classes.materialIconText}>
              SettingsApplications
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsBackupRestore />
            <Typography className={classes.materialIconText}>
              SettingsBackupRestore
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsBluetooth />
            <Typography className={classes.materialIconText}>
              SettingsBluetooth
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsBrightness />
            <Typography className={classes.materialIconText}>
              SettingsBrightness
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsCell />
            <Typography className={classes.materialIconText}>
              SettingsCell
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsEthernet />
            <Typography className={classes.materialIconText}>
              SettingsEthernet
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsInputAntenna />
            <Typography className={classes.materialIconText}>
              SettingsInputAntenna
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsInputComponent />
            <Typography className={classes.materialIconText}>
              SettingsInputComponent
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsInputComposite />
            <Typography className={classes.materialIconText}>
              SettingsInputComposite
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsInputHdmi />
            <Typography className={classes.materialIconText}>
              SettingsInputHdmi
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsInputSvideo />
            <Typography className={classes.materialIconText}>
              SettingsInputSvideo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsOverscan />
            <Typography className={classes.materialIconText}>
              SettingsOverscan
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsPhone />
            <Typography className={classes.materialIconText}>
              SettingsPhone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsPower />
            <Typography className={classes.materialIconText}>
              SettingsPower
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsRemote />
            <Typography className={classes.materialIconText}>
              SettingsRemote
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsSystemDaydream />
            <Typography className={classes.materialIconText}>
              SettingsSystemDaydream
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SettingsVoice />
            <Typography className={classes.materialIconText}>
              SettingsVoice
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Share />
            <Typography className={classes.materialIconText}>
              Share
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Shop />
            <Typography className={classes.materialIconText}>
              Shop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ShoppingBasket />
            <Typography className={classes.materialIconText}>
              ShoppingBasket
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ShoppingCart />
            <Typography className={classes.materialIconText}>
              ShoppingCart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ShopTwo />
            <Typography className={classes.materialIconText}>
              ShopTwo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ShortText />
            <Typography className={classes.materialIconText}>
              ShortText
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ShowChart />
            <Typography className={classes.materialIconText}>
              ShowChart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Shuffle />
            <Typography className={classes.materialIconText}>
              Shuffle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ShutterSpeed />
            <Typography className={classes.materialIconText}>
              ShutterSpeed
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellular0Bar />
            <Typography className={classes.materialIconText}>
              SignalCellular0Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellular1Bar />
            <Typography className={classes.materialIconText}>
              SignalCellular1Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellular2Bar />
            <Typography className={classes.materialIconText}>
              SignalCellular2Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellular3Bar />
            <Typography className={classes.materialIconText}>
              SignalCellular3Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellular4Bar />
            <Typography className={classes.materialIconText}>
              SignalCellular4Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellularAlt />
            <Typography className={classes.materialIconText}>
              SignalCellularAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellularConnectedNoInternet0Bar />
            <Typography className={classes.materialIconText}>
              SignalCellularConnectedNoInternet0Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellularConnectedNoInternet1Bar />
            <Typography className={classes.materialIconText}>
              SignalCellularConnectedNoInternet1Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellularConnectedNoInternet2Bar />
            <Typography className={classes.materialIconText}>
              SignalCellularConnectedNoInternet2Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellularConnectedNoInternet3Bar />
            <Typography className={classes.materialIconText}>
              SignalCellularConnectedNoInternet3Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellularConnectedNoInternet4Bar />
            <Typography className={classes.materialIconText}>
              SignalCellularConnectedNoInternet4Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellularNoSim />
            <Typography className={classes.materialIconText}>
              SignalCellularNoSim
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalCellularNull />
            <Typography className={classes.materialIconText}>
              SignalCellularNull
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi0Bar />
            <Typography className={classes.materialIconText}>
              SignalWifi0Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi1Bar />
            <Typography className={classes.materialIconText}>
              SignalWifi1Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi1BarLock />
            <Typography className={classes.materialIconText}>
              SignalWifi1BarLock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi2Bar />
            <Typography className={classes.materialIconText}>
              SignalWifi2Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi2BarLock />
            <Typography className={classes.materialIconText}>
              SignalWifi2BarLock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi3Bar />
            <Typography className={classes.materialIconText}>
              SignalWifi3Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi3BarLock />
            <Typography className={classes.materialIconText}>
              SignalWifi3BarLock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi4Bar />
            <Typography className={classes.materialIconText}>
              SignalWifi4Bar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SignalWifi4BarLock />
            <Typography className={classes.materialIconText}>
              SignalWifi4BarLock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SimCard />
            <Typography className={classes.materialIconText}>
              SimCard
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SkipNext />
            <Typography className={classes.materialIconText}>
              SkipNext
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SkipPrevious />
            <Typography className={classes.materialIconText}>
              SkipPrevious
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Slideshow />
            <Typography className={classes.materialIconText}>
              Slideshow
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SlowMotionVideo />
            <Typography className={classes.materialIconText}>
              SlowMotionVideo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Smartphone />
            <Typography className={classes.materialIconText}>
              Smartphone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SmokeFree />
            <Typography className={classes.materialIconText}>
              SmokeFree
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SmokingRooms />
            <Typography className={classes.materialIconText}>
              SmokingRooms
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Sms />
            <Typography className={classes.materialIconText}>
              Sms
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SmsFailed />
            <Typography className={classes.materialIconText}>
              SmsFailed
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Snooze />
            <Typography className={classes.materialIconText}>
              Snooze
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Sort />
            <Typography className={classes.materialIconText}>
              Sort
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SortByAlpha />
            <Typography className={classes.materialIconText}>
              SortByAlpha
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Spa />
            <Typography className={classes.materialIconText}>
              Spa
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SpaceBar />
            <Typography className={classes.materialIconText}>
              SpaceBar
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Speaker />
            <Typography className={classes.materialIconText}>
              Speaker
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SpeakerGroup />
            <Typography className={classes.materialIconText}>
              SpeakerGroup
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SpeakerNotes />
            <Typography className={classes.materialIconText}>
              SpeakerNotes
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SpeakerPhone />
            <Typography className={classes.materialIconText}>
              SpeakerPhone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Spellcheck />
            <Typography className={classes.materialIconText}>
              Spellcheck
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Star />
            <Typography className={classes.materialIconText}>
              Star
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StarBorder />
            <Typography className={classes.materialIconText}>
              StarBorder
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StarHalf />
            <Typography className={classes.materialIconText}>
              StarHalf
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StarRate />
            <Typography className={classes.materialIconText}>
              StarRate
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Stars />
            <Typography className={classes.materialIconText}>
              Stars
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StayCurrentLandscape />
            <Typography className={classes.materialIconText}>
              StayCurrentLandscape
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StayCurrentPortrait />
            <Typography className={classes.materialIconText}>
              StayCurrentPortrait
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StayPrimaryLandscape />
            <Typography className={classes.materialIconText}>
              StayPrimaryLandscape
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StayPrimaryPortrait />
            <Typography className={classes.materialIconText}>
              StayPrimaryPortrait
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Stop />
            <Typography className={classes.materialIconText}>
              Stop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StopScreenShare />
            <Typography className={classes.materialIconText}>
              StopScreenShare
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Storage />
            <Typography className={classes.materialIconText}>
              Storage
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Store />
            <Typography className={classes.materialIconText}>
              Store
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StoreMallDirectory />
            <Typography className={classes.materialIconText}>
              StoreMallDirectory
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Straighten />
            <Typography className={classes.materialIconText}>
              Straighten
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Streetview />
            <Typography className={classes.materialIconText}>
              Streetview
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.StrikethroughS />
            <Typography className={classes.materialIconText}>
              StrikethroughS
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Style />
            <Typography className={classes.materialIconText}>
              Style
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SubdirectoryArrowLeft />
            <Typography className={classes.materialIconText}>
              SubdirectoryArrowLeft
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SubdirectoryArrowRight />
            <Typography className={classes.materialIconText}>
              SubdirectoryArrowRight
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Subject />
            <Typography className={classes.materialIconText}>
              Subject
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Subscriptions />
            <Typography className={classes.materialIconText}>
              Subscriptions
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Subtitles />
            <Typography className={classes.materialIconText}>
              Subtitles
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Subway />
            <Typography className={classes.materialIconText}>
              Subway
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SupervisedUserCircle />
            <Typography className={classes.materialIconText}>
              SupervisedUserCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SupervisorAccount />
            <Typography className={classes.materialIconText}>
              SupervisorAccount
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SurroundSound />
            <Typography className={classes.materialIconText}>
              SurroundSound
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SwapCalls />
            <Typography className={classes.materialIconText}>
              SwapCalls
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SwapHoriz />
            <Typography className={classes.materialIconText}>
              SwapHoriz
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SwapHorizontalCircle />
            <Typography className={classes.materialIconText}>
              SwapHorizontalCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SwapVert />
            <Typography className={classes.materialIconText}>
              SwapVert
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SwapVerticalCircle />
            <Typography className={classes.materialIconText}>
              SwapVerticalCircle
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SwitchCamera />
            <Typography className={classes.materialIconText}>
              SwitchCamera
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SwitchVideo />
            <Typography className={classes.materialIconText}>
              SwitchVideo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Sync />
            <Typography className={classes.materialIconText}>
              Sync
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SyncDisabled />
            <Typography className={classes.materialIconText}>
              SyncDisabled
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SyncProblem />
            <Typography className={classes.materialIconText}>
              SyncProblem
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.SystemUpdate />
            <Typography className={classes.materialIconText}>
              SystemUpdate
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Tab />
            <Typography className={classes.materialIconText}>
              Tab
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TableChart />
            <Typography className={classes.materialIconText}>
              TableChart
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Tablet />
            <Typography className={classes.materialIconText}>
              Tablet
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TabletAndroid />
            <Typography className={classes.materialIconText}>
              TabletAndroid
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TabletMac />
            <Typography className={classes.materialIconText}>
              TabletMac
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TabUnselected />
            <Typography className={classes.materialIconText}>
              TabUnselected
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TagFaces />
            <Typography className={classes.materialIconText}>
              TagFaces
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TapAndPlay />
            <Typography className={classes.materialIconText}>
              TapAndPlay
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Terrain />
            <Typography className={classes.materialIconText}>
              Terrain
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TextFields />
            <Typography className={classes.materialIconText}>
              TextFields
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TextFormat />
            <Typography className={classes.materialIconText}>
              TextFormat
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TextRotateUp />
            <Typography className={classes.materialIconText}>
              TextRotateUp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TextRotateVertical />
            <Typography className={classes.materialIconText}>
              TextRotateVertical
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TextRotationDown />
            <Typography className={classes.materialIconText}>
              TextRotationDown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TextRotationNone />
            <Typography className={classes.materialIconText}>
              TextRotationNone
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Textsms />
            <Typography className={classes.materialIconText}>
              Textsms
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Texture />
            <Typography className={classes.materialIconText}>
              Texture
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Theaters />
            <Typography className={classes.materialIconText}>
              Theaters
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ThreeDRotation />
            <Typography className={classes.materialIconText}>
              ThreeDRotation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ThreeSixty />
            <Typography className={classes.materialIconText}>
              ThreeSixty
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ThumbDown />
            <Typography className={classes.materialIconText}>
              ThumbDown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ThumbDownAlt />
            <Typography className={classes.materialIconText}>
              ThumbDownAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ThumbsUpDown />
            <Typography className={classes.materialIconText}>
              ThumbsUpDown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ThumbUp />
            <Typography className={classes.materialIconText}>
              ThumbUp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ThumbUpAlt />
            <Typography className={classes.materialIconText}>
              ThumbUpAlt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Timelapse />
            <Typography className={classes.materialIconText}>
              Timelapse
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Timeline />
            <Typography className={classes.materialIconText}>
              Timeline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Timer />
            <Typography className={classes.materialIconText}>
              Timer
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Timer10 />
            <Typography className={classes.materialIconText}>
              Timer10
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Timer3 />
            <Typography className={classes.materialIconText}>
              Timer3
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TimeToLeave />
            <Typography className={classes.materialIconText}>
              TimeToLeave
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Title />
            <Typography className={classes.materialIconText}>
              Title
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Toc />
            <Typography className={classes.materialIconText}>
              Toc
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Today />
            <Typography className={classes.materialIconText}>
              Today
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Toll />
            <Typography className={classes.materialIconText}>
              Toll
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Tonality />
            <Typography className={classes.materialIconText}>
              Tonality
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TouchApp />
            <Typography className={classes.materialIconText}>
              TouchApp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Toys />
            <Typography className={classes.materialIconText}>
              Toys
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TrackChanges />
            <Typography className={classes.materialIconText}>
              TrackChanges
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Traffic />
            <Typography className={classes.materialIconText}>
              Traffic
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Train />
            <Typography className={classes.materialIconText}>
              Train
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Tram />
            <Typography className={classes.materialIconText}>
              Tram
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TransferWithinAStation />
            <Typography className={classes.materialIconText}>
              TransferWithinAStation
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Transform />
            <Typography className={classes.materialIconText}>
              Transform
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TransitEnterexit />
            <Typography className={classes.materialIconText}>
              TransitEnterexit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Translate />
            <Typography className={classes.materialIconText}>
              Translate
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TrendingDown />
            <Typography className={classes.materialIconText}>
              TrendingDown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TrendingFlat />
            <Typography className={classes.materialIconText}>
              TrendingFlat
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TrendingUp />
            <Typography className={classes.materialIconText}>
              TrendingUp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TripOrigin />
            <Typography className={classes.materialIconText}>
              TripOrigin
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Tune />
            <Typography className={classes.materialIconText}>
              Tune
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TurnedIn />
            <Typography className={classes.materialIconText}>
              TurnedIn
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.TurnedInNot />
            <Typography className={classes.materialIconText}>
              TurnedInNot
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Tv />
            <Typography className={classes.materialIconText}>
              Tv
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Unarchive />
            <Typography className={classes.materialIconText}>
              Unarchive
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Undo />
            <Typography className={classes.materialIconText}>
              Undo
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.UnfoldLess />
            <Typography className={classes.materialIconText}>
              UnfoldLess
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.UnfoldMore />
            <Typography className={classes.materialIconText}>
              UnfoldMore
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Unsubscribe />
            <Typography className={classes.materialIconText}>
              Unsubscribe
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Update />
            <Typography className={classes.materialIconText}>
              Update
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Usb />
            <Typography className={classes.materialIconText}>
              Usb
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VerifiedUser />
            <Typography className={classes.materialIconText}>
              VerifiedUser
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VerticalAlignBottom />
            <Typography className={classes.materialIconText}>
              VerticalAlignBottom
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VerticalAlignCenter />
            <Typography className={classes.materialIconText}>
              VerticalAlignCenter
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VerticalAlignTop />
            <Typography className={classes.materialIconText}>
              VerticalAlignTop
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VerticalSplit />
            <Typography className={classes.materialIconText}>
              VerticalSplit
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Vibration />
            <Typography className={classes.materialIconText}>
              Vibration
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VideoCall />
            <Typography className={classes.materialIconText}>
              VideoCall
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Videocam />
            <Typography className={classes.materialIconText}>
              Videocam
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VideogameAsset />
            <Typography className={classes.materialIconText}>
              VideogameAsset
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VideoLabel />
            <Typography className={classes.materialIconText}>
              VideoLabel
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VideoLibrary />
            <Typography className={classes.materialIconText}>
              VideoLibrary
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewAgenda />
            <Typography className={classes.materialIconText}>
              ViewAgenda
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewArray />
            <Typography className={classes.materialIconText}>
              ViewArray
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewCarousel />
            <Typography className={classes.materialIconText}>
              ViewCarousel
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewColumn />
            <Typography className={classes.materialIconText}>
              ViewColumn
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewComfy />
            <Typography className={classes.materialIconText}>
              ViewComfy
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewCompact />
            <Typography className={classes.materialIconText}>
              ViewCompact
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewDay />
            <Typography className={classes.materialIconText}>
              ViewDay
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewHeadline />
            <Typography className={classes.materialIconText}>
              ViewHeadline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewList />
            <Typography className={classes.materialIconText}>
              ViewList
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewModule />
            <Typography className={classes.materialIconText}>
              ViewModule
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewQuilt />
            <Typography className={classes.materialIconText}>
              ViewQuilt
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewStream />
            <Typography className={classes.materialIconText}>
              ViewStream
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ViewWeek />
            <Typography className={classes.materialIconText}>
              ViewWeek
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Vignette />
            <Typography className={classes.materialIconText}>
              Vignette
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Visibility />
            <Typography className={classes.materialIconText}>
              Visibility
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VoiceChat />
            <Typography className={classes.materialIconText}>
              VoiceChat
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Voicemail />
            <Typography className={classes.materialIconText}>
              Voicemail
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VolumeDown />
            <Typography className={classes.materialIconText}>
              VolumeDown
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VolumeMute />
            <Typography className={classes.materialIconText}>
              VolumeMute
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VolumeUp />
            <Typography className={classes.materialIconText}>
              VolumeUp
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VpnKey />
            <Typography className={classes.materialIconText}>
              VpnKey
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.VpnLock />
            <Typography className={classes.materialIconText}>
              VpnLock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Wallpaper />
            <Typography className={classes.materialIconText}>
              Wallpaper
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Warning />
            <Typography className={classes.materialIconText}>
              Warning
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Watch />
            <Typography className={classes.materialIconText}>
              Watch
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WatchLater />
            <Typography className={classes.materialIconText}>
              WatchLater
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Waves />
            <Typography className={classes.materialIconText}>
              Waves
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WbAuto />
            <Typography className={classes.materialIconText}>
              WbAuto
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WbCloudy />
            <Typography className={classes.materialIconText}>
              WbCloudy
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WbIncandescent />
            <Typography className={classes.materialIconText}>
              WbIncandescent
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WbIridescent />
            <Typography className={classes.materialIconText}>
              WbIridescent
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WbSunny />
            <Typography className={classes.materialIconText}>
              WbSunny
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Wc />
            <Typography className={classes.materialIconText}>
              Wc
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Web />
            <Typography className={classes.materialIconText}>
              Web
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WebAsset />
            <Typography className={classes.materialIconText}>
              WebAsset
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Weekend />
            <Typography className={classes.materialIconText}>
              Weekend
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Whatshot />
            <Typography className={classes.materialIconText}>
              Whatshot
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WhereToVote />
            <Typography className={classes.materialIconText}>
              WhereToVote
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Widgets />
            <Typography className={classes.materialIconText}>
              Widgets
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Wifi />
            <Typography className={classes.materialIconText}>
              Wifi
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WifiLock />
            <Typography className={classes.materialIconText}>
              WifiLock
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WifiTethering />
            <Typography className={classes.materialIconText}>
              WifiTethering
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.Work />
            <Typography className={classes.materialIconText}>
              Work
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WorkOutline />
            <Typography className={classes.materialIconText}>
              WorkOutline
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.WrapText />
            <Typography className={classes.materialIconText}>
              WrapText
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.YoutubeSearchedFor />
            <Typography className={classes.materialIconText}>
              YoutubeSearchedFor
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ZoomIn />
            <Typography className={classes.materialIconText}>
              ZoomIn
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ZoomOut />
            <Typography className={classes.materialIconText}>
              ZoomOut
            </Typography>
          </IconGridItem>
          <IconGridItem>
            <Icons.ZoomOutMap />
            <Typography className={classes.materialIconText}>
              ZoomOutMap
            </Typography>
          </IconGridItem>
        </Grid>
      </div>
      )}
      {activeTabId === 1 && (
        <div>
          <Grid container spacing={2} className="icon-list">
            Will be updated.
          </Grid>
        </div>
      )}

    </>
  );
}
