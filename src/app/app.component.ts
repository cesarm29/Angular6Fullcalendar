import { Component,ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
calendarOptions: Options;
@ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
data:any;

ngOnInit() {

this.calendarOptions = {}

const dateObj = new Date();
const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);

this.data = [{
title: 'All Day Event',
start: yearMonth + '-01'
},
{
title: 'Long Event',
start: yearMonth + '-07',
end: yearMonth + '-10'
},
{
title: 'Long Event 2',
start: yearMonth + '-07',
end: yearMonth + '-12',
backgroundColor: '#0091d5',
allDay:true,
editable:true,
},
{
id: 999,
title: 'Repeating Event',
start: yearMonth + '-09T16:00:00'
}]

}

ngAfterViewInit() {
//https://fullcalendar.io/docs/initialization
this.ucCalendar.fullCalendar({
editable: true,
eventLimit: false,
header: {
left: 'prev,next today',
center: 'title',
right: 'month,agendaWeek,agendaDay,listMonth'
},
events: this.data,
selectable: true,

dayRender: (date, cell) => {
//console.log(date, cell);
//cell.css(‘background-color’, ‘red’);
//let btn = document.createElement( "button" );
//btn.textContent = 'myButton';
//cell.append(btn);
},

dayClick: (model) =>{
console.log(`dayClick(): ${model}`)
},

eventClick: (event, element) => {
event.title = 'CLICKED!';
this.ucCalendar.fullCalendar('updateEvent', event);
},
eventDrop: (event, element) => {
event.title = 'MOVED!';
this.ucCalendar.fullCalendar('updateEvent', event);
}

}); // this.ucCalender.fullCalendar

}
}