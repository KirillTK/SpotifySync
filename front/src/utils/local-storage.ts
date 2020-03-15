class LS implements WindowLocalStorage {
  readonly localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string, toJSON = true): string | object {
    const item = this.localStorage.getItem(key) || '';
    return item && toJSON ? JSON.parse(item) : item;
  }

  set(key: string, value: object) {
    const newValue = JSON.stringify(value);
    this.localStorage.setItem(key, newValue);
  }

  remove(key: string) {
    this.localStorage.removeItem(key);
  }
}

export const localStorage = new LS();
