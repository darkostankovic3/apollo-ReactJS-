import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

import Box from '@material-ui/core/Box';
import { useDropzone } from 'react-dropzone';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import IconButton from '@material-ui/core/IconButton';
import { Button, Typography } from '../Wrappers/Wrappers';

// styles
import useStyles from './styles';

const formatBytes = (num) => {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];

  let i = 0;
  let n = parseInt(num, 10) || 0;

  while (n >= 1024) {
    i += 1;
    n /= 1024;
  }

  return (`${n.toFixed(n < 10 && i > 0 ? 1 : 0)} ${units[i]}`);
};

const FileUpload = (props) => {
  const {
    id,
    label,
    disabled,
    multiple,
    maxItems,
    maxSize,
    accept,
    hasButtonGroup,
    onChangeCallback,
  } = props;

  const classes = useStyles();

  const mobileMessage = (
    <>
      <span className={classes.activeText}>Browse for files</span>
    </>
  );

  const defaultMessage = isMobile ? mobileMessage : (
    <>
      Drag files here or
      {' '}
      <span className={classes.activeText}>browse</span>
    </>
  );

  const dragEnterMessage = (
    <>
      <span className={classes.activeText}>Drop here to upload!</span>
    </>
  );

  const mouseEnterMessage = (
    <>
      <span className={classes.activeText}>Click to browse</span>
    </>
  );

  const limitMessage = (
    <>
      <span>Upload limit reached</span>
    </>
  );

  const [message, setMessage] = useState(defaultMessage);
  const [dropZoneActive, setDropZoneActive] = useState(false);
  const [allowUpload, setAllowUpload] = useState(!disabled);
  const hasUploadLimit = maxItems > 0;
  const hasMaxSize = maxSize > 0;

  const onDragEnter = () => {
    setDropZoneActive(true);
    setMessage(dragEnterMessage);
  };

  const onDragLeave = () => {
    setDropZoneActive(false);
    setMessage(defaultMessage);
  };

  const onDrop = () => {
    setDropZoneActive(false);
    setMessage(defaultMessage);
  };

  const setDropzoneLimitUpload = (files) => {
    if (hasUploadLimit) {
      if (files.length >= maxItems) {
        setAllowUpload(false);
        setMessage(limitMessage);
      } else {
        setAllowUpload(true);
        setMessage(defaultMessage);
      }
    }
  };

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    disabled: !allowUpload,
    maxSize: hasMaxSize ? maxSize : undefined,
    accept,
    multiple,
    onDragEnter,
    onDragLeave,
    onDrop,
  });

  const [uploadedFiles, setUploadedFiles] = useState(acceptedFiles);
  const [rejectedFiles, setRejectedFiles] = useState(fileRejections);

  useEffect(() => {
    const newUploadedFiles = acceptedFiles.filter(
      (acceptedFile) => uploadedFiles.every(
        (uploadedFile) => acceptedFile.name !== uploadedFile.name,
      ),
    );

    const allUploadedFiles = maxItems > 0
      ? [...uploadedFiles, ...newUploadedFiles].slice(0, maxItems)
      : [...uploadedFiles, ...newUploadedFiles];

    setDropzoneLimitUpload(allUploadedFiles);

    setUploadedFiles(allUploadedFiles);
  }, [acceptedFiles]);

  useEffect(() => {
    const newRejectedFiles = fileRejections.filter(
      (fileRejection) => rejectedFiles.every(
        (rejectedFile) => fileRejection.file.name !== rejectedFile.file.name,
      ),
    );

    const allRejectedFiles = [...rejectedFiles, ...newRejectedFiles];

    setRejectedFiles(allRejectedFiles);
  }, [fileRejections]);

  useEffect(() => {
    setDropzoneLimitUpload(uploadedFiles);
    onChangeCallback(uploadedFiles);
  }, [uploadedFiles]);

  const handleDeleteFile = (file, action) => {
    if (action === 'uploaded') {
      setUploadedFiles(uploadedFiles.filter((item) => item.name !== file.name));
    } else if (action === 'rejected') {
      setRejectedFiles(rejectedFiles.filter((item) => item.file.name !== file.name));
    }
  };

  const handleSecondaryButton = () => {
    setUploadedFiles([]);
  };

  const handlePrimaryButton = () => {
    onChangeCallback(uploadedFiles);
  };

  return (
    <Box className={classes.fileUploadContainer}>
      <Box className={classes.labelWrapper}>
        {label && (
          <label
            className={classes.label}
            htmlFor={`file-upload-${id}`}
          >
            {label}
          </label>
        )}
      </Box>
      <Box
        className={`
        ${classes.dropzoneWrapper} 
        ${dropZoneActive && classes.dropzoneWrapperActive}
        ${!allowUpload && classes.dropzoneWrapperDisabled}`}
        {...getRootProps()}
        onMouseEnter={() => !isMobile && allowUpload && setMessage(mouseEnterMessage)}
        onMouseLeave={() => allowUpload && setMessage(defaultMessage)}
      >
        {allowUpload && (
          <input
            id={`file-upload-${id}`}
            name={`file-upload-${id}`}
            {...getInputProps()}
          />
        )}
        <Box className={classes.dropzoneContent}>
          <Box className={classes.iconWrapper} mb={1}>
            {allowUpload ? (
              <FileCopyIcon key="fileCopyIcon" className={classes.icon} />
            ) : [
              hasUploadLimit ? (
                <InfoIcon key="infoIcon" className={classes.icon} />
              ) : (
                <FileCopyIcon key="fileCopyIcon" className={classes.icon} />
              ),
            ]}
          </Box>
          <Box textAlign="center">
            <Typography variant="h6" weight="medium">
              {message}
            </Typography>
          </Box>
        </Box>
      </Box>
      {maxItems && maxItems > 0 && (
        <Box>
          <Typography className={classes.helpText} color="colorNeutral8">
            {maxItems}
            {' '}
            files maximum
          </Typography>
        </Box>
      )}
      {hasMaxSize && (
        <Box>
          <Typography className={classes.helpText} color="colorNeutral8">
            Max size:
            {' '}
            {formatBytes(maxSize)}
          </Typography>
        </Box>
      )}
      {accept && accept.length > 0 && (
        <Box>
          <Typography className={classes.helpText} color="colorNeutral8">
            Support file types:
            {' '}
            {accept.map((fileType, index) => (
              <span key={fileType}>
                {fileType}
                {index === accept.length - 1 ? '' : ', '}
              </span>
            ))}
          </Typography>
        </Box>
      )}
      {uploadedFiles && uploadedFiles.length > 0 && (
        <Box mt={2}>
          <List disablePadding>
            {uploadedFiles.map((file) => (
              <ListItem
                key={file.path}
                divider
                className={classes.fileItem}
              >
                <Box mr={3}>
                  <Typography className={classes.fileDescription} variant="h6">
                    <span className={classes.fileName}>
                      {file.path}
                      {' '}
                    </span>
                    <span className={classes.fileSize}>
                      (
                      {formatBytes(file.size)}
                      )
                    </span>
                  </Typography>
                </Box>
                <Box className={classes.itemButtonsWrapper}>
                  <CheckCircleIcon className={classes.successIcon} />
                  <Box ml={1}>
                    <IconButton
                      classes={{ root: classes.deleteIconButton }}
                      aria-label="delete"
                      onClick={() => handleDeleteFile(file, 'uploaded')}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {rejectedFiles && rejectedFiles.length > 0 && (
        <Box mt={2}>
          <List disablePadding>
            {rejectedFiles.map(({ file, errors }) => (
              <ListItem
                key={file.path}
                divider
                className={classes.errorFileItem}
              >
                <Box className={classes.errorFileState}>
                  <Box mr={3}>
                    <Typography className={classes.fileDescription} variant="h6">
                      <span className={classes.fileName}>
                        {file.path}
                        {' '}
                      </span>
                      <span className={classes.fileSize}>
                        (
                        {formatBytes(file.size)}
                        )
                      </span>
                    </Typography>
                  </Box>
                  <Box className={classes.itemButtonsWrapper}>
                    <WarningIcon className={classes.warningIcon} />
                    <Box ml={1}>
                      <IconButton
                        classes={{ root: classes.deleteIconButton }}
                        aria-label="delete"
                        onClick={() => handleDeleteFile(file, 'rejected')}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.errorFileMessageWrapper}>
                  <List disablePadding>
                    {errors.map((e) => (
                      <ListItem key={e.code} className={classes.errorFileMessage}>
                        {e.code === 'file-too-large' ? `File size larger than: ${formatBytes(maxSize)}` : e.message}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {hasButtonGroup && uploadedFiles && uploadedFiles.length > 0 && (
        <Box className={classes.buttonsGroupWrapper} mt={5}>
          <Box mr={2}>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              onClick={handleSecondaryButton}
            >
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handlePrimaryButton}
            >
              Save
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

FileUpload.defaultProps = {
  label: '',
  multiple: true,
  disabled: false,
  maxItems: -1,
  maxSize: -1,
  accept: undefined,
  hasButtonGroup: false,
  onChangeCallback: () => {},
};

FileUpload.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  maxItems: PropTypes.number,
  maxSize: PropTypes.number,
  accept: PropTypes.arrayOf(PropTypes.string),
  hasButtonGroup: PropTypes.bool,
  onChangeCallback: PropTypes.func,
};

export default FileUpload;
