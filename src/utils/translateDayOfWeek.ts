export function translateDayOfWeek(dayOfWeek: string): string {
  const daysOfWeek: { [key: string]: string } = {
    Sunday: 'Domingo',
    Monday: 'Segunda-feira',
    Tuesday: 'Terça-feira',
    Wednesday: 'Quarta-feira',
    Thursday: 'Quinta-feira',
    Friday: 'Sexta-feira',
    Saturday: 'Sábado',
  };

  return daysOfWeek[dayOfWeek] || 'Dia da semana inválido';
}