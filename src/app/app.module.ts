import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DetailComponent} from './detail/detail.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {CreateComponent} from './create/create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotFoundComponent} from './not-found/not-found.component';
import {PaginationComponent} from "./home-page/pagination/pagination.component";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {PopUpConfirmationComponent} from "./pop-up-confirmation/pop-up-confirmation.component";

// For MDB Angular Free

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailComponent,
    EditPageComponent,
    CreateComponent,
    NotFoundComponent,
    PaginationComponent,
    HeaderComponent,
    PopUpConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
