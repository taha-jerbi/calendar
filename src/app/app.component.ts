import { Component, OnInit } from '@angular/core';
import dayGridPlugins from '@fullcalendar/daygrid' ;
import { EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  calendarEvents: EventInput[]=[
    { title:'Fête de l Independance' , start: new Date('mar 20, 2020')},
    { title:'Journée des Martyrs' ,start: new Date('apr 9, 2020')},
    { title:'Fête du travail' , start: new Date('may 1, 2020')},
    { title:'Fête de la République', start: new Date('jul 25, 2020')},
    { title:'Aïd el Fitr' , start: new Date('may 25, 2020')},
    { title:'Fête de la femme et de la famille',start: new Date('aug 13, 2020')},
    { title:'Aïd al adha', start: new Date('jul 31, 2020')},
    { title:'Fête de l Evacuation', start: new Date('oct 15, 2020')},
    { title:'Al Mawlid', start: new Date('oct 29, 2020')},
    { title:'Fête de la Révolution et de la jeunesse', start: new Date('jan 14, 2020')}
    
    
  ]
  calendarPlugins=[dayGridPlugins,interactionPlugin] ;

    constructor() { }
    dayRender(args){
      console.log("yeah") ;
      var cell:HTMLElement = args.el ;
      cell.ondblclick = (ev:MouseEvent)=>{
        this.addEvent(args.date) ;
      }
    }

    addEvent(date) {
      console.log("hey") ;
      var title=prompt('Enter event :') ;
      if(title == '') return ;
      this.calendarEvents=this.calendarEvents.concat({
        title:title,
        satrt:date
      })
    }
    

}
