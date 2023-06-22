import React, { ReactNode, createContext, useState } from "react"
import dataEvent from './event.json'
import { Event } from './../lib/types';


interface EventProviderProps {
  children: ReactNode
}

function createData(source: Event[]): Event[] {
  let eventsList = source.map((data: Event) => {
    return data
  })
  return eventsList
}

export const EventContext = createContext<Event[] | undefined>(undefined)

export const EventProvider = ({children}: EventProviderProps) => {
  const eventData = createData(dataEvent)
  return <EventContext.Provider value={ eventData }>{children}</EventContext.Provider>
}
