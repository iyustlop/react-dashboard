import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BasicTable from "./Table";

describe("Table", () => {
  it("renders the order rows with their statuses", () => {
    render(<BasicTable />);

    expect(screen.getByText("Lasagna Chicken Fries")).toBeInTheDocument();
    expect(screen.getByText("Cupcake")).toBeInTheDocument();
    expect(screen.getAllByText("Approved")).toHaveLength(2);
    expect(screen.getAllByRole("button", { name: /details for/i })).toHaveLength(4);
  });

  it("opens an order detail dialog and closes it", async () => {
    const user = userEvent.setup();
    render(<BasicTable />);

    await user.click(screen.getByRole("button", { name: "Details for Cupcake" }));
    const dialog = screen.getByRole("dialog", { name: "Order details" });
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent("18908427");

    await user.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });
});
