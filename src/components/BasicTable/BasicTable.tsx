import * as React from 'react';
import { useContext } from 'react';
import { EventContext } from '../../data/eventContext';
import convertToHourAndMinute from '../../utils/convertToHourAndMinute';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable() {
  const eventData = useContext(EventContext)
  const rows = eventData?.map((data, index) => {
    return {
      index: index,
      title: data.artists[0].title,
      stage: data.stage.title,
      festivalDay: {
        day: data.festivalday.title,
        start: convertToHourAndMinute(data.start),
        end: convertToHourAndMinute(data.end)
      } 
    }
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Índice</TableCell>
            <TableCell>Banda</TableCell>
            <TableCell align="right">Palco</TableCell>
            <TableCell align="right">Dia</TableCell>
            <TableCell align="right">Começa</TableCell>
            <TableCell align="right">Termina</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows !== undefined && rows.map((row) => (
            <>
            {console.log(row)}
            <TableRow
              key={row.index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell>{row.index + 1}</TableCell>
              <TableCell component="th" scope="row">{row.title}</TableCell>
              <TableCell align="right">{row.stage}</TableCell>
              <TableCell align="right">{row.festivalDay.day}</TableCell>
              <TableCell align="right">{row.festivalDay.start}</TableCell>
              <TableCell align="right">{row.festivalDay.end}</TableCell>
            </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}