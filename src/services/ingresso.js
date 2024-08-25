

    export function calculartotalingresso(qtding, meiaing, cupom) {
        let tot = 0;
        if(meiaing == true) {
            tot = qtding * 15.00;
        }
        else {
            tot = qtding * 30.00;
        }
        if (cupom == 'QUERO50') {
            let desc = tot * 50 / 100;
            tot = tot - desc;
        }

        return tot;

    }