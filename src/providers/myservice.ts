import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Myservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Myservice {

  constructor(public http: Http) {
    console.log('Hello Myservice Provider');
  }
  getuser()
  {
    console.log(this.http.get("http://ionicpfa.000webhostapp.com/users.php"));
  }

}
