import { Component } from '@angular/core';

@Component({
    selector: 'my-table',
    templateUrl: 'app/myTable/tableapp.template.html',
})

export class TableAppComponent {
    tableTitle : string = "Books List";
    booksList1: any[] = [];
    booksList: any[] = [
    {
        "id": 1,
        "Name": "Rage Of Angles",
        "Author": "Sidney Sheldon",
        "ISBN": " 978-3-16-148410-0",
        "releaseDate": "March 19, 1970",
        "Publisher" : "Willam Morrow Company",
        "rating": 5,
        "genere" : "fiction"
    },
    {
        "id": 2,
        "Name": "If Tomorrow Comes",
        "Author": "Sidney Sheldon",
        "ISBN": " 978-3-16-148410-1",
        "releaseDate": "March 19, 1984",
        "Publisher" : "Willam Morrow Company",
        "rating": 3.7,
        "genere" : "fiction"
    },
    {
        "id": 3,
        "Name": "The Story of My Experiments with Truth",
        "Author": "Mahatma Gandhi",
        "ISBN": " 978-3-16-158510-0",
        "releaseDate": "March 19, 1940",
        "Publisher" : "Beacon Press",
        "rating": 5,
        "genere" : "Non-fiction"
    },
    ]
}