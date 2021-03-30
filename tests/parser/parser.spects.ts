import { Grout } from '../../src';
/**
 * XML Parser
 */
describe('XML Parser', () => {
    const groutFile = new Grout();
    const string: string = 'Beware of the tiger';
    const tag: string = 'warning';
    const xmlString: string = `<${tag}>${string}</${tag}>`;

    test('Check text content', () => {
        const textContent: string = groutFile.parse(xmlString).documentElement
            .textContent;
        expect(textContent).toBe(string);
    });
    test('Check tag name', () => {
        const tagName: string = groutFile.parse(xmlString).documentElement
            .tagName;
        expect(tagName).toBe(tag);
    });
    test('Check first child', () => {
        const firstChild: string = groutFile.parse(xmlString).firstChild
            .textContent;
        expect(firstChild).toBe(string);
    });
});
/**
 * XML Parser, UTF-8 encoding
 */
describe('XML Parser, UTF-8', () => {
    const groutFile = new Grout();
    const string: string = "Can you understand this 'Å, Ä, Ö'?";
    const tag: string = 'bold';
    const xmlString: string = `<${tag}>${string}</${tag}>`;

    test('Check scandinavian symbols', () => {
        const textContent: string = groutFile.parse(xmlString).documentElement
            .textContent;
        expect(textContent).toBe(string);
    });
});
