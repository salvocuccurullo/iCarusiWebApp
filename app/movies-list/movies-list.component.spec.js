
describe('moviesList', function() {

	// Load the module that contains the `phoneList` component before each test
	beforeEach(module('moviesList'));

	// Test the controller
	describe('MoviesListController', function() {
		
		var $httpBackend, ctrl;
		
		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service and assign it to a variable with the same name
		// as the service while avoiding a name conflict.
		
		beforeEach(inject(function($componentController, _$httpBackend_){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('http://localhost:8888/getTvShows').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
			ctrl = $componentController("moviesList");
		}));

		it('should create a `movies` model with 47 movies', inject(function($componentController) {
			var ctrl = $componentController('moviesList');
			//expect(ctrl.movies).toBeUndefined();
			//$httpBackend.flush();
			//expect(ctrl.movies.length).toBe(47);
			expect(ctrl.movies).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
		}));
	
	/*
		it('should set a default value for the `orderProp` model', function() {
			expect(ctrl.orderProp).toBe('title');
		});
	*/

	});

});

