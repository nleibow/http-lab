angular.module('TheCriminalsApp', [])
  .controller('CriminalController', CriminalController);


CriminalController.$inject = ['$http'];

function CriminalController($http){
	let self = this;
	self.all = [];
	self.createCriminal = createCriminal;
	self.newCriminal = {};
	self.getCriminals = getCriminals;
	self.deleteCriminal = deleteCriminal;

function getCriminals(){
	$http
		.get('http://localhost:3000/criminals')
		.then(function(response){
        self.all = response.data.criminals
      });
}



getCriminals();

 // this.addCriminal = addCriminal;
  this.newCriminal = {};

  function createCriminal(){
 $http
      .post('http://localhost:3000/criminals', self.newCriminal)
      .then(function(response){
        getCriminals();
      })};
      self.newCriminal = {};
    this.all.push(this.newCriminal);
    this.newCriminal = {};


    function deleteCriminal(criminal){
    	$http
    	.delete('http://localhost:3000/criminals/'+ criminal._id)
    	.then(function(response){
    		let index = self.all.indexOf(criminal);
    		self.all.splice(index, 1);
    	})
    }
}