export class LocalStorageMock {
  storedData: { [key: string]: string };

  constructor() {
    this.storedData = {};
  }

  setItem(key: string, value: string) {
    console.log(`Setting ${key} to ${value}`);
    this.storedData[key] = value;
  }

  getItem(key: string) {
    console.log(`Getting ${key}`);
    return this.storedData[key];
  }
}

