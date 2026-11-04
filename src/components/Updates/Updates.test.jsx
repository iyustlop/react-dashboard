import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Updates from "./Updates";

describe("Updates", () => {
  it("renders the recent updates", () => {
    render(<Updates />);

    expect(screen.getByText("Andrew Thomas")).toBeInTheDocument();
    expect(screen.getByText("James Bond")).toBeInTheDocument();
    expect(screen.getByText("Iron Man")).toBeInTheDocument();
  });
});
