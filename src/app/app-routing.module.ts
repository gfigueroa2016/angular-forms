import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { NotFoundComponent } from './core/notfound.component';
const routes: Routes = [
    {
        path: '',
        component: CoreComponent
    }, {
        path: '**',
        component: NotFoundComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
