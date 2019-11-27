/*
 * @Author: huangfengqi
 * @Date: 2019-11-26 16:58:08
 * @LastEditors: huangfengqi
 * @LastEditTime: 2019-11-27 15:27:42
 * @FilePath: \FengQI\src\app\app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routinng.module';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SelectedDirective } from './shared/selected.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArticleComponent,
    AboutComponent,
    ProjectsComponent,
    SelectedDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
