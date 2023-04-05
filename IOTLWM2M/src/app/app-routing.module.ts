import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
//import { } from '@angular/forms';
const routes: Routes = [
 {path: '',redirectTo: 'dashboard', pathMatch:'full'},
 {path: 'dashboard', component: DashboardComponent},
 {path: 'settings', component: SettingsComponent},
 {path: 'statistics', component: StatisticsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
