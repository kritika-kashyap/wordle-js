import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
const rl = readline.createInterface({ input: stdin, output: stdout });

export async function input(){
    let input = await rl.question('Enter a five letter word: ');
    return input;
}

export const close = () => rl.close()