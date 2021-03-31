import { Metadata, metadata } from '../metadata/metadata';
import {
    OperatingLog,
    OperatingLogProperty,
} from '../operating-log/operating-log';
class Grout {
    private document: Document;
    private metadata: Metadata;
    private operatingLogKey: string;
    private operatingLogs: OperatingLog[] = [];
    constructor(operatingLogKey = 'Driftslogg') {
        this.operatingLogKey = operatingLogKey;
        this.metadata = metadata;
    }
    init(xmlString: string) {
        const document: Document = this.parse(xmlString);
        this.setDocument(document);
        this.setMetadata();
        const operatingLogs: OperatingLog[] = this.getOperatingLogs();
        return operatingLogs;
    }
    /**
     * Parse the file as XML
     *
     * @param xmlString XML String
     * @returns Document
     */
    parse(xmlString: string): Document {
        const parser: DOMParser = new DOMParser();
        return parser.parseFromString(xmlString, 'text/xml');
    }
    /**
     * Set parsed XML document
     */
    setDocument(document: Document): void {
        this.document = document;
    }
    /**
     * Set Metadata
     */
    setMetadata(): void {
        Object.keys(this.metadata).forEach(tagName => {
            Object.assign(this.metadata, {
                [tagName]: this.getNodeByTagName(this.document, tagName),
            });
        });
    }
    /**
     * Get child node by tag name
     */
    getNodeByTagName(document: Document, tagName: string): string {
        return document.getElementsByTagName(tagName)[0].firstChild.textContent;
    }
    /**
     * Get metadata
     */
    getMetadata(key: string): string {
        // @ts-ignore
        return this.metadata[key];
    }
    /**
     * Get all operating logs (Norwegian: Driftslogg)
     */
    getOperatingLogs(): OperatingLog[] {
        Array.from(
            this.document.getElementsByTagName(this.operatingLogKey)
        ).forEach((element: Element) => {
            const operatingLog = this.getOperatingLog(element);
            this.operatingLogs.push(operatingLog);
        });
        return this.operatingLogs;
    }
    /**
     * Get a single operating log
     */
    getOperatingLog(element: Element): OperatingLog {
        const operatingLog = new OperatingLog();
        Object.values(operatingLog).forEach(
            (property: OperatingLogProperty) => {
                this.getProperty(element, property);
            }
        );
        return operatingLog;
    }
    /**
     * Get a specific property (e.g. logTime, pressure, flow, etc.)
     */
    getProperty(element: Element, property: OperatingLogProperty) {
        const { value, key } = property;
        Object.assign(property, {
            value: this.getPropertyValue(element, key),
        });
    }
    /**
     * Get the property value by accessing the first child
     */
    getPropertyValue(element: Element, tagName: string): string {
        return element.getElementsByTagName(tagName)[0].firstChild.textContent;
    }
}

export { Grout };
