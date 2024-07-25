import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;
  
}
