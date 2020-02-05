import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [

{path: 'header', component: HeaderComponent},
{path: 'index', component: IndexComponent},
{path: '', component: IndexComponent},
{path: 'footer', component: FooterComponent},
{path: 'carousel', component: CarouselComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
