import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Ruta predeterminada que redirige a 'ini-se'
  { path: '', 
    redirectTo: 'ini-se', 
    pathMatch: 'full' },

  {
    path: 'ini-se-auto',
    loadChildren: () => import('./ini-se-auto/ini-se-auto.module').then(m => m.IniSeAutoPageModule)
  },
  {
    path: 'ini-se',
    loadChildren: () => import('./ini-se/ini-se.module').then(m => m.IniSePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'verifi-inden',
    loadChildren: () => import('./verifi-inden/verifi-inden.module').then(m => m.VerifiIndenPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then(m => m.ConfigPageModule)
  },
  {
    path: 'crear-camp',
    loadChildren: () => import('./crear-camp/crear-camp.module').then(m => m.CrearCampPageModule)
  },
  {
    path: 'camp-config',
    loadChildren: () => import('./camp-config/camp-config.module').then(m => m.CampConfigPageModule)
  },
  {
    path: 'camp-onl',
    loadChildren: () => import('./camp-onl/camp-onl.module').then(m => m.CampOnlPageModule)
  },
  {
    path: 'veri-confirm',
    loadChildren: () => import('./veri-confirm/veri-confirm.module').then(m => m.VeriConfirmPageModule)
  },
  {
    path: 'edit-camp',
    loadChildren: () => import('./edit-camp/edit-camp.module').then(m => m.EditCampPageModule)
  },
  {
    path: 'part-onl',
    loadChildren: () => import('./part-onl/part-onl.module').then(m => m.PartOnlPageModule)
  },
  {
    path: 'part-onl-ju',
    loadChildren: () => import('./part-onl-ju/part-onl-ju.module').then(m => m.PartOnlJuPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then(m => m.HistorialPageModule)
  },
  {
    path: 'cre-person',
    loadChildren: () => import('./cre-person/cre-person.module').then(m => m.CrePersonPageModule)
  },
  {
    path: 'personaje',
    loadChildren: () => import('./personaje/personaje.module').then(m => m.PersonajePageModule)
  },
  {
    path: 'regis-person',
    loadChildren: () => import('./regis-person/regis-person.module').then(m => m.RegisPersonPageModule)
  },
  {
    path: 'cam-cont',
    loadChildren: () => import('./cam-cont/cam-cont.module').then(m => m.CamContPageModule)
  },
  {
    path: 'personaje-ha',
    loadChildren: () => import('./personaje-ha/personaje-ha.module').then(m => m.PersonajeHaPageModule)
  },
  {
    path: 'personaje-inve',
    loadChildren: () => import('./personaje-inve/personaje-inve.module').then(m => m.PersonajeInvePageModule)
  },
  {
    path: 'edit-perfil',
    loadChildren: () => import('./edit-perfil/edit-perfil.module').then(m => m.EditPerfilPageModule)
  },
  {
    path: 'register-student',
    loadChildren: () => import('./register-student/register-student.module').then( m => m.RegisterStudentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
