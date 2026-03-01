import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Lazy loading for Notes Module
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
  },
  // Lazy loading for Dashboard Module
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
// Redirect root to notes
  { path: '', redirectTo: '/notes/list', pathMatch: 'full' },
  // Wildcard route - redirect to notes
  { path: '**', redirectTo: '/notes/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
