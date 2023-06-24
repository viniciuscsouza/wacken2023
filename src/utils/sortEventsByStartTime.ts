import { FestivalEvent } from "../components/BasicTable";

export function sortEventsByStartTime(events: FestivalEvent[]): FestivalEvent[] {
  return events.sort((a, b) => {
    const startTimeA = parseInt(a.festivalDay.start)
    const startTimeB = parseInt(b.festivalDay.start)
    
    return startTimeA - startTimeB;
  });
}