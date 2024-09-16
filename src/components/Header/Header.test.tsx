/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { ReactNode } from "react";

describe("Header component", () => {
  const renderWithRouter = (ui: ReactNode) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it("should render logo and buttons", () => {
    renderWithRouter(<Header />);

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();

    const homeButton = screen.getByText(/home/i);
    const destinationButton = screen.getByText(/destination/i);
    const crewButton = screen.getByText(/crew/i);
    const technologyButton = screen.getByText(/technology/i);

    expect(homeButton).toBeInTheDocument();
    expect(destinationButton).toBeInTheDocument();
    expect(crewButton).toBeInTheDocument();
    expect(technologyButton).toBeInTheDocument();
  });

  it("should navigate when clicking on logo", () => {
    renderWithRouter(<Header />);
    const logo = screen.getByAltText("logo");

    fireEvent.click(logo);

    expect(window.location.pathname).toBe("/");
  });

  it("should apply active class based on current path", () => {
    window.history.pushState({}, "Destination", "/destination");
    renderWithRouter(<Header />);

    const destinationButton = screen.getByText(/destination/i);
    expect(destinationButton).toHaveClass("button__active");
  });

  it("should navigate when clicking buttons", () => {
    renderWithRouter(<Header />);

    const homeButton = screen.getByText(/home/i);
    fireEvent.click(homeButton);
    expect(window.location.pathname).toBe("/");

    const crewButton = screen.getByText(/crew/i);
    fireEvent.click(crewButton);
    expect(window.location.pathname).toBe("/crew");

    const destinationButton = screen.getByText(/destination/i);
    fireEvent.click(destinationButton);
    expect(window.location.pathname).toBe("/destination");
  });
});
