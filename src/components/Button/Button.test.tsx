import { fireEvent, render, screen } from "@testing-library/react"

import { Button } from "./Button"

describe("Button component", () => {
	it("renders Button", () => {
		render(<Button />)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("renders Button with Test text", () => {
		render(
			<Button variant={"filled"} width={"sm"}>
				Test
			</Button>,
		)
		screen.debug()
		expect(screen.getByRole("button", { name: "Test" })).toBeInTheDocument()
	})

	it("Handles `onClick` event", () => {
		const onClick = jest.fn()
		render(<Button onClick={onClick}>Click me</Button>)

		const button = screen.getByRole("button")
		fireEvent.click(button)

		expect(onClick).toHaveBeenCalled()
	})
})
