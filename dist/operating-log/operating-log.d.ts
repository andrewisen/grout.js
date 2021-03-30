/**
 * Operating log (Norwegian: Driftslogg)
 *
 *
 * Example:
 *  <Driftslogg>
 *      <LogId>2</LogId>
 *      <LogTime>2021-02-03T07:11:42+01:00</LogTime>
 *      <Kjoering>7</Kjoering>
 *      <Trykk>0</Trykk>
 *      <Flow>0</Flow>
 *      <HerdFlow_kg_p_min>0</HerdFlow_kg_p_min>
 *      <PumpeNr>4</PumpeNr>
 *      <Hull>32</Hull>
 *      <Volume>0</Volume>
 *      <AmountCement>0</AmountCement>
 *      <AmountAccelerator>0</AmountAccelerator>
 *  </Driftslogg>
 */
interface OperatingLogProperty {
    [key: string]: string;
}
declare class OperatingLog {
    logTime: OperatingLogProperty;
    pressure: OperatingLogProperty;
    flow: OperatingLogProperty;
    pumpNr: OperatingLogProperty;
    hole: OperatingLogProperty;
    volume: OperatingLogProperty;
    constructor();
}
export { OperatingLog, OperatingLogProperty };
