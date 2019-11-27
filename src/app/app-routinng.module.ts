/*
 * @Author: huangfengqi
 * @Date: 2019-11-27 14:50:23
 * @LastEditors: huangfengqi
 * @LastEditTime: 2019-11-27 16:22:35
 * @FilePath: \FengQI\src\app\app-routinng.module.ts
 */
import {RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';

const routes:Routes = [
    {path:'main',component:MainComponent,pathMatch:'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}