//NOTE CURRENCY DA MOEDA: 1.IMPORTAR
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { HeaderComponent } from './components/templates/header/header.component';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//NOTE CURRENCY DA MOEDA: 3.IMPORTAR O LOCALE E O REGISTER
import localPt from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

//NOTE CURRENCY DA MOEDA: 4.CHAMAR ESSE MÉTODO COM ESSE ARGUMENTO
registerLocaleData(localPt);

@NgModule({
  declarations: [
    //NOTE AQUI ENTRAM APENAS COMPONENTS, DIRECTIVES E PIPES
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  //NOTE CURRENCY DA MOEDA: 2.ADICIONAR ESSE PROVIDER
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
