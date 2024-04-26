import { render } from "@testing-library/react";

import WelcomePage from "../WelcomePage";

jest.mock("../types/URLSearchParams.type", () => ({
  URLSearchParams: jest.fn(),
}));

describe("WelcomePage component", () => {
  it('should not show the "Update required" screen because app version is up-to-date', () => {
    const mockQueryParams = {
      get: jest
        .fn()
        .mockReturnValueOnce("MockAppName")
        .mockReturnValueOnce("1.5.1")
        .mockReturnValueOnce("win"),
    };

    const { queryByText } = render(
      <WelcomePage queryParams={mockQueryParams} />
    );

    expect(queryByText("Update required")).toBeNull();
  });

  it('should show the "Update required" screen when app version is outdated', () => {
    const mockQueryParams = {
      get: jest
        .fn()
        .mockReturnValueOnce("MockAppName")
        .mockReturnValueOnce("1.4.0")
        .mockReturnValueOnce("win"),
    };

    const { queryByText } = render(
      <WelcomePage queryParams={mockQueryParams} />
    );

    expect(queryByText("Update required")).toBeTruthy();
  });
});
