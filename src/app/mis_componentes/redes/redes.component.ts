import { Boton } from './../profile/boton';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileData } from '../profile/profile-data';


@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent implements OnInit {
  @Input() netButtons: Boton[];
  @Output() onClickButton = new EventEmitter<Boton>();
  constructor() { }

  ngOnInit() {
  }

  clickButton(boton: Boton) {
    this.onClickButton.emit(boton);
  }
}
