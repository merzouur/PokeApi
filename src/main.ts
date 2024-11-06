import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // <-- Import des routes
import { provideHttpClient } from '@angular/common/http'; // <-- Import de provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()  // <-- Ajout de HttpClient ici
  ]
});