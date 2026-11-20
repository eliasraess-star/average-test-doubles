import { Numbers } from "../src/numbers.ts";

export class FakeNumbers implements Numbers {
  private files: Map<string, Array<number>> = new Map();

  constructor(private path: string) {}

  public addFile(path: string, numbers: Array<number>): void {
    this.files.set(path, numbers);
  }

  public readNumbers(): Promise<Array<number>> {
    const numbers = this.files.get(this.path);
    if (numbers === undefined) {
      return Promise.reject(new Error(`file not found: ${this.path}`));
    }
    return Promise.resolve(numbers);
  }
}