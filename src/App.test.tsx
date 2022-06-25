import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import App from "./App";

afterEach(cleanup);

test("App展示内容", () => {
  const { getByText } = render(<App />);
  const container = getByText("hello");
  console.log(container);

  // expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument()
});
