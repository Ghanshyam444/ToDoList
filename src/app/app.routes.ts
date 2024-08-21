import { Routes } from '@angular/router';
import { TodosComponent } from './Mycomponets/todos/todos.component';
import { AboutComponent } from './Mycomponets/about/about.component';


 export const routes: Routes = [
  { path : '', component: TodosComponent},
  { path : 'about', component: AboutComponent}
];
