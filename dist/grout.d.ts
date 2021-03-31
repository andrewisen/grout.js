// Generated by dts-bundle-generator v5.8.0

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
export interface OperatingLogProperty {
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
export declare class Grout {
	private document;
	private metadata;
	private operatingLogKey;
	private operatingLogs;
	constructor(operatingLogKey?: string);
	init(xmlString: string): OperatingLog[];
	/**
	 * Parse the file as XML
	 *
	 * @param xmlString XML String
	 * @returns Document
	 */
	parse(xmlString: string): Document;
	/**
	 * Set parsed XML document
	 */
	setDocument(document: Document): void;
	/**
	 * Set Metadata
	 */
	setMetadata(): void;
	/**
	 * Get child node by tag name
	 */
	getNodeByTagName(document: Document, tagName: string): string;
	/**
	 * Get metadata
	 */
	getMetadata(key: string): string;
	/**
	 * Get all operating logs (Norwegian: Driftslogg)
	 */
	getOperatingLogs(): OperatingLog[];
	/**
	 * Get a single operating log
	 */
	getOperatingLog(element: Element): OperatingLog;
	/**
	 * Get a specific property (e.g. logTime, pressure, flow, etc.)
	 */
	getProperty(element: Element, property: OperatingLogProperty): void;
	/**
	 * Get the property value by accessing the first child
	 */
	getPropertyValue(element: Element, tagName: string): string;
}
export declare const add: (a: number, b: number) => number;

export {};