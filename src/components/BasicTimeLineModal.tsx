import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import Modal from '@mui/material/Modal';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import convertToHourAndMinute from '../utils/convertToHourAndMinute';
import { TabContext } from '../data/tabContext';
import { getWeekDayName } from '../utils/getWeekDay';
import { Typography } from '@mui/material';
import { translateDayOfWeek } from '../utils/translateDayOfWeek';

export interface TimeLineProps {
  start?: string;
  band?: string;
  day?: string;
}

interface BasicTimneLineModalProps {
  children?: Element[];
  position?: string;
  data: TimeLineProps[] | [];
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicTimneLineModal({data}: BasicTimneLineModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { tabValue } = React.useContext(TabContext)!
  const weekDayName = getWeekDayName(tabValue) || ''

  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 }}}>
        <Fab 
          color="primary" 
          aria-label="add" 
          onClick={handleOpen}
          >
          <ViewTimelineIcon />
        </Fab>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" align="center">
            {translateDayOfWeek(weekDayName)}
          </Typography>
          <Timeline position="alternate">
            {data.map((item, index) => {
              if (item.day === weekDayName)
              return (
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      {convertToHourAndMinute(item.start!)}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{item.band}</TimelineContent>
                  </TimelineItem>
              )}
            )}
          </Timeline>
        </Box>
      </Modal>
    </div>
  );
}