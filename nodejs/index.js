#!/usr/bin/env node
const scanf = require('scanf');

var msg = [];
console.log('Please input First Message');
var fm = scanf('%s');
if (fm == null) {
	console.log('First Message MUST be filled. Ending script');
	return;
}

console.log('Please input Ticket Number Without "#"');
var tx = scanf('%s');
if (tx == null) {
	console.log('Ticket Number MUST be filled. Ending script');
	return;
}

console.log('Type?');
var tt = scanf('%s');
if (tt == null) {
	console.log('Type MUST be filled. Ending script');
	return;
}

console.log('How much time do you spent (format: XhXm)?');
var ts = scanf('%s');
if (ts == null) {
	console.log('Time Worked MUST be filled. Ending script');
	return;
}

console.log('Please input Second Message (if is empty, will be used first one)');
var sm = scanf('%s');

if (sm == null) {
	var sm = fm;
}

var msg = [fm, tx, tt, ts, sm].join(' ');
console.log("git commit -a -m "+msg);
