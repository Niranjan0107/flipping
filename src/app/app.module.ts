import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqsComponent } from './faqs/faqs.component';
import { SellComponent } from './sell/sell.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { WhyComponent } from './why/why.component';
import { BuyComponent } from './buy/buy.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    AppComponent,
    FaqsComponent,
    SellComponent,
    HomepageComponent,
    WhyComponent,
    BuyComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule // Add NgbModule to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
