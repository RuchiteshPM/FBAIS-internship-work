import {Component, Input, OnInit} from '@angular/core';
import {TestimonialsComponent} from '../components/testimonials/testimonials.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
    @Input() testiMonials:TestimonialsComponent;
  focus: any;
  focus1: any;
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

    },{
        img:'../../../assets/img/FBAIS/pic4.jpeg',
        title:{name:'RUCHA SHENDE',
            d:'Software Developer',
            u:'Persistent Systems'},
        desc:'My association with Fireblaze A.I school has been a great learning experience. The courses are thoroughly designed to cater to the learning process of students from every domain. Aniruddha sir\'s teaching methodology is excellent and helps to clear fundamentals from basic to advanced. Hands-on training is provided which makes the learning a fun experience. My sincere thanks to the institute and Aniruddha sir for providing me with such an amazing platform to learn Data Science.'

    },{
        img:'../../../assets/img/FBAIS/pic5.jpeg',
        title:{name:'Shraddha Tijare',
            d:'Junior Decision Scientist',
            u:'Mu Sigma'},
        desc:'I enrolled for the Python course in the Data Science with python, and Sir made sure that I do most of the coding by myself and learn from my mistakes. All this helped me a lot and I started developing interest in Data Science. I also completed Machine Learning course followed by DSC. All this courses proved to be paramount as I fared better than the others in the campus recruitment interviews. And then also he gave us projects which we were able to do on our own.'

    },{
        img:'../../../assets/img/FBAIS/pic6.jpeg',
        title:{name:'Shatul Shewade',
            d:'Masters Student ',
            u:'Western Sydney University'},
        desc:'Fireblaze AI School\'s training and internship helped me to enhance and boost my skills in data science and ML in Python despite of zero coding skills ,Sir training helped to be erudite in that because of him only I able to apply Masters in Data Science in Australia and also I got admitted in the university. I am very thankful to Aniruddha sir for their training.'

    },{
        img:'../../../assets/img/FBAIS/pic7.jpeg',
        title:{name:'Maaheen Jaiswal',
            d:'Student',
            u:'Vellore Institute of Technology'},
        desc:'Learnt more of data science over here than 2 years at University.Hands down!By far one of the fastest course to clear your fundamentals and also the uncanny ability of the trainer always keeps you engaged.'

    },{
        img:'../../../assets/img/FBAIS/pic8.jpeg',
        title:{name:'Jidhnyasa Khondey',
            d:'Software Developer',
            u:'Tata Consutency Services'},
        desc:'If you are in search of a course of Data Analysis in Nagpur and want to firm your roots in this field , then Fireblaze AI Schol is the best choice . Learning things here will help you to acquire alot of interest and ideas regarding Data Science.'

    },{
        img:'../../../assets/img/FBAIS/pic9.jpeg',
        title:{name:'Aditi Agasti',
            d:'Software Developer ',
            u:'Infosys'},
        desc:'Joining this class my whole perspective regarding classes changed. He is so cheerful and energetic that we automatically become fresh and focused in the class. The best part is whatever he taught us we executed then and there, so we actually gained the practical knowledge and somehow it became easy for us to learn the language.'

    },]

  constructor() { }

  ngOnInit() {}

}
