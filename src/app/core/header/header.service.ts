import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModelHeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<ModelHeaderData>({
    title: 'Início',
    icon: 'home',
    routerUrl: ''
  })

  constructor() { }

  get headerData(): ModelHeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: ModelHeaderData) {
    this._headerData.next(headerData)
  }

}
