import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbIconModule, NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateUserComponent } from './update-user/update-user.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    UpdateUserComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({name: 'cosmic'}),
        ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),
        NbLayoutModule,
        NbEvaIconsModule,
        ReactiveFormsModule,
        NbIconModule,
        HttpClientModule,
        NbButtonModule,
        MatDialogModule,
        NgbModule,




    ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
