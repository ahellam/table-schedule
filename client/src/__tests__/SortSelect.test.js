import { render, screen } from "@testing-library/react";
import SortSelect from "../components/SortSelect";

describe("SortSelect", () => {
  it("should render Sort by:", () => {
    render(<SortSelect />);
    const labelElement = screen.getByText(/sort by:/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("should display the correct number of options", () => {
    render(<SortSelect />);
    const optionElements = screen.getAllByRole("option");
    expect(optionElements.length).toBe(2);
  });

  it("should correctly set default option", () => {
    render(<SortSelect />);
    const optionElement = screen.getByRole("option", { name: "First Name" });
    expect(optionElement.selected).toBe(true);
  });

  it("should correctly set option based off first_name props", () => {
    render(<SortSelect firstOrLast={"first_name"} />);
    const optionElement = screen.getByRole("option", { name: "First Name" });
    expect(optionElement.selected).toBe(true);
  });

  it("should correctly set option based off last_name props", () => {
    render(<SortSelect firstOrLast={"last_name"} />);
    const optionElement = screen.getByRole("option", { name: "Last Name" });
    expect(optionElement.selected).toBe(true);
  });

  it("should correctly set option value based off first_name props", () => {
    render(<SortSelect firstOrLast={"first_name"} />);
    const optionElement = screen.getByRole("option", { name: "First Name" });
    expect(optionElement.value).toBe("first_name");
  });

  it("should correctly set option value based off last_name props", () => {
    render(<SortSelect firstOrLast={"last_name"} />);
    const optionElement = screen.getByRole("option", { name: "Last Name" });
    expect(optionElement.value).toBe("last_name");
  });
});
