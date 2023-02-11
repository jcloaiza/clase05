import { Route } from "@angular/router";
import { LayoutHomeComponent } from "./modulos/layaout/layout-home/layout-home.component";
import { LayoutLoginComponent } from "./modulos/layaout/layout-login/layout-login.component";

export const appRutas: Route[] = [
    {
        path: '',
        component: LayoutLoginComponent,
        children: [
            { path: '', loadChildren: () => import('src/app/modulos/auth/auth.module').then(m => m.AuthModule) }
        ]
    },
    {
        path: '',
        component: LayoutHomeComponent,
        children: [
            {
                path: '', loadChildren: () => import('src/app/modulos/maestros/maestros.module')
                    .then(m => m.MaestrosModule)
            },
            {
                path: 'consultas', loadChildren: () => import('src/app/modulos/consultas/consultas.module')
                    .then(m => m.ConsultasModule)
            }
        ]
    },
];