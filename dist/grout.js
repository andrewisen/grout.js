(() => {
  // src/metadata/metadata.ts
  var metadata = {Project: "", Tunnel: "", PegNo: "", ScreenNo: ""};

  // src/operating-log/operating-log.ts
  var OperatingLog = class {
    constructor() {
      this.logTime = {value: "", key: "LogTime"};
      this.pressure = {value: "", key: "Trykk"};
      this.flow = {value: "", key: "Flow"};
      this.pumpNr = {value: "", key: "PumpeNr"};
      this.hole = {value: "", key: "Hull"};
      this.volume = {value: "", key: "Volume"};
    }
  };

  // src/grout/grout.ts
  var Grout = class {
    constructor(operatingLogKey = "Driftslogg") {
      this.operatingLogs = [];
      this.operatingLogKey = operatingLogKey;
      this.metadata = metadata;
    }
    init(xmlString) {
      const document = this.parse(xmlString);
      this.setDocument(document);
      this.setMetadata();
      const operatingLogs = this.getOperatingLogs();
      return operatingLogs;
    }
    parse(xmlString) {
      const parser = new DOMParser();
      return parser.parseFromString(xmlString, "text/xml");
    }
    setDocument(document) {
      this.document = document;
    }
    setMetadata() {
      Object.keys(this.metadata).forEach((tagName) => {
        Object.assign(this.metadata, {
          [tagName]: this.getNodeByTagName(this.document, tagName)
        });
      });
    }
    getNodeByTagName(document, tagName) {
      return document.getElementsByTagName(tagName)[0].firstChild.textContent;
    }
    getMetadata(key) {
      return this.metadata[key];
    }
    getOperatingLogs() {
      Array.from(this.document.getElementsByTagName(this.operatingLogKey)).forEach((element) => {
        const operatingLog = this.getOperatingLog(element);
        this.operatingLogs.push(operatingLog);
      });
      return this.operatingLogs;
    }
    getOperatingLog(element) {
      const operatingLog = new OperatingLog();
      Object.values(operatingLog).forEach((property) => {
        this.getProperty(element, property);
      });
      return operatingLog;
    }
    getProperty(element, property) {
      const {value, key} = property;
      Object.assign(property, {
        value: this.getPropertyValue(element, key)
      });
    }
    getPropertyValue(element, tagName) {
      return element.getElementsByTagName(tagName)[0].firstChild.textContent;
    }
  };

  // src/index.ts
  var add = (a, b) => a + b;
})();
