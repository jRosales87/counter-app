import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Prueba de CounterApp', () => { 
    const value = 1;
    test('Debe de hacer match con el snapshot', () => { 
        const { container } =  render( <CounterApp value={value} /> );
        expect( container ).toMatchSnapshot();
     });
     test('Debe de inicializarse en 1', () => { 
        render( 
            <CounterApp value={value}/> 
        );
        // screen.debug()
        expect( screen.getByText(value) ).toBeTruthy();
      })
      test('Debe de incrementar con el botón +1', () => { 
            render( 
                <CounterApp value={value}/> 
            );
            fireEvent.click( screen.getByText('+1') );
            expect( screen.getByText('2') ).toBeTruthy();
       });
      test('Debe de disminuir con el botón -1', () => { 
            render( <CounterApp value={value}/> );
            fireEvent.click( screen.getByText('-1') );
            expect( screen.getByText('0') ).toBeTruthy();
       });
       test('Debe de funcionar el botón de reset', () => { 

            render( <CounterApp value={value}/> );
            fireEvent.click( screen.getByText('+1') );
            fireEvent.click( screen.getByText('+1') );
            fireEvent.click( screen.getByText('+1') );
            fireEvent.click( screen.getByText('Reset') );
            expect( screen.getByText(value) ).toBeTruthy();
        });
 })