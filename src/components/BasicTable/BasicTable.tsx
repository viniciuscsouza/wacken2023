import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dataEvent from '../../data/event.json'
const moment = require('moment-timezone');

interface Stage {
  name: string;
}

interface FestivalDay {
  day: string;
  start: string;
  end: string;
}

interface Artist {
  index: number;
  title: string;
  country: string;
  festivalDay: FestivalDay;
  stage: Stage;
}

type DataSource = {
    artists: [
      {
        assets: [],
        country: [],
        pathSegment: string,
        title: string,
        uid: number
      }
    ],
    end: string,
    festival: {
      title: string,
      uid: number
    },
    festivalday: {
      end: string,
      start: string,
      title: string,
      uid: number
    },
    images: string | null,
    media: string | null,
    performance: {
      title: string,
      uid: number
    },
    stage: {
      description: string,
      latitude: string,
      longitude: string,
      pid: number,
      sorting: number,
      subtitle: string,
      title: string,
      uid: number
    },
    start: string,
    subtitle: string,
    sysLanguageUid: string,
    teaser: string,
    title: string,
    uid: number
}

function convertToHourAndMinute(timestampString: string) {
  const timestamp = parseInt(timestampString)
  const data = moment.tz(timestamp * 1000, 'Europe/Berlin')
  const hour = data.format('HH')
  const minute = data.format('mm')

  return `${hour}:${minute}`;
}

function createData(source: DataSource[]): Artist[] {
  let artists = source.map((data: any, index) => ({
      index: index,
      title: data.artists[0].title,
      country: data.artists[0].country[0]?.nameLocalized,
      festivalDay: {
        day: data.festivalday.title,
        start: convertToHourAndMinute(data.start),
        end: convertToHourAndMinute(data.end)
      },
      stage: {
        name: data.stage.title
      }
    })
  )
  return artists
}

const eventData: DataSource[] | any = dataEvent;
const rows = createData(eventData)

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Índice</TableCell>
            <TableCell>Banda</TableCell>
            <TableCell align="right">País</TableCell>
            <TableCell align="right">Palco</TableCell>
            <TableCell align="right">Dia</TableCell>
            <TableCell align="right">Começa</TableCell>
            <TableCell align="right">Termina</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
            {console.log(row)}
            <TableRow
              key={row.index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell>{row.index + 1}</TableCell>
              <TableCell component="th" scope="row">{row.title}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.stage.name}</TableCell>
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