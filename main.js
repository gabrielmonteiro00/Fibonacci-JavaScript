(function() {
	var number = document.getElementById("nstop").value;
	var solver = new SolverFibonacci();
	var solution = '';
	var seq = " ";
	
	$(document).on("click", ".find", function() {
		seq = " ";
		number = document.getElementById("nstop").value;
		solution = solver.solver(number);
		$("#result").html(solution);

		for (var i = 1; i < number; i++) {
			seq += solver.solver(i)+" - ";
		}
		seq += solution;
		$("#show_seq").html(seq);

	});

	$("#result").html(solution);
	$("#show_seq").html(solver.solver(i));
}());