
let lottozahlen = [5, 10, 27, 32, 34, 40];


function simulation(lottozahlen) {
    return {
        drawing: lottozahlen,

        simulate: function () {
            let tipps = [];
            let counter = 0;
            while (this.drawing.toString() !== tipps.toString()) {
                for (let i = 0; i < 6; i++) {
                    let dummy = Math.floor((Math.random() * 45) + 1);
                    while(tipps.includes(dummy)) {
                        dummy = Math.floor((Math.random() * 45) + 1);
                    }
                    tipps[i] = dummy;
                }
                tipps = tipps.sort(function (a, b) {
                    return a - b
                });

                counter++;
        }
        return counter;
    }
}
}

let lotto = simulation(lottozahlen);
module.exports = lotto;