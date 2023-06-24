import React, { ReactNode, createContext, useState } from 'react'

interface TableProviderProps {
  children: ReactNode
}

interface Attendees {
  user_uid: string;
  uid: number[];
}

interface TableContextProps {
  attendees: Attendees[]
  updateAttendees: (user_uid: string, uid: number[]) => void
}

export const TableContext = createContext<TableContextProps>({
  attendees: [],
  updateAttendees: () => {},
})

export const TableProvider = ({children}: TableProviderProps) => {
  const [attendees, setAttendees] = useState<Attendees[]>([])

  const updateAttendees = (user_uid: string, uid: number[]) => {
    const existingAttendee = attendees.findIndex((data) => data.user_uid === user_uid)

    if (existingAttendee !== -1){
      const updatedAttendee = [...attendees]
      updatedAttendee[existingAttendee] = {
        ...updatedAttendee[existingAttendee],
        uid: uid
      }
      setAttendees(updatedAttendee)

    } else {
      const newAttendeeObject: Attendees = {
        user_uid: user_uid,
        uid: uid
      }

      setAttendees([...attendees, newAttendeeObject])
    }
  }

  return (
    <TableContext.Provider value={{ attendees, updateAttendees }}>
      {children}
    </TableContext.Provider>
  )
}