import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxEditorModule } from './ngx-editor/ngx-editor.module';
import { SafeHtml } from './ngx-editor/ngx-editor-message/ngx-editor-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtml
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
