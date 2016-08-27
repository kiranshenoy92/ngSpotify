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
var forms_1 = require('@angular/forms');
var spotify_service_1 = require('../../services/spotify.service');
var SearchComponent = (function () {
    function SearchComponent(searchFormBuilder, _spotifyService) {
        this.searchFormBuilder = searchFormBuilder;
        this._spotifyService = _spotifyService;
        this.searchMusic = new forms_1.FormControl('');
        this.searchForm = searchFormBuilder.group({
            'searchMusic': this.searchMusic
        });
    }
    ;
    SearchComponent.prototype.search = function () {
        var _this = this;
        if (this.searchMusic.value != '') {
            this._spotifyService.searchMusic(this.searchMusic.value)
                .subscribe(function (res) {
                _this.searchResult = res.artists.items;
            });
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: 'search.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, spotify_service_1.SpotifyService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map