/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from "@testing-library/react";
import { useDataFetch } from "../../hooks/useDataFetch";
import { DestinationPage } from "./DestinationPage";

jest.mock("../../hooks/useDataFetch", () => ({
  useDataFetch: jest.fn(),
}));

describe("DestinationPage component", () => {
  it("should render correctly", async () => {
    (useDataFetch as jest.Mock).mockReturnValue({
      destination: [],
      crew: [],
      technology: [],
    });

    render(<DestinationPage />);

    await waitFor(() => {
      expect(screen.getByTestId("destination-page")).toBeInTheDocument();
      expect(screen.getByTestId("distance")).toBeInTheDocument();
      expect(screen.getByTestId("time")).toBeInTheDocument();
    });
  });

  it("should render planet information correctly", async () => {
    (useDataFetch as jest.Mock).mockReturnValue({
      destination: [
        {
          name: "Moon",
          images: {
            png: "/assets/destination/image-moon.png",
            webp: "/assets/destination/image-moon.webp",
          },
          description: "The Moon is Earth's only natural satellite.",
          distance: "384,400 km",
          travel: "3 days",
        },
      ],
      crew: [],
      technology: [],
    });

    render(<DestinationPage />);

    await waitFor(() => {
      const planetName = screen.getByText(/Moon/i);
      expect(planetName).toBeInTheDocument();
    });
  });

  it("should render loading state initially", () => {
    (useDataFetch as jest.Mock).mockReturnValue({
      destination: [],
      crew: [],
      technology: [],
    });

    render(<DestinationPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
