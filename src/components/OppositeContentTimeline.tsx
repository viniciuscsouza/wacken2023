import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import convertToHourAndMinute from '../utils/convertToHourAndMinute';

export interface TimeLineProps {
  start?: string;
  band?: string;
}
interface Props {
  data: TimeLineProps[] | []
}

export default function OppositeContentTimeline({data}: Props) {
  return (
    <div>
    <Timeline position="alternate">
      {data.map((item, index) => (
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
      ))}
    </Timeline>
    </div>
  );
}