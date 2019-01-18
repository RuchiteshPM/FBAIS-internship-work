import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonial=[{
      img:'../../../assets/img/FBAIS/pic1.jpeg',
      title:{name:'YUTHPATI RATHI',
          d:'Masters Student',
          u:'Duke University (USA)'},
      desc:'I joined the data analytics course with FBTS to prepare myself further for my upcoming masters course , although first I was skeptic after meeting Aniruddha sir who was very young , my skepticism was removed very early when the course began , the way through which the course is taught at kasa is very very practical and simple , all my doubts from basic to advanced very cleared very thoroughly , what appealed the most to me was the practical and real life examples taught in the course which made my concepts very clear and firm , I can surely say that joining kasa the only place which teaches data science in Nagpur will be a great investment for anyone who wishes to enter the realms of big data.'

  },{
      img:'../../../assets/img/FBAIS/pic2.jpeg',
      title:{name:'KARTIK DOLAS',
          d:'Software Developer',
          u:'Value Labs'},
      desc:'Joining Fireblaze A.I school for course of data analytics was not just about completion of course but it was an opportunity to enhance myself and to get hands on experience on it. Independent of my previous intercept, Aniruddha sir helped me to develop technical and abstract mathematical concepts and guided at each point. Thanks Aniruddha sir and Fireblaze A.I school for giving me this unique and priceless opportunity.'

  },{
      img:'../../../assets/img/FBAIS/pic3.jpeg',
      title:{name:'ATHARVA M',
          d:'Junior Decision Scientist',
          u:'Mu Sigma'},
      desc:'I personally never had interest in core programming like in C, java. Fireblaze A.I school\'s Data Science & Machine Learning with Python course developed my interest in Data Science which made me capable to get placed in Mu Sigma, a leading Data Analytics firm in India. The hands-on experience and scope of interaction while learning made it interesting.'

  }]
  constructor() { }

  ngOnInit() {
  }

}
