import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders every section and marks the first one as active", () => {
    render(<Sidebar />);

    expect(screen.getByRole("button", { name: /dashboard/i })).toHaveClass("active");
    expect(screen.getByRole("button", { name: /orders/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /analytics/i })).toBeInTheDocument();
  });

  it("moves the active state when another section is clicked", async () => {
    const user = userEvent.setup();
    render(<Sidebar />);

    const orders = screen.getByRole("button", { name: /orders/i });
    await user.click(orders);

    expect(orders).toHaveClass("active");
    expect(screen.getByRole("button", { name: /dashboard/i })).not.toHaveClass("active");
  });
});
