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
            if (field == "countryID") return true;
            if (!this.validation(field, this.fields[field])) return false;
        }

        return true;
    }

    validation(key, value) {
        if (value == undefined) return false;
        switch(key) {
            case "birthYear":
                let birthYear = parseInt(value);
                if (birthYear >= 1920 && birthYear <= 2002) return true;
                return false;
            case "issueYear":
                let issueYear = parseInt(value);
                if (issueYear >= 2010 && issueYear <= 2020) return true;
                return false;
            case "expirationYear":
                let expirationYear = parseInt(value);
                if (expirationYear >= 2020 && expirationYear <= 2030) return true;
                return false;
            case "height":
                let height = parseInt(value.match(/(\d{2,3})/)[0]);

                let metric;
                if (value.includes("cm")) metric = true;
                else if (value.includes("in")) metric = false;
                else return false;

                if (metric) {
                    if (height >= 150 && height <= 193) return true;
                } else {
                    if (height >= 59 && height <= 76) return true;
                }

                return false;
            case "hairColor":
                return /#[\da-f]{6}/.test(value);
            case "eyeColor":
                let validEyes = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
                for (const property in validEyes) {
                    if (value == validEyes[property]) return true;
                }
                return false;
            case "passportID":
                return (/\d{9}/.test(value) && value.length == 9);
            case "countryID":
                return true;
        }
    }
}