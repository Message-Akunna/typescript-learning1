// Import stylesheets
import './style.css';
import { Point } from './point';

// Write TypeScript code!
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let endsWithCAlt = (message as string).endsWith('c');

let doLog = (message) => console.log(message);



let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();


const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `${endsWithC}`;