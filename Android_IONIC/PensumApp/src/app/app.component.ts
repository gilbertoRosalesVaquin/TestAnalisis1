import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LogInPage } from '../pages/log-in/log-in';
import { ProgresoPage } from "../pages/progreso/progreso";
import { VerPensumPage } from "../pages/ver-pensum/ver-pensum";
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = LogInPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ver Mi Horario', component: HomePage },
      //{ title: 'List', component: ListPage }
      { title: 'Ver Mi Progreso', component: ProgresoPage },
      { title: 'Log Out', component: LogInPage },
      { title: 'Ver Pensum', component: VerPensumPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page == 'Log Out')
    {
      this.nav.popToRoot();
    }
    else
    {
      this.nav.setRoot(page.component);
    }
  }
}
