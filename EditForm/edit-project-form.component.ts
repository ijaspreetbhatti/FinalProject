import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-project-form',
  templateUrl: './edit-project-form.component.html',
  styles: ['']
})
export class EditProjectFormComponent implements OnInit {

  projectName: string;
  date: string;
  location: string;
  team: string;
  projectData: Object;
  citiesList: any[];
  teamsList: any[];

  abc() {
    this.projectData = { 'projectName': this.projectName, 'Date': this.date, 'Location': this.location, 'Team': this.team };
    alert("Changes Saved!!\n" + JSON.stringify(this.projectData));
  }
  constructor() {
    this.projectName = "XYZ Bank Management";
    this.date = "2019-10-10";
    this.location = "Bangalore";
    this.team = "Team 4";

    this.citiesList = [{ 'city': "Bangalore" }, { 'city': "Delhi" }, { 'city': "Mumbai" }, { 'city': "Pune" }];
    this.teamsList = [{ 'team': "Team 1" }, { 'team': "Team 2" }, { 'team': "Team 3" }, { 'team': "Team 4" }];
  }

  ngOnInit() {
  }

}
