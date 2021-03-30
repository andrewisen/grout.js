import { Grout } from '../../src';
import { Metadata, metadata } from '../../src/metadata/metadata';
/**
 * Metadata
 */
describe('Metadata', () => {
    const groutFile = new Grout();
    const project: string = 'FSE123';
    const tunnel: string = '456N';
    const pegNo: string = '987654';
    const screenNo: string = '1';

    const xmlString: string = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
        <InjectionLogg>
            <Project>${project}</Project>
            <Tunnel>${tunnel}</Tunnel>
            <PegNo>${pegNo}</PegNo>
            <ScreenNo>${screenNo}</ScreenNo>
        </InjectionLogg>
    `;
    const document: Document = groutFile.parse(xmlString);
    groutFile.setDocument(document);
    groutFile.setMetadata();
    test('Project', () => {
        expect(groutFile.getMetadata('Project')).toBe(project);
    });
    test('Tunnel', () => {
        expect(groutFile.getMetadata('Tunnel')).toBe(tunnel);
    });
    test('Peg number', () => {
        expect(groutFile.getMetadata('PegNo')).toBe(pegNo);
    });
    test('Screen number', () => {
        expect(groutFile.getMetadata('ScreenNo')).toBe(screenNo);
    });
    test('Undefined', () => {
        expect(groutFile.getMetadata('lorem ipsum')).toBeUndefined();
    });
});
