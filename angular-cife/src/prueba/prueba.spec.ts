import { factorial } from './prueba';
// fixed describe
fdescribe('Aprendiendo Jasmine', () => {

    it('should be 1 if n=1', () => {
        const n = 1;
        expect(factorial(n)).toEqual(1);
    });

    it('should be 0 if n=0', () => {
        const n = 0;
        expect(factorial(n)).toEqual(0);

    });

    it('should be 120 if n=5', () =>{
        const n = 5;
        expect(factorial(n)).toEqual(120);

    });

    it('should throw error if n=-5', () => {
        const n = -5;
        expect(factorial(n)).toThrowError('No existe el factorial de un número negativo');

    });
});