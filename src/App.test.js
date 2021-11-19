import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    it('Should Render App with Error', () =>{
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});