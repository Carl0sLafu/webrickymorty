import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: 'characterslist',
        component: CharactersComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'character',
        component: CharacterComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }