/*
 * @Author: huangfengqi
 * @Date: 2019-11-27 14:50:23
 * @LastEditors: huangfengqi
 * @LastEditTime: 2019-11-27 17:51:51
 * @FilePath: \FengQI\src\app\app-routinng.module.ts
 */
import {RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const routes:Routes = [
    {path:'main',component:MainComponent},
    {path:'article',component:ArticleComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'about',component:AboutComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}