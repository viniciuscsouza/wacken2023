import React, { useContext } from "react";
import BasicTable from "../components/BasicTable";
import { TableContext } from "../data/tableContext";
import { EventContext } from "../data/eventContext";
import { Container } from "@mui/material";
import Link from '@mui/material/Link';
import { TimeLineProps } from "../components/OppositeContentTimeline";
import BasicTimneLineModal from "../components/BasicModal";
import ScrollableTabs from "../components/ScrollableTabs";


export default function Home(){
  const eventData = useContext(EventContext)
  const { attendees } = useContext(TableContext)
  
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  const showsList = attendees.map((data) => {
    const attendee = {
      user_uid: data.user_uid, 
      uid: data.uid
    }
    return attendee
  })

  let fiteredEvent: TimeLineProps[] = []
  if (eventData !== undefined) {
    Object.keys(eventData).forEach(key => {
      const event = eventData[parseInt(key)]
      if (showsList[0] && showsList[0].uid.includes(event.uid)){
        fiteredEvent.push({start: event['start'], band: event['artists'][0]['title']})
      }
    })
  }
  const data = fiteredEvent

  return (
    <div>
      <h4>
        <Link href="https://github.com/viniciuscsouza/woa23" underline="hover">
          {'WOA 23 - repo'}
        </Link>
        <BasicTimneLineModal data={data} />
      </h4>
      <Container maxWidth="md">
        <Container sx={{display: 'flex', flexDirection: 'row'}}>
          <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <ScrollableTabs>
              <BasicTable />
            </ScrollableTabs>
          </Container>
        </Container>
      </Container>
    </div>
  )
}
