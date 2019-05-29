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

  form = this.fb.group({
    training: this.fb.group({
      training_name: ['', Validators.required],
    }),
    trainers: this.fb.group({
      trainer_name: ['', Validators.required],
    })
  });

    constructor(private fb: FormBuilder, private httpService: HttpService,
      private router: Router) { }

  ngOnInit() {
    }

  onSubmit() {
      console.log(JSON.stringify(this.form.value));
      this.convertResponseToPost(this.form.value);
    }

    convertResponseToPost(formValue) {
      const finalResponse = {
        "training":this.form.controls['training'].value.training_name,
       "trainers":this.form.controls['trainers'].value.trainer_name
      };

      this.makeApiCall(finalResponse);
  }

  makeApiCall(trainingdetails) {
    this.httpService.createTraining(trainingdetails).subscribe(a => {
      console.log(a);
      if (a.status === 200) {
        this.router.navigate(['success']);
      } else {
        alert("Some Error Occured. Please Try Again!");
      }
    });
  }
}
