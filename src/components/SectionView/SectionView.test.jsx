import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

vi.mock("apexcharts/line", () => ({}));
vi.mock("react-apexcharts/core", () => ({
  default: ({ height }) => <div data-testid="apex-chart" data-height={String(height)} />,
}));

describe("Analytics view", () => {
  it("stretches the chart across all the available height", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Analytics" }));

    const chart = await screen.findByTestId("apex-chart");
    expect(chart).toHaveAttribute("data-height", "100%");

    const panel = document.querySelector(".analyticsPanel");
    const chartContainer = document.querySelector(".analyticsPanel .DeferredChart");
    expect(panel).toBeInTheDocument();
    expect(chartContainer).toBeInTheDocument();

    // El panel crece dentro de MainDash y el gráfico crece dentro del panel,
    // de modo que el fondo claro cubre siempre el canvas completo.
    expect(getComputedStyle(panel).flexGrow).toBe("1");
    expect(getComputedStyle(chartContainer).flexGrow).toBe("1");
  });
});
