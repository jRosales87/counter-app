import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Prueba 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un héroe por ID ', () => { 
        const id = 1;
        const hero = getHeroeById( id );
        

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

     });

    test('getHeroeById debe de retornar undefind si no existe el ID ', () => { 
        const id = 100;
        const hero = getHeroeById( id );
        

        expect( hero ).toBeFalsy();

     });
    test('getHeroeByOwner debe de retornar un arreglo con los heroes de DC ', () => { 
       
        const owner = 'DC';
        const heros = getHeroesByOwner(owner);
        
        
        expect( heros.length ).toBe(3);

     });
    test('getHeroeByOwner debe de retornar un arreglo con los heroes de Marvel ', () => { 
       
        const owner = 'Marvel';
        const heros = getHeroesByOwner(owner);
        
        
        expect( heros.length ).toBe(2);

     });

 })