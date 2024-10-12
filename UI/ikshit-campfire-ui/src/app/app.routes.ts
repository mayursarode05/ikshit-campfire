import { Routes } from '@angular/router';
import { IndexComponent } from './shared/components/index/index.component';

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component:IndexComponent },
    { path: '**', redirectTo: 'index' }
];
