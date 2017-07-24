function SolverFibonacci() {
	
	this.solver = (function() {

	//var fibonacci = (function () {
   // 	"use strict";

	    var memo = {};

	    function f(n) {
	        var value;

	        if (memo.hasOwnProperty(n)) {
	            value = memo[n];
	        } else {
	            if (n === 0 || n === 1) {
	                value = n;
	            } else {
	                value = f(n - 1) + f(n - 2);
	            }

	            memo[n] = value;
	        }

	        return value;
	    }

	    return f;
	}());
		
		

}