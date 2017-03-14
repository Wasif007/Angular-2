import { Component
,transition,
state,
animate,
trigger,
style
 } from '@angular/core';
@Component({
  selector: 'router-app',
  template: `<h1>Animation Class</h1>
                <button (click)="onClick()">ToggleLights</button>
                <div [@LightsOffOn]="StateChanged" class="room"></div>`,
                animations:[
                    trigger("LightsOffOn", [
                        state("off",style({
                            backgroundColor:'black'
                        })),
                        state("on",style({
                            backgroundColor:'white'
                        }))
                        ,transition("off => on",[animate('2s')])
                        ,transition("on => off",[animate('2s')])
                        ])
                ]
 
})
export class AnimationClass{ 
StateChanged:string="off";
onClick()
{
    this.StateChanged=(this.StateChanged==="off")?"on":"off";
}
}
