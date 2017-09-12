import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// # Routes
import { APP_ROUTING } from './app.routes';
// # Services
import { SpotifyService } from './services/spotify.service';
// # Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
// # Pipes
import { NofotoPipe } from './pipes/nofoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        NavbarComponent,
        ArtistComponent,
        NofotoPipe,
        DomseguroPipe

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTING
    ],
    providers: [
        SpotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
