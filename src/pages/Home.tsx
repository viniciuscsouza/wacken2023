import React from "react";
import Tab from "../components/BasicTable/Tab";
import BasicTable from "../components/BasicTable/BasicTable";


export default function Home(){

  return (
    <div>
      <h1>Home</h1> 
      <Tab>
        <BasicTable />
      </Tab>
    </div>
  )
}
