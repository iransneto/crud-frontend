import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderModel } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _header :BehaviorSubject<HeaderModel> = new BehaviorSubject<HeaderModel>({
    title: 'Início',
    icon: 'home',
    routerUrl: ''
  });

  constructor() { }

  get header(): HeaderModel {
    return this._header.getValue();
  }

  set header(header: HeaderModel) {
    this._header.next(header);
  }
}
