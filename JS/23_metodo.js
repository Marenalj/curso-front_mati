let flight = {
    airoline: 'Oceanic',
    number: '815',
    departure: {
        claveIATA: 'SYD',
        time: '2004-09-22 14:55',
       /*  place: {
            ciudad: 'Sydney',
            país: 'Australia'
        } */
        ciudad: 'Sydney',
    },
    arrival: {
        claveIATA: 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Los Ángeles',
    }
}

    flight.mostrar = function (obj = this) {
            for (const key in obj) {
            const element = obj[key];
            if (typeof element !='object') {
                console.log(`La propiedad ${key} vale ${element}`)
            }
            else {
                console.log(`La propiedad ${key} vale ${element}`)
                obj.mostrar(element)
            }
       }
    }
    
    flight.mostrar ()

