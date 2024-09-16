/* eslint-disable no-self-assign */
import { render, screen, fireEvent } from "@testing-library/react";
import { TechnologyPage } from "./TechnologyPage";
import { useDataFetch } from "hooks/useDataFetch";

const mockMatchMedia = (matches: boolean) =>
  jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

jest.mock("hooks/useDataFetch", () => ({
  useDataFetch: jest.fn(),
}));

describe("TechnologyPage", () => {
  beforeEach(() => {
    window.matchMedia = mockMatchMedia(false);
  });

  afterEach(() => {
    jest.resetAllMocks();
    window.matchMedia = window.matchMedia;
  });

  it("should render loading state initially", () => {
    (useDataFetch as jest.Mock).mockReturnValue({
      technology: [],
    });
    render(<TechnologyPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should render technology information correctly when data is available", () => {
    (useDataFetch as jest.Mock).mockReturnValue({
      technology: [
        {
          name: "Launch Vehicle",
          description: "Vehicle description",
          images: {
            landscape: "/path/to/landscape.jpg",
            portrait: "/path/to/portrait.jpg",
          },
        },
        {
          name: "Space Capsule",
          description: "Capsule description",
          images: {
            landscape: "/path/to/landscape2.jpg",
            portrait: "/path/to/portrait2.jpg",
          },
        },
        {
          name: "Spaceport",
          description: "Spaceport description",
          images: {
            landscape: "/path/to/landscape3.jpg",
            portrait: "/path/to/portrait3.jpg",
          },
        },
      ],
    });

    render(<TechnologyPage />);

    expect(screen.getByText("THE TERMINOLOGY…")).toBeInTheDocument();
    expect(screen.getByText("Launch Vehicle")).toBeInTheDocument();
    expect(screen.getByText("Vehicle description")).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole("button")[1]);

    expect(screen.getByText("Space Capsule")).toBeInTheDocument();
    expect(screen.getByText("Capsule description")).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole("button")[2]);

    expect(screen.getByText("Spaceport")).toBeInTheDocument();
    expect(screen.getByText("Spaceport description")).toBeInTheDocument();
  });
});
