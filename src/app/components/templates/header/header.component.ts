import { Component, OnInit } from '@angular/core';
import { HeaderModel } from './header-data.model';
import { HeaderService } from './header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService ) {}

  ngOnInit(): void {

  }

  get headerModel() :HeaderModel {
    return this.headerService.header;
  }


}
