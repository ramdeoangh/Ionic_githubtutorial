import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GithubUsersProvider} from '../../providers/github-users/github-users';
import {User} from '../../models/user';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

   users:User[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private githubUserProvider:GithubUsersProvider) {
        this.githubUserProvider.load().subscribe(res=>{
          this.users=res;
          console.log(res);
        })
  }

  ionViewDidLoad() {
    console.log('Hello UsersPage');
  }

}
