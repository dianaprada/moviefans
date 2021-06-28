import React from 'react';
import MainMenu from  './MainMenu';
import {render, screen} from "@testing-library/react";

beforeEach(() => render(<MainMenu />));
describe('MainMenu', () => {
    it('must render a tittle', () => {
        expect(screen.queryAllByText(/Moviefans/i));
    })
});



