/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { CrewPage } from "./CrewPage";
import { useDataFetch } from "hooks/useDataFetch";

jest.mock("hooks/useDataFetch", () => ({
  useDataFetch: jest.fn(),
}));

describe("CrewPage component", () => {
  it("should render loading state initially", () => {
    (useDataFetch as jest.Mock).mockReturnValue({
      crew: [],
    });

    render(<CrewPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should render crew information correctly when data is available", async () => {
    const mockCrew = [
      {
        name: "Douglas Hurley",
        role: "Commander",
        bio: "Commander bio",
        images: {
          webp: "/assets/crew/image-douglas-hurley.webp",
        },
      },
      {
        name: "Mark Shuttleworth",
        role: "Mission Specialist",
        bio: "Mission Specialist bio",
        images: {
          webp: "/assets/crew/image-mark-shuttleworth.webp",
        },
      },
      {
        name: "Victor Glover",
        role: "Pilot",
        bio: "Pilot bio",
        images: {
          webp: "/assets/crew/image-victor-glover.webp",
        },
      },
      {
        name: "Anousheh Ansari",
        role: "Flight Engineer",
        bio: "Flight Engineer bio",
        images: {
          webp: "/assets/crew/image-anousheh-ansari.webp",
        },
      },
    ];

    (useDataFetch as jest.Mock).mockReturnValue({
      crew: mockCrew,
    });

    render(<CrewPage />);

    await waitFor(() => {
      const personRank = screen.getAllByText(/Commander/i)[0];
      expect(personRank).toBeInTheDocument();

      const personName = screen.getByText(/Douglas Hurley/i);
      expect(personName).toBeInTheDocument();

      const personBio = screen.getByText(/Commander bio/i);
      expect(personBio).toBeInTheDocument();

      const img = screen.getByAltText(/crew/i);
      expect(img).toHaveAttribute("src", mockCrew[0].images.webp);
    });
  });

  it("should change crew member when a dot is clicked", async () => {
    const mockCrew = [
      {
        name: "Douglas Hurley",
        role: "Commander",
        bio: "Commander bio",
        images: {
          webp: "/assets/crew/image-douglas-hurley.webp",
        },
      },
      {
        name: "Mark Shuttleworth",
        role: "Mission Specialist",
        bio: "Mission Specialist bio",
        images: {
          webp: "/assets/crew/image-mark-shuttleworth.webp",
        },
      },
      {
        name: "Victor Glover",
        role: "Pilot",
        bio: "Pilot bio",
        images: {
          webp: "/assets/crew/image-victor-glover.webp",
        },
      },
      {
        name: "Anousheh Ansari",
        role: "Flight Engineer",
        bio: "Flight Engineer bio",
        images: {
          webp: "/assets/crew/image-anousheh-ansari.webp",
        },
      },
    ];

    (useDataFetch as jest.Mock).mockReturnValue({
      crew: mockCrew,
    });

    render(<CrewPage />);

    await waitFor(async () => {
      expect(await screen.findByText(/Douglas Hurley/i)).toBeInTheDocument();
      expect(await screen.findByText(/Commander/i)).toBeInTheDocument();
    });

    const dots = screen.getAllByRole("button");
    fireEvent.click(dots[1]);

    await waitFor(async () => {
      expect(await screen.findByText(/Mark Shuttleworth/i)).toBeInTheDocument();
      expect(await screen.findByText(/Mission Specialist/i)).toBeInTheDocument();
    });
  });
});
