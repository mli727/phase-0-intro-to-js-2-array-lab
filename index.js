const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.splice(-1)
}

function destructivelyRemoveFirstCat() {
    return cats.splice(0,1);
}

function appendCat(name) {
    const catsCopy = [...cats,name]
    return catsCopy;
}

function prependCat(name) {
    const catsCopy = [name,...cats]
    return catsCopy
}

function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(1)
}