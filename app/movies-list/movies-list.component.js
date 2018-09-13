// Register `moviesList` component, along with its associated controller and template

angular.
  module('moviesList').
  component('moviesList', {
    templateUrl: 'movies-list/movies-list.template.html',
    controller: function MoviesListController() {
      this.movies = [
        {
          name: 'Kobra Kai',
          media: 'YouTube Premium'
        },
        {
          name: 'Atypical season 2',
          media: 'Netflix'
        }, 
        {
          name: 'Mozart in the Jungle',
          media: 'Amazon Video'
        },
        {
          name: 'El Autor',
          media: 'Netflix'
        }
      ];
      this.orderProp = 'name';
    }
  });
