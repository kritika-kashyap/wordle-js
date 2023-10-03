const ansi = {
    'grey': '\u001b[0;90m',
    'green': '\u001b[0;92m',
    'yellow': '\u001b[0;93m',
    'reset': '\u001b[0m'
}

export default function colorify(colors){
    let t = '';
    for(let {color, char} of colors) {
        t += ansi[color] + char;
    }
    t += ansi['reset'];
    console.log(t)
}