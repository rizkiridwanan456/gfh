import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'penduduk',
    loadChildren: () => import('./penduduk/penduduk.module').then( m => m.PendudukPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'iuran',
    loadChildren: () => import('./iuran/iuran.module').then( m => m.IuranPageModule)
  },
  {
    path: 'blok',
    loadChildren: () => import('./blok/blok.module').then( m => m.BlokPageModule)
  },
  {
    path: 'pesan',
    loadChildren: () => import('./pesan/pesan.module').then( m => m.PesanPageModule)
  },

  {
    path: 'e-penduduk',
    loadChildren: () => import('./e-penduduk/e-penduduk.module').then( m => m.EPendudukPageModule)
  },
  {
    path: 'e-info',
    loadChildren: () => import('./e-info/e-info.module').then( m => m.EInfoPageModule)
  },
  {
    path: 't-info',
    loadChildren: () => import('./t-info/t-info.module').then( m => m.TInfoPageModule)
  },
  {
    path: 'e-info',
    loadChildren: () => import('./e-info/e-info.module').then( m => m.EInfoPageModule)
  },
  {
    path: 't-info',
    loadChildren: () => import('./t-info/t-info.module').then( m => m.TInfoPageModule)
  },
  {
    path: 'e-iuran',
    loadChildren: () => import('./e-iuran/e-iuran.module').then( m => m.EIuranPageModule)
  },
  {
    path: 't-iuran',
    loadChildren: () => import('./t-iuran/t-iuran.module').then( m => m.TIuranPageModule)
  },
  {
    path: 't-penduduk',
    loadChildren: () => import('./t-penduduk/t-penduduk.module').then( m => m.TPendudukPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'e-pesan',
    loadChildren: () => import('./e-pesan/e-pesan.module').then( m => m.EPesanPageModule)
  },
  {
    path: 'e-blok',
    loadChildren: () => import('./e-blok/e-blok.module').then( m => m.EBlokPageModule)
  },
  {
    path: 't-user',
    loadChildren: () => import('./t-user/t-user.module').then( m => m.TUserPageModule)
  },
  {
    path: 't-blok',
    loadChildren: () => import('./t-blok/t-blok.module').then( m => m.TBlokPageModule)
  },
  {
    path: 't-pesan',
    loadChildren: () => import('./t-pesan/t-pesan.module').then( m => m.TPesanPageModule)
  },
  {
    path: 'suratkeluar',
    loadChildren: () => import('./suratkeluar/suratkeluar.module').then( m => m.SuratkeluarPageModule)
  },
  {
    path: 'e-suratkeluar',
    loadChildren: () => import('./e-suratkeluar/e-suratkeluar.module').then( m => m.ESuratkeluarPageModule)
  },
  {
    path: 't-suratkeluar',
    loadChildren: () => import('./t-suratkeluar/t-suratkeluar.module').then( m => m.TSuratkeluarPageModule)
  },
  {
    path: 'keluaran',
    loadChildren: () => import('./keluaran/keluaran.module').then( m => m.KeluaranPageModule)
  },
  {
    path: 'e-keluaran',
    loadChildren: () => import('./e-keluaran/e-keluaran.module').then( m => m.EKeluaranPageModule)
  },
  {
    path: 't-keluaran',
    loadChildren: () => import('./t-keluaran/t-keluaran.module').then( m => m.TKeluaranPageModule)
  },
  {
    path: 'uangkeluar',
    loadChildren: () => import('./uangkeluar/uangkeluar.module').then( m => m.UangkeluarPageModule)
  },
  {
    path: 'e-uangkeluar',
    loadChildren: () => import('./e-uangkeluar/e-uangkeluar.module').then( m => m.EUangkeluarPageModule)
  },
  {
    path: 't-uangkeluar',
    loadChildren: () => import('./t-uangkeluar/t-uangkeluar.module').then( m => m.TUangkeluarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
