// Register `moviesList` component, along with its associated controller and template

angular.
  module('moviesList').
  component('moviesList', {
    templateUrl: 'movies-list/movies-list.template.html',
    controller: function MoviesListController() {
      this.movies = [
        {
          name: 'Atypical season 2',
          media: 'Netflix'
        }, {
          name: 'El autor',
          media: 'Netflix'
        }, {
          name: 'Kobra Kai',
          media: 'YouTube Premium'
        }
      ];
    }
  });
