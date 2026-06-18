import assert from "node:assert";
import test from "node:test";
import { getCommemorativeDate } from "./common.mjs";

test("calculates second Tuesday of October 2024", () => {
  const date = getCommemorativeDate(2024, "October", "Tuesday", "second");

  assert.equal(date.getFullYear(), 2024);
  assert.equal(date.getMonth(), 9);
  assert.equal(date.getDate(), 8);
});

test("calculates last Friday of October 2024", () => {
  const date = getCommemorativeDate(2024, "October", "Friday", "last");

  assert.equal(date.getFullYear(), 2024);
  assert.equal(date.getMonth(), 9);
  assert.equal(date.getDate(), 25);
});