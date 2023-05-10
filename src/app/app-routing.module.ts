import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SellComponent } from './sell/sell.component';
import { WhyComponent } from './why/why.component';
import { BuyComponent } from './buy/buy.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'sell', component: SellComponent },
  { path: 'why', component: WhyComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'testimonials', component: TestimonialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }