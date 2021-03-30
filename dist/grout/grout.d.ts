import { OperatingLog, OperatingLogProperty } from '../operating-log/operating-log';
declare class Grout {
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
    getMetadata(key: string): string | undefined;
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
export { Grout };
