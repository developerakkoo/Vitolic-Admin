import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxEditorModule } from 'ngx-editor';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{NgxChartsModule} from '@swimlane/ngx-charts'
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ShareComponent } from './common/share/share.component';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxEditorModule } from 'ngx-editor';
// import{RichTextEditorModule} from '@syncfusion/ej2-angular-richtexteditor'
// import { QuillModule } from 'ngx-quill'
@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, ShareComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    NgChartsModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
  
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
