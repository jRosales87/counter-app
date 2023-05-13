import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => { 
    
    test('getSaludo debe de retornar "Hola Juan"', () => { 
        const name = 'Juan';
        const msg = getSaludo( name );

        expect( msg ).toBe(`Hola ${name}`);
     })

 })