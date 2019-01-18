import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
      // @ts-ignore
      $.fn.jQuerySimpleCounter = function( options ) {
          var settings = $.extend({
              start:  0,
              end:    100,
              easing: 'swing',
              duration: 400,
              complete: ''
          }, options );

          var thisElement = $(this);

          $({count: settings.start}).animate({count: settings.end}, {
              duration: settings.duration,
              easing: settings.easing,
              step: function() {
                  var mathCount = Math.ceil(this.count);
                  thisElement.text(mathCount);
              },
              complete: settings.complete
          });
      };


      // @ts-ignore
      $('#number1').jQuerySimpleCounter({end: 70,duration: 4000});
      // @ts-ignore
      $('#number2').jQuerySimpleCounter({end: 95,duration: 5500});
      // @ts-ignore
      $('#number3').jQuerySimpleCounter({end: 359,duration: 5500});
      // @ts-ignore
      $('#number4').jQuerySimpleCounter({end: 246,duration: 5500});






  }
}
