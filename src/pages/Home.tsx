import React, { useContext } from "react";
import Tab from "../components/BasicTable/Tab";
import BasicTable from "../components/BasicTable/BasicTable";
import { TableContext } from "../data/tableContext";
import { EventContext } from "../data/eventContext";
import { Container } from "@mui/material";
import Timeline from "../components/BasicTable/Timeline"


export default function Home(){
  const eventData = useContext(EventContext)
  const { attendees } = useContext(TableContext)
  
  const showsList = attendees.map((data) => {
    const attendee = {
      user_uid: data.user_uid, 
      uid: [data.uid]
    }
    return attendee
  })

  const data = [
    {start: 'start', band: 'band'},
    {start: 'start', band: 'band'},
    {start: 'start', band: 'band'},
    {start: 'start', band: 'band'},
    {start: 'start', band: 'band'},
  ]

  return (
    <div>
      <h1>Home</h1> 
      <h4>{`user: ${showsList.length !== 0 ? showsList[0]["user_uid"] : ' ' }`}</h4>
      <h4>{`uid: ${showsList.length !== 0 ? showsList[0].uid : ' '}`}</h4>
      <Container maxWidth="lg">
        <Container sx={{display: 'flex', flexDirection: 'row'}}>
          <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <Tab>
              <BasicTable />
            </Tab>
          </Container>
          <Timeline timeLineEvent={data} />
        </Container>
      </Container>
    </div>
  )
}
