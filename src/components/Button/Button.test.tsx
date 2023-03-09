import { fireEvent, render, screen } from "@testing-library/react"

import { Button } from "./Button"

describe("Button component", () => {
	it("renders Button", () => {
		render(<Button />)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("renders Button with Test text", () => {
		render(
			<Button variant="filled" width={"sm"}>
				Test
			</Button>,
		)
		screen.debug()
		expect(screen.getByRole("button", { name: "Test" })).toBeInTheDocument()
	})

	it("renders Button with filled variant prop", () => {
		render(<Button variant="filled" width="sm" />)
		expect(screen.getByRole("button")).toHaveAttribute("variant", "filled")
	})

	it("renders Button with outline variant prop", () => {
		render(<Button variant="outline" />)
		expect(screen.getByRole("button")).toHaveAttribute("variant", "outline")
	})

	it("renders Button with sm width prop", () => {
		render(<Button width="sm" />)
		expect(screen.getByRole("button")).toHaveAttribute("width", "sm")
	})

	it("renders Button with lg width prop", () => {
		render(<Button width="lg" />)
		expect(screen.getByRole("button")).toHaveAttribute("width", "lg")
	})

	it("Handles `onClick` event", () => {
		const onClick = jest.fn()
		render(<Button onClick={onClick}>Click me</Button>)

		const button = screen.getByRole("button")
		fireEvent.click(button)

		expect(onClick).toHaveBeenCalled()
	})
})
