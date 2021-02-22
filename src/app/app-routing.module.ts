import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NoInternetComponent } from './no-internet/no-internet.component';
import { SpeedTestComponent } from './speed-test/speed-test.component';

const routes: Routes = [
  { path: 'no-internet', component: NoInternetComponent },
  { path: 'speed-test', component: SpeedTestComponent },
  { path: 'home', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
