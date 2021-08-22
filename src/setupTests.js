// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure, prettyDOM } from '@testing-library/dom';

configure({
    getElementError: (message, container) => {
        const customMessage = [
            message,
            prettyDOM(container, null, {
                filterNode: node => node.id !== 'injected-stuff'
            })
        ].join('\n\n');

        return new Error(customMessage);
    }
});
