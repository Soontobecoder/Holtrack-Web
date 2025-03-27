export interface RFIDTag {
  orderQuantity: string;
  features: Array<string>;
  tagType: string;
  name: string;
  dimension: string;
  application: Array<string>;
}

export interface Antenna {
  dimension: string;
  weight: number;
  chord: string;
  temperature: string;
  color: string;
  name: string;
  material: string;
}

export interface FixedReader {
  orderQuantity: string;
  features: Array<string>;
  weight: number;
  range: string;
  speed: string;
  RFPower: string;
  RFInterface: string;
  communicationPort: string;
  powerConsumption: string;
  voltage: string;
  material: string;
  name: string;
  dimension: string;
  application: Array<string>;
}

export interface GateWay {
  dimension: string;
  weight: number;
  name: string;
  antenna: string;
  frequency: string;
  RFPower: string;
  speed: string;
  trigger: string;
  notification: string;
  range: string;
  communicationPort: string;
  powerConsumption: string;
  voltage: string;
  material: string;
  temperature: string;
  humidity: string;
}

export interface Handheld {
  dimension: string;
  weight: number;
  range: string;
  display: string;
  OS: string;
  CPU: string;
  storage: string;
  dataCommunication: {
    WWAN: string;
    WLAN: string;
    WPAN: string;
    GPS: string;
  };
}

export interface Printer {
  printMode: string;
  dimension: string;
  weight: number;
  speed: string;
  interface: string;
  maximumPrintWidth: string;
  RFID: Array<{
    spec: string;
  }>;
}

export interface Data {
  id: number;
  assetType:
    | "RFIDTag"
    | "Antenna"
    | "FixedReader"
    | "GateWay"
    | "HandheldReader"
    | "Printer";
  device: Array<RFIDTag | Antenna | FixedReader | GateWay | Handheld | Printer>;
}
