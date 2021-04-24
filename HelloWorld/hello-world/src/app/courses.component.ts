
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    //'courses' allows <courses>
    //'.courses' allows <div class="courses">
    //'#courses' allows <div id="courses">
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title: String;
    courses: String[];

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.title = this.courses.length + ' Authors';
    }

}