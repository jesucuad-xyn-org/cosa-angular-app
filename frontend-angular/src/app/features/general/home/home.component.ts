import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../core/services/seo/seo.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  items = [
    {
      icon: "fa-solid fa-file-lines",
      name: "Landing Page",
      description: "Css linear-gradient",
      link: '/landing-page'
    },
    {
      icon: "fa-solid fa-address-card",
      name: "Images Cards",
      description: "Cascade Cards",
      link: '/cards'
    },
    {
      icon: "fa-brands fa-bootstrap",
      name: "bootstrap",
      description: "UI and components",
      link: '/bootstrap'
    },
    {
      icon: "fa-sharp fa-solid fa-newspaper",
      name: "News",
      description: "Trailers and youtube",
      link: '/news'
    },
    {
      icon: "fa-solid fa-chart-simple",
      name: "Boxoffice",
      description: "Movies boxoffice",
      link: '/boxoffice'
    },
    {
      icon: "fa-solid fa-blender-phone",
      name: "Services",
      description: "angular Services",
      link: '/services'
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      name: "Components",
      description: "Angular components",
      link: '/components'
    },
    {
      icon: "fa-solid fa-network-wired",
      name: "HttpClient",
      description: "Httpclient library",
      link: '/httpclient'
    },
    {
      icon: "fa-regular fa-rectangle-list",
      name: "forms",
      description: "Reactive & Template",
      link: '/forms'
    },
    {
      icon: "fa-solid fa-spell-check",
      name: "Prism",
      description: "Syntax highlighter",
      link: '/prism'
    },
    {
      icon: "fa-solid fa-globe",
      name: "continents",
      description: "continents",
      link: '/continents'
    },
  ]

  constructor(private seoService: SeoService) {

    const content =
      'This application was developed with ' + this.angular + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-starter Title : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }


}
