
import { differenceInDays, differenceInHours, differenceInMinutes, parseISO } from 'date-fns'

const compareDate = (date: string): string | undefined => {

    let diffenrenceDays = Number(differenceInDays(Date.now(), parseISO(date)));
    let diffenrenceHour = Number(differenceInHours(Date.now(), parseISO(date)));
    let diffenrenceMinutes= Number(differenceInMinutes(Date.now(), parseISO(date)));
    let comparedDate;

    console.log('diffenrenceDays', diffenrenceDays)
    console.log('diffenrenceHour', diffenrenceHour)
    console.log('diffenrenceMinutes', diffenrenceMinutes)

    if(diffenrenceDays <= 0) {
      comparedDate = `${diffenrenceHour} horas atrás`;
    }

    if(diffenrenceDays <= 0 && diffenrenceHour <= 0) {
      comparedDate = `${diffenrenceMinutes} minutos atrás`;
    }

    if(diffenrenceDays > 0) {
      comparedDate = `${diffenrenceDays} dias atrás`;
    }
    
    return comparedDate;
}

export default compareDate;