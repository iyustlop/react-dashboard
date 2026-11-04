import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BasicTable from "./Table";

describe("Table", () => {
  it("renders the order rows with their statuses", () => {
    render(<BasicTable />);

    expect(screen.getByText("Lasania Chiken Fri")).toBeInTheDocument();
    expect(screen.getByText("Cupcake")).toBeInTheDocument();
    expect(screen.getAllByText("Approved")).toHaveLength(2);
    expect(screen.getAllByRole("button", { name: /detail of/i })).toHaveLength(4);
  });
});
