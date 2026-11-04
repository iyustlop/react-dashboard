import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CardsData } from "@data/data";
import Card from "./Card";

vi.mock("@components/DeferredChart/DeferredChart", () => ({
  default: () => <div aria-label="Sales chart" />,
}));

describe("Card", () => {
  it("opens an accessible detail dialog and restores focus on Escape", async () => {
    const user = userEvent.setup();
    const card = CardsData[0];
    render(<Card {...card} />);

    const trigger = screen.getByRole("button", { name: "Ver detalle de Sales" });
    await user.click(trigger);

    const dialog = screen.getByRole("dialog", { name: "Sales" });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ver detalle de Sales" })).toHaveFocus();
  });
});
