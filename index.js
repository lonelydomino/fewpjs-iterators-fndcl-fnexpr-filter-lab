// Code your solution here

function findMatching(drivers, string) {
    let matching = drivers.filter( n => {
        return n.toLowerCase() == string.toLowerCase();
    })
    return matching
}


function fuzzyMatch(drivers, string) {
    let matching = drivers.filter( n => {
        return n.indexOf(string) === 0
    })
    return matching
}

function matchName(drivers, string){
    let matching = drivers.filter( n => {
        return n.name == string;
    })
    return matching
}