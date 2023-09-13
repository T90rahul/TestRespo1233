import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentbbComponent } from './parentbb/parentbb.component';
import { ChildbaComponent } from './parentbb/childba/childba.component';
import { ChildbbComponent } from './parentbb/childba/childbb/childbb.component';
import { ChildbcComponent } from './parentbb/childba/childbb/childbc/childbc.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ParentAAComponent } from './parent-aa/parent-aa.component';
import { ChildaaComponent } from './parent-aa/childaa/childaa.component';
import { ChildabComponent } from './parent-aa/childaa/childab/childab.component';
import { ChildacComponent } from './parent-aa/childaa/childab/childac/childac.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentbbComponent,
    ChildbaComponent,
    ChildbbComponent,
    ChildbcComponent,
    ParentAAComponent,
    ChildaaComponent,
    ChildabComponent,
    ChildacComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
