import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

 
import { ListPage } from '../pages/list/list';

import {OrganisationsPage} from '../pages/organisations/organisations'
import {UsersPage} from '../pages/users/users'
import {ReposPage} from '../pages/repos/repos'
//    UsersPage,ReposPage,OrganisationsPage

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsersProvider } from '../providers/github-users/github-users';

@NgModule({
  declarations: [
    MyApp,ListPage, UsersPage,ReposPage,OrganisationsPage

  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,ListPage,UsersPage,ReposPage,OrganisationsPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider
  ]
})
export class AppModule {}
