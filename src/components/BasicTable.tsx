import * as React from 'react';
import { useContext } from 'react';
import { EventContext } from '../data/eventContext';
import convertToHourAndMinute from '../utils/convertToHourAndMinute';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { TabContext } from '../data/tabContext';
import { TableContext } from '../data/tableContext';

interface FestivalEvent {
  index: number;
  uid: number;
  band: string;
  stage: string;
  festivalDay: {
    day: string;
    start: string;
    end: string;
  };
}

function sortEventsByStartTime(events: FestivalEvent[]): FestivalEvent[] {
  return events.sort((a, b) => {
    const startTimeA = parseInt(a.festivalDay.start)
    const startTimeB = parseInt(b.festivalDay.start)
    
    return startTimeA - startTimeB;
  });
}

function getWeekDayName(number: number): string | null {
  const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (number >= 0 && number <= 5) {
    return weekDay[number]
  } else {
    return null
  }
}

export default function BasicTable() {
  const [selected, setSelected] = React.useState<number[]>([]);
  const eventData = useContext(EventContext)
  const { tabValue } = useContext(TabContext)!
  const { attendees, updateAttendees } = useContext(TableContext)

  const user_uid = 'Vinicius'

  React.useEffect(() => {
    updateAttendees(user_uid, selected)
  }, [selected])
  
  const rows: FestivalEvent[] = eventData?.map((data, index) => {
    return {
      index: index,
      uid: data.uid,
      band: data.artists[0].title,
      stage: data.stage.title,
      festivalDay: {
        day: data.festivalday.title,
        start: convertToHourAndMinute(data.start),
        end: convertToHourAndMinute(data.end)
      } 
    }
  })!

  const sortedRows = sortEventsByStartTime(rows);

  const handleClick = (event: React.MouseEvent<unknown>, uid: number) => {
    const selectedIndex = selected.indexOf(uid)
    let newSelected: number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, uid)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected)
  };

  const isSelected = (uid: number) => selected.indexOf(uid) !== -1;

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> 🤘 </TableCell>
            <TableCell align="right">Começa</TableCell>
            <TableCell align="right">Termina</TableCell>
            <TableCell>Banda</TableCell>
            <TableCell align="right">Palco</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { sortedRows !== undefined && sortedRows.map((row) => {
            const isItemSelected = isSelected(row.uid);
            const labelId = `enhanced-table-checkbox-${row.index}`;
            const weekDayName = getWeekDayName(tabValue)
            if (row.festivalDay.day === weekDayName)
            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.uid)}
                role="checkbox"
                tabIndex={-1}
                key={row.uid}
                selected={isItemSelected}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                      />
                  </TableCell>
                <TableCell align="right">{row.festivalDay.start}</TableCell>
                <TableCell align="right">{row.festivalDay.end}</TableCell>
                <TableCell component="th" scope="row">{row.band}</TableCell>
                <TableCell align="right">{row.stage}</TableCell>
              </TableRow>
            )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
    );
}