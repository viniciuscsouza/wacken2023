export function getWeekDayName(number: number): string | null {
  const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (number >= 0 && number <= 5) {
    return weekDay[number]
  } else {
    return null
  }
}