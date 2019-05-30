import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createtraining',
  templateUrl: './createtraining.component.html',
  styleUrls: ['./createtraining.component.css']
})
export class CreatetrainingComponent implements OnInit {

  trainingList = [];
  trainerList = [];

  form = this.fb.group({
    training: this.fb.group({
      training_name: ['', Validators.required],
    }),
    trainers: this.fb.group({
      trainer_name: ['', Validators.required],
    }),
    location: this.fb.group({
      location_name: ['', Validators.required],
    }),
    sel_training_date: this.fb.group({
      training_date: ['', Validators.required],
    })  
  });

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private router: Router) { }

    ngOnInit() {
      this.httpService.getTrainingNameList().subscribe(response => {
        console.log(response);
        this.trainingList = response as [];
      });
      this.httpService.getTrainerNameList().subscribe(response => {
        console.log(response);
        this.trainerList = response as [];
      });
    }

  onSubmit() {
    console.log(JSON.stringify(this.form.value));
    this.convertResponseToPost(this.form.value);
  }

  convertResponseToPost(formValue) {
    const finalResponse = {
      "training": this.form.controls['training'].value.training_name,
      "trainers": this.form.controls['trainers'].value.trainer_name,
      "location": this.form.controls['location'].value.location_name,
      "training_date": this.form.controls['sel_training_date'].value.training_date
    };

    this.makeApiCall(finalResponse);
  }

  makeApiCall(trainingdetails) {
    this.httpService.createTraining(trainingdetails).subscribe(a => {
      if (a.status === 200) {
        this.router.navigate(['success']);
      } else {
        alert("Some Error Occured. Please Try Again!");
      }
    });
  }
}
