import { render, screen } from "@testing-library/react";
import { PageTitle } from "./PageTitle";

describe("PageTitle", () => {
  it("should render PageTitle", () => {
    render(<PageTitle number="01" title="Test" />);

    const pageTitle = screen.getByTestId("page-title");

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(pageTitle).toMatchSnapshot();
  });
});
