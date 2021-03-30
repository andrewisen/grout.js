import { Grout } from '../../src';
import { OperatingLog } from '../../src/operating-log/operating-log';
/**
 * Operating Logs
 */
describe('Operating Logs', () => {
    const groutFile = new Grout();
    /**
     * N.B. Variables names are in Norwegian
     */
    const logId: string = '2';
    const logTime: string = '2021-02-03T07:11:42+01:00';
    const kjoering: string = '7';
    const trykk: string = '0';
    const flow: string = '0';
    const herdFlow_kg_p_min: string = '0';
    const pumpeNr: string = '4';
    const hull: string = '32';
    const volume: string = '0';
    const amountCement: string = '0';
    const amountAccelrator: string = '0';

    const xmlString: string = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
    <InjectionLogg>
        <Driftslogg>
            <LogId>${logId}</LogId>
            <LogTime>${logTime}</LogTime>
            <Kjoering>${kjoering}</Kjoering>
            <Trykk>${trykk}</Trykk>
            <Flow>${flow}</Flow>
            <HerdFlow_kg_p_min>${herdFlow_kg_p_min}</HerdFlow_kg_p_min>
            <PumpeNr>${pumpeNr}</PumpeNr>
            <Hull>${hull}</Hull>
            <Volume>${volume}</Volume>
            <AmountCement>${amountCement}</AmountCement>
            <AmountAccelerator>${amountAccelrator}</AmountAccelerator>
        </Driftslogg>
    </InjectionLogg>
    `;
    const document: Document = groutFile.parse(xmlString);
    groutFile.setDocument(document);
    const operatingLogs: OperatingLog[] = groutFile.getOperatingLogs();
    const operatingLog: OperatingLog = operatingLogs[0];

    test('Log time', () => {
        expect(operatingLog['logTime'].value).toBe(logTime);
    });
    test('Pressure', () => {
        expect(operatingLog['pressure'].value).toBe(trykk);
    });
    test('Flow', () => {
        expect(operatingLog['flow'].value).toBe(flow);
    });
    test('Pump number', () => {
        expect(operatingLog['pumpNr'].value).toBe(pumpeNr);
    });
    test('Hole', () => {
        expect(operatingLog['hole'].value).toBe(hull);
    });
});
