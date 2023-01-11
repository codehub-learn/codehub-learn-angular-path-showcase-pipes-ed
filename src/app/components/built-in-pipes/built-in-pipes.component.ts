import { Component, OnInit } from '@angular/core';
import {Data} from "@angular/router";
import {PipesService} from "../../services/pipes.service";

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  exampleDate: Date = new Date();

  exampleObject: Object = {
    name: "Ioannis",
    surname: "Daniil",
    nationality: "Greek",
    addresses: ["addr 1", "addr 2"]
  };

  dateAmount!: any;

  constructor(private pipes: PipesService) { }

  ngOnInit(): void {
    this.dateAmount = this.pipes.getDateAmount();
  }
}
