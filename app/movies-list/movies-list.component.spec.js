
describe('moviesList', function() {

	// Load the module that contains the `phoneList` component before each test
	beforeEach(module('moviesList'));

	// Test the controller
	describe('MoviesListController', function() {
		
		var ctrl;
		
		beforeEach(inject(function($componentController){
			ctrl = $componentController("moviesList");
		}));

		it('should create a `movies` model with 4 movies', inject(function($componentController) {
			var ctrl = $componentController('moviesList');
			expect(ctrl.movies.length).toBe(4);
		}));
	
		it('should set a default value for the `orderProp` model', function() {
			expect(ctrl.orderProp).toBe('name');
		});


});

});

