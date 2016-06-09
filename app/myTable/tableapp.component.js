"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TableAppComponent = (function () {
    function TableAppComponent() {
        this.tableTitle = "Books List";
        this.booksList1 = [];
        this.booksList = [
            {
                "id": 1,
                "Name": "Rage Of Angles",
                "Author": "Sidney Sheldon",
                "ISBN": " 978-3-16-148410-0",
                "releaseDate": "March 19, 1970",
                "Publisher": "Willam Morrow Company",
                "rating": 5,
                "genere": "fiction"
            },
            {
                "id": 2,
                "Name": "If Tomorrow Comes",
                "Author": "Sidney Sheldon",
                "ISBN": " 978-3-16-148410-1",
                "releaseDate": "March 19, 1984",
                "Publisher": "Willam Morrow Company",
                "rating": 3.7,
                "genere": "fiction"
            },
            {
                "id": 3,
                "Name": "The Story of My Experiments with Truth",
                "Author": "Mahatma Gandhi",
                "ISBN": " 978-3-16-158510-0",
                "releaseDate": "March 19, 1940",
                "Publisher": "Beacon Press",
                "rating": 5,
                "genere": "Non-fiction"
            },
        ];
    }
    TableAppComponent = __decorate([
        core_1.Component({
            selector: 'my-table',
            templateUrl: 'app/myTable/tableapp.template.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TableAppComponent);
    return TableAppComponent;
}());
exports.TableAppComponent = TableAppComponent;
//# sourceMappingURL=tableapp.component.js.map