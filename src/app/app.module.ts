import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleListComponent} from './components/article-list/article-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './components/article/article.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HighlightPipe} from './pipes/highlight.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
