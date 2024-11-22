import { render, screen } from "@testing-library/react";
import Loading from ".";

describe("<Loading />", () => {
  it("should render loading component correctly", () => {
    render(<Loading />);
    expect(screen.getByText("Loading, please wait.")).toBeInTheDocument();
    expect(screen.queryByText("Loading, please wait.")).not.toBeVisible();
  });
});
