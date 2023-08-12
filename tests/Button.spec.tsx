import { render, screen } from "@testing-library/react";
import { Button, Text } from "components";

test("Button displays correctly", () => {
	render(
		<Button>
			<Text value="Funky Button" />
		</Button>
	);

	const heading = screen.getByText(/Funky Button/i);

	expect(heading).toBeInTheDocument();
});
