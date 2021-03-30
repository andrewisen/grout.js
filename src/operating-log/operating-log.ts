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
class OperatingLog {
    // public logId :OperatingLogProperty = { value: "", key: "LogId" };
    public logTime: OperatingLogProperty = { value: '', key: 'LogTime' };
    // public Run :OperatingLogProperty = { value: "", key: "Kjoering" };
    public pressure: OperatingLogProperty = { value: '', key: 'Trykk' };
    public flow: OperatingLogProperty = { value: '', key: 'Flow' };
    // public HerdFlow :OperatingLogProperty = { value: "", key: "HerdFlow_kg_p_min" };
    public pumpNr: OperatingLogProperty = { value: '', key: 'PumpeNr' };
    public hole: OperatingLogProperty = { value: '', key: 'Hull' };
    public volume: OperatingLogProperty = { value: '', key: 'Volume' };
    // public amountCement :OperatingLogProperty = {
    //     value: "",
    //     key: "AmountCement",
    // };
    // public amountAccelerator :OperatingLogProperty = {
    //     value: "",
    //     key: "AmountAccelerator",
    // };
    constructor() {}
}

export { OperatingLog, OperatingLogProperty };
