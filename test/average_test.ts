import { assert, assertEquals } from "@std/assert";
import { Average } from "../src/average.ts";
import { FakeNumbers } from "./fake_numbers.ts";

Deno.test("mean of some numbers (Fake)", async () => {
  // Arrange
  const path = "/path/to/some/other/file";
  const fake = new FakeNumbers(path);
  fake.addFile(path, [1, 2, 3, 4, 5]);
  const average = new Average(fake);

  // Act
  const result = await average.computeMeanOfFile();

  // Assert
  assertEquals(result, 3);
});