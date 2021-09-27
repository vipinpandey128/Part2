import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HelloComponent } from './hello/hello.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [	
    AppComponent,
      TestComponent,
      HelloComponent,
      
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'hello',component:HelloComponent},
      {path:'test',component:TestComponent}
    ]),
    HttpClientModule,
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
