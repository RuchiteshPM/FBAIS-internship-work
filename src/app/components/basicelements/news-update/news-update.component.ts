import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
import * as $ from 'jquery';
@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.scss']
})
export class NewsUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(function(){
          var tickerLength = $('.con ul li').length;
          var tickerHeight = $('.con ul li').outerHeight();
          $('.con ul li:last-child').prependTo('.con ul');
          $('.con ul').css('marginTop',-tickerHeight);
          function moveTop(){
              $('.con ul').animate({
                  top : -tickerHeight
              },600, function(){
                  $('.con ul li:first-child').appendTo('.con ul');
                  $('.con ul').css('top','');
              });
          }
          setInterval( function(){
              moveTop();
          }, 3000);
      });

  }
  updates=["Get 8 in 1 coupons for python course!","Test results!","[Update] List of Upcoming courses","[Important] Notes are sent!","Shortlisted students","Admission process is started!","Discounts!","Course Update","Teaching scheme."]

}
