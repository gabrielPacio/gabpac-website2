import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        state('startRender', style({opacity: 0})),
        state('endRender', style({opacity: 1})),

        transition('startRender => endRender', animate('3s'))

        /*transition(':enter',  [
            style({opacity: 0}),
            animate('.3s', style({opacity: 1}))
        ])*/
    ]);
