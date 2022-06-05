function element_count(arr) {
	let count = {};
	for(let i = 0; i < arr.length; i++) {
		if (count[arr[i]] != undefined) {count[arr[i]]++;}
		else {count[arr[i]] = 1;}
	}
	return count;
}

function wordle(word) {
	answer = "sheet";
	answer = answer.split("");
	answer_elements = element_count(answer);
	guess = word.split("");
	result = [];
	for(i = 0; i < answer.length; i++) {
		result[i] = "C";
	}
	// mark A first
	for(i = 0; i < answer.length; i++) {
		if(guess[i] == answer[i]) {
			result[i] = "A"
			answer_elements[guess[i]]--;
		}
	}
	// then mark B
	for(i = 0; i < answer.length; i++) {
		if(letters[i] != answer[i]) {
			if(answer.includes(guess[i]) && answer_elements[guess[i]] > 0) {
				result[i] = "B"
				answer_elements[guess[i]]--;
			}
		} else {
			// others remain C
		}
	}
	console.log(result)
}
