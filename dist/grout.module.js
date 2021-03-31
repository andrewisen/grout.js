var metadata = { Project: '', Tunnel: '', PegNo: '', ScreenNo: '' };

var OperatingLog = /** @class */ (function () {
    // public amountCement :OperatingLogProperty = {
    //     value: "",
    //     key: "AmountCement",
    // };
    // public amountAccelerator :OperatingLogProperty = {
    //     value: "",
    //     key: "AmountAccelerator",
    // };
    function OperatingLog() {
        // public logId :OperatingLogProperty = { value: "", key: "LogId" };
        this.logTime = { value: '', key: 'LogTime' };
        // public Run :OperatingLogProperty = { value: "", key: "Kjoering" };
        this.pressure = { value: '', key: 'Trykk' };
        this.flow = { value: '', key: 'Flow' };
        // public HerdFlow :OperatingLogProperty = { value: "", key: "HerdFlow_kg_p_min" };
        this.pumpNr = { value: '', key: 'PumpeNr' };
        this.hole = { value: '', key: 'Hull' };
        this.volume = { value: '', key: 'Volume' };
    }
    return OperatingLog;
}());

var Grout = /** @class */ (function () {
    function Grout(operatingLogKey) {
        if (operatingLogKey === void 0) { operatingLogKey = 'Driftslogg'; }
        this.operatingLogs = [];
        this.operatingLogKey = operatingLogKey;
        this.metadata = metadata;
    }
    Grout.prototype.init = function (xmlString) {
        var document = this.parse(xmlString);
        this.setDocument(document);
        this.setMetadata();
        var operatingLogs = this.getOperatingLogs();
        return operatingLogs;
    };
    /**
     * Parse the file as XML
     *
     * @param xmlString XML String
     * @returns Document
     */
    Grout.prototype.parse = function (xmlString) {
        var parser = new DOMParser();
        return parser.parseFromString(xmlString, 'text/xml');
    };
    /**
     * Set parsed XML document
     */
    Grout.prototype.setDocument = function (document) {
        this.document = document;
    };
    /**
     * Set Metadata
     */
    Grout.prototype.setMetadata = function () {
        var _this = this;
        Object.keys(this.metadata).forEach(function (tagName) {
            var _a;
            Object.assign(_this.metadata, (_a = {},
                _a[tagName] = _this.getNodeByTagName(_this.document, tagName),
                _a));
        });
    };
    /**
     * Get child node by tag name
     */
    Grout.prototype.getNodeByTagName = function (document, tagName) {
        return document.getElementsByTagName(tagName)[0].firstChild.textContent;
    };
    /**
     * Get metadata
     */
    Grout.prototype.getMetadata = function (key) {
        // @ts-ignore
        return this.metadata[key];
    };
    /**
     * Get all operating logs (Norwegian: Driftslogg)
     */
    Grout.prototype.getOperatingLogs = function () {
        var _this = this;
        Array.from(this.document.getElementsByTagName(this.operatingLogKey)).forEach(function (element) {
            var operatingLog = _this.getOperatingLog(element);
            _this.operatingLogs.push(operatingLog);
        });
        return this.operatingLogs;
    };
    /**
     * Get a single operating log
     */
    Grout.prototype.getOperatingLog = function (element) {
        var _this = this;
        var operatingLog = new OperatingLog();
        Object.values(operatingLog).forEach(function (property) {
            _this.getProperty(element, property);
        });
        return operatingLog;
    };
    /**
     * Get a specific property (e.g. logTime, pressure, flow, etc.)
     */
    Grout.prototype.getProperty = function (element, property) {
        property.value; var key = property.key;
        Object.assign(property, {
            value: this.getPropertyValue(element, key),
        });
    };
    /**
     * Get the property value by accessing the first child
     */
    Grout.prototype.getPropertyValue = function (element, tagName) {
        return element.getElementsByTagName(tagName)[0].firstChild.textContent;
    };
    return Grout;
}());

var add = function (a, b) { return a + b; };

export { Grout, add };
