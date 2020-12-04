module.exports = class {
    constructor(fields) {
        this.fields = [];
        this.fields.birthYear = fields.byr;
        this.fields.issueYear = fields.iyr;
        this.fields.expirationYear = fields.eyr;
        this.fields.height = fields.hgt
        this.fields.hairColor = fields.hcl;
        this.fields.eyeColor = fields.ecl;
        this.fields.passportID = fields.pid;
        this.fields.countryID = fields.cid;
    }

    get isValid() {
        for (const field in this.fields) {
            if (this.fields[field] == undefined) return false;
        }

        return true;
    }

    get isHackerValid() {
        for (const field in this.fields) {
            if (field == "countryID") continue;
            if (this.fields[field] == undefined) return false;
        }
        return true;
    }
}