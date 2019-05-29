import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  feedBackList = []
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getList().subscribe(response => {
      console.log(response);
      this.feedBackList = response as []
    })

  }

}
