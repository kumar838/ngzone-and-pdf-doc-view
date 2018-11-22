import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NgzoneComponent } from './ngzone/ngzone.component';
import { HostComponent } from './host/host.component';
import { FilesComponent } from './files/files.component';
const approuting:Routes=[
  {path:'ngzone',component:NgzoneComponent},
  {path:'host',component:HostComponent},
  {path:'files',component:FilesComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NgzoneComponent,
    HostComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approuting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
