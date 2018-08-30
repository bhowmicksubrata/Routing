import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  // basic routes
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "contactus", redirectTo: "contact" }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, AboutComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  providers: [
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
    //{ provide: APP_BASE_HREF, useValue: "/" }
  ]
})
export class AppModule {}
