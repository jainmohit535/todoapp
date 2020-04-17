import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("addition of temp and temp2 to expect 3", () => {
  let temp = 1;
  let temp2 = 2;
  let temp3 = temp + temp2;
  expect(temp3).toBe(3);
});
