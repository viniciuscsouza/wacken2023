import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

interface TimeLineProps {
  timeLineEvent: {
    start: string;
    band: string;
  }[]
}
export default function OppositeContentTimeline({timeLineEvent}: TimeLineProps) {
  return (
    <Timeline position="alternate">
      {timeLineEvent.map((item, index) => (
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            {item.start}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{item.band}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}