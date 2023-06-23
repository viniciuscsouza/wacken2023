import React, { useContext } from "react";
import Tab from "../components/BasicTable/Tab";
import BasicTable from "../components/BasicTable/BasicTable";
import { TableContext } from "../data/tableContext";
import { EventContext } from "../data/eventContext";


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


  return (
    <div>
      <h1>Home</h1> 
      <h4>{`Adicionar firebase: ${showsList.length !== 0 ? showsList[0]["user_uid"] : ' ' }`}</h4>
      <h4>{`Clicou uid: ${showsList.length !== 0 ? showsList[0].uid : ' '}`}</h4>
      <Tab>
        <BasicTable />
      </Tab>
    </div>
  )
}
