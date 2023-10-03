import Words from "./words.js";
import { input, close } from "./input.js";
import colorify from "./output.js";

function getTarget() {
	return Words[Math.floor(Math.random() * Words.length)];
}

function compare(word, target = "") {
	let result = [];
	let targetArr = target.split("");
	for (let i = 0; i < 5; i++) {
		if (targetArr[i] == word[i]) {
			targetArr[i] = "_";
			result[i] = ({ color: "green", char: word[i] });
		}
	}
	for (let i = 0; i < 5; i++) {
        if(result[i]) continue;
		if (targetArr.includes(word[i])) {
			targetArr[i] = "_";
			result[i] = ({ color: "yellow", char: word[i] });
		} else {
			result[i] = ({ color: "grey", char: word[i] });
		}
	}
	return result;
}

const validate = (word) => Words.includes(word);

async function main() {
	let target = getTarget();
	let i = 1;
	while (i <= 6) {
		let word = await input();
		if (validate(word)) {
			i++;
			let colors = compare(word, target);
			colorify(colors);
			if (word == target) {
				console.log("You won!");
				return;
			}
			console.log("Try again!");
		} else {
			console.log("Enter a valid word");
		}
	}
	console.log("The word was :", target);
	console.log("Skill issue🐸!");
}

await main();
close();
