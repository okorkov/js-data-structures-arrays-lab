// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  let result = drivers.slice();
  result.push(name);
  return result;
}

function prependDriver(name) {
  let result = drivers.slice();
  result.unshift(name);
  return result;
}

function removeLastDriver() {
  let result = drivers.slice();
  result.pop();
  return result;
}

function removeFirstDriver() {
  let result = drivers.slice();
  result.shift();
  return result;
}