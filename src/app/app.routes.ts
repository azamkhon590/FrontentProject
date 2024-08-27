import { Routes } from '@angular/router';
import { AddTextComponent } from './component/add-text/add-text.component';
import { TextComponent } from './component/text/text.component';
import { ViewTextComponent } from './component/view-text/view-text.component';

export const routes: Routes = [
    {
        path: 'text',
        component: TextComponent
    },
    {
        path: 'text/add',
        component: AddTextComponent
    },
    {
        path: 'text/:name',
        component: ViewTextComponent
    }
];
