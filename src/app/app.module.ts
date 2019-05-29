import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { ExcelService } from './services/excel.services';
import { CreatetrainingComponent } from './createtraining/createtraining.component';
import { ListTrainingsComponent } from './list-trainings/list-trainings.component';
import { TrainingformComponent } from './trainingform/trainingform.component';

const routes: Routes = [
  { path: '', redirectTo: '/' ,pathMatch:'full'},
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'createtraining', component: CreatetrainingComponent },
  { path: 'traininglist', component: ListTrainingsComponent },
  { path: 'trainingform/:id', component: TrainingformComponent },
  { path: 'success', component: SuccessComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    SuccessComponent,
    CreatetrainingComponent,
    ListTrainingsComponent,
    TrainingformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
