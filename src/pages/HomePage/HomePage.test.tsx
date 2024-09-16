import { fireEvent, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  const renderWithRouter = (ui: ReactNode) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };
  it("should render HomePage", () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
    expect(screen.getByText("SO, YOU WANT TO TRAVEL TO")).toBeInTheDocument();
    expect(screen.getByText("SPACE")).toBeInTheDocument();
    expect(screen.getByTestId("home-page-description")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it('should navigate when clicking on "EXPLORE" button', () => {
    renderWithRouter(<HomePage />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(window.location.pathname).toBe("/destination");
  });
});
