import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'content',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.page').then( m => m.AboutUsPage)
  },
  {
    path: 'thraitha-siddhanthamu',
    loadComponent: () => import('./thraitha-siddhanthamu/thraitha-siddhanthamu.page').then( m => m.ThraithaSiddhanthamuPage)
  },
  {
    path: 'lord-krishna',
    loadComponent: () => import('./lord-krishna/lord-krishna.page').then( m => m.LordKrishnaPage)
  },
  {
    path: 'videos',
    loadComponent: () => import('./videos/videos.page').then( m => m.VideosPage)
  },
  {
    path: 'share',
    loadComponent: () => import('./share/share.page').then( m => m.SharePage)
  },
  {
    path: 'quick-search',
    loadComponent: () => import('./quick-search/quick-search.page').then( m => m.QuickSearchPage)
  }
];
