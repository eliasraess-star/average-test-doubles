import { Numbers } from "./numbers.ts";
import { mean, median, mode } from "./statistics.ts";

export class Average {
  constructor(private numbers: Numbers) {}

  public async computeMeanOfFile(): Promise<number> {
    const numbers: Array<number> = await this.numbers.readNumbers();
    return mean(numbers);
  }

  public async computeMedianOfFile(): Promise<number> {
    const numbers: Array<number> = await this.numbers.readNumbers();
    return median(numbers);
  }

  public async computeModeOfFile(): Promise<Array<number>> {
    const numbers: Array<number> = await this.numbers.readNumbers();
    return mode(numbers);
  }
}
