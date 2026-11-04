import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

vi.mock("@components/DeferredChart/DeferredChart", () => ({
  default: ({ ariaLabel }) => <div role="group" aria-label={ariaLabel} />,
}));

vi.mock("@components/RightSide/RightSide", () => ({
  default: () => null,
}));

describe("App navigation", () => {
  it("shows the selected section and its corresponding content", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole("heading", { name: "Dashboard" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Recent orders" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Orders" }));
    expect(screen.getByRole("heading", { name: "Orders" })).toBeInTheDocument();
    expect(screen.getByText("Lasagna Chicken Fries")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Customers" }));
    expect(screen.getByRole("heading", { name: "Customers" })).toBeInTheDocument();
    expect(screen.getByText("andrew@example.com")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Products" }));
    expect(screen.getByRole("heading", { name: "Products" })).toBeInTheDocument();
    expect(screen.getByText("Samsung Charger")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Analytics" }));
    expect(screen.getByRole("heading", { name: "Analytics" })).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: "Sales trend over the last 24 hours" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Customers" })).not.toHaveAttribute("aria-current");
    expect(screen.getByRole("button", { name: "Analytics" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});
