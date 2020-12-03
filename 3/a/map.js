module.exports = class Map {
    constructor(dataArray) {
        this.height = dataArray.length;
        this.area = []; // y

        dataArray.forEach((horizontalArea, firstIndex) => {
            this.width = horizontalArea.length;
            this.area[firstIndex] = []; // x

            horizontalArea.split('').forEach((segment, secondIndex) => {
                this.area[firstIndex][secondIndex] = new Segment(firstIndex, secondIndex, segment);
            })
        })
    }

    checkSegement(x, y) {
        return this.area[y % this.height][x % this.width].tree;
    }
}

class Segment {
    constructor(x, y, notation) {
        this.x = x;
        this.y = y;
        this.tree = notation == "#" ? true : false;
    }

    get coordinates() {
        return [this.x, this.y];        
    }
}