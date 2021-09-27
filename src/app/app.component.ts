import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private httpclient:HttpClient){this.fetchData();}
   

   fetchData()
   {
      this.httpclient.get<any>("https://reqres.in/api/users?page=2").subscribe(data =>{
        console.log(data);
      })
   }
}
