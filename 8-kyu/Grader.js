// Grader

function grader(score) {
return score >= 0.6 && score < 0.7 ? 'D'
		: score >= 0.7 && score < 0.8 ? 'C'
			: score >= 0.8 && score < 0.9 ? 'B'
				: score >= 0.9 && score <= 1 ? 'A'
				:  'F'
}


