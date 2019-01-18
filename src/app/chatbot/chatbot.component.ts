import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
    ProcessContainer;
  constructor() { }

  ngOnInit() {
      $(function(){
          $("#closebutton").click(function(e){
              $("#menuoptions").toggle();
          });
      });

  }

}
