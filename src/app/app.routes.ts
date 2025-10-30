import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./components/buttons/buttons.page').then(m => m.ButtonsPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./components/cards/cards.page').then(m => m.CardsPage)
  },
  {
    path: 'checkboxes',
    loadComponent: () => import('./components/checkboxes/checkboxes.page').then(m => m.CheckboxesPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./components/datetime/datetime.page').then(m => m.DatetimePage)
  },
  {
    path: 'inputs',
    loadComponent: () => import('./components/inputs/inputs.page').then(m => m.InputsPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./components/list/list.page').then(m => m.ListPage)
  },
  {
    path: 'loading',
    loadComponent: () => import('./components/loading/loading.page').then(m => m.LoadingPage)
  },
  {
    path: 'modals',
    loadComponent: () => import('./components/modals/modals.page').then(m => m.ModalsPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./components/popover/popover.page').then(m => m.PopoverPage)
  },
  {
    path: 'radio',
    loadComponent: () => import('./components/radio/radio.page').then(m => m.RadioPage)
  },
  {
    path: 'range',
    loadComponent: () => import('./components/range/range.page').then(m => m.RangePage)
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./components/searchbar/searchbar.page').then(m => m.SearchbarPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./components/segment/segment.page').then(m => m.SegmentPage)
  },
  {
    path: 'select',
    loadComponent: () => import('./components/select/select.page').then(m => m.SelectPage)
  },
  {
    path: 'slides',
    loadComponent: () => import('./components/slides/slides.page').then(m => m.SlidesPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./components/tabs/tabs.page').then(m => m.TabsPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./components/toast/toast.page').then(m => m.ToastPage)
  },
  {
    path: 'toggle',
    loadComponent: () => import('./components/toggle/toggle.page').then(m => m.TogglePage)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./components/alerts/alerts.page').then(m => m.AlertsPage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./components/fab/fab.page').then(m => m.FabPage)
  }
];