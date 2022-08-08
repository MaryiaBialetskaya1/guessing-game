class GuessingGame {
    constructor(assumption, min, max) {
        this.assumption = assumption;
        this.min = min;
        this.max = max;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;  
    }
    guess() {
        return this.assumption = Math.round((this.min + this.max) / 2)
    }
    lower() {
        this.max = this.assumption;
    }
    greater() {
        this.min = this.assumption;
    }
}

module.exports = GuessingGame;
