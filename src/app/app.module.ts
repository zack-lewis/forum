import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostlistComponent } from './post/postlist/postlist.component';
import { HeadCreateComponent } from './head-create/head-create.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    HeadCreateComponent,
    PostCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [provideAnimationsAsync('noop')],
  bootstrap: [AppComponent],
})
export class AppModule {}
