import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
 links: string[];
  constructor(public sanitizer: DomSanitizer) {
      this.links = [
          'https://www.youtube.com/embed/wJnBTPUQS5A',
          'https://www.youtube.com/embed/gxeFPkuKLRU',
          'https://www.youtube.com/embed/wJnBTPUQS5A',
          'https://www.youtube.com/embed/kCcF12xp3jo',
          'https://www.youtube.com/embed/wJnBTPUQS5A',
          'https://www.youtube.com/embed/kCcF12xp3jo',
      ]
  }


  ngOnInit() {

  }
getSafeLink(link){
      // console.log('Ruchitesh ', this.sanitizer.bypassSecurityTrustUrl(link)
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);

}
}
