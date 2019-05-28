import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = this.fb.group({
    question_1: this.fb.group({
      question:["How would you rate the quality of the training with regards to its contents?"],
      question_type:["rating"],
      quality: ['', Validators.required],
      quality_comment: [''],
      value: ['', Validators.required],
      value_comment: [''],
      relevance: ['', Validators.required],
      relevance_comment: [''],
      logic: ['', Validators.required],
      logic_comment: ['']
    }),
    question_2: this.fb.group({
      question_type:["rating"],
      presentation: ['', Validators.required],
      presentation_comment: [''],
      understanding: ['', Validators.required],
      understanding_comment: [''],
      expertise: ['', Validators.required],
      expertise_comment: [''],
      interaction: ['', Validators.required],
      interaction_comment: ['']
    }),
    question_3: this.fb.group({
      question_type:['yes or No'],
      expectations: ['', Validators.required],
      expectations_comment: [''],
    }),
    question_4: this.fb.group({
      question_type:[''],
      valuable_comment: ['', Validators.required],
    }),
    question_5: this.fb.group({
      question_type:[''],
      missing_comment: ['', Validators.required],
    }),
    question_6: this.fb.group({
      question_type:[''],
      duration_comment: ['', Validators.required],
    }),
    question_7: this.fb.group({
      question_type:[''],
      product_comment: ['', Validators.required],
    }),
    question_8: this.fb.group({
      question_type:['rating'],
      recommendation: ['', Validators.required],
      recommendation_comment: [''],
      organization: ['', Validators.required],
      organization_comment: [''],
      applicability: ['', Validators.required],
      applicability_comment: [''],
      experience: ['', Validators.required],
      experience_comment: ['']
    }),
    question_9: this.fb.group({
      question_type:[''],
      satisfaction_comment: ['', Validators.required],
    })
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(JSON.stringify(this.form.value));
    // (this.form.value)
  }
}
