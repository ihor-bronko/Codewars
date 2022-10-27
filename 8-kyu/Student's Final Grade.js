// Student's Final Grade

function finalGrade (exam, projects) {
	return exam > 90 || projects > 10 ? 100
		: exam > 75 && projects > 4 ? 90
			: exam > 50 && projects > 1 ? 75
				: 0
}


