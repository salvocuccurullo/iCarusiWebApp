
describe('moviesList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('moviesList'));

  // Test the controller
  describe('MoviesListController', function() {

    it('should create a `movies` model with 3 movies', inject(function($componentController) {
      var ctrl = $componentController('moviesList');
      expect(ctrl.movies.length).toBe(3);
    }));

  });

});

