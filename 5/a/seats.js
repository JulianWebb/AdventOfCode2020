module.exports = class {
    constructor(boardingPass) {
        this.row = findRow(boardingPass.slice(0, 7));
        this.column = findColumn(boardingPass.slice(7));
    }

    get id() {
        return (this.row * 8) + this.column;
    }

}

function findRow(binary) {
    return binary.split('').reduce((previous, current, index) => previous += current == "B"? Math.pow(2, 6 - index): 0, 0)
}

function findColumn(binary) {
    return binary.split('').reduce((previous, current, index) => previous += current == "R"? Math.pow(2, 2 - index): 0, 0)
}