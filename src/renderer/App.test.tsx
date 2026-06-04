import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { App } from './App';

describe('App', () => {
    it('renders the starter headline and commands', () => {
        const markup = renderToStaticMarkup(<App />);

        expect(markup).toContain('Desktop app starter');
        expect(markup).toContain('npm run dev');
        expect(markup).toContain('npm run coverage');
        expect(markup).toContain('Start building');
    });
});
