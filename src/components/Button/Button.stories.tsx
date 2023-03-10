import { Meta, Story } from "@storybook/react"

import { Button } from "./Button"

export default {
	title: "Button",
	component: Button,
	argTypes: {
		children: {
			defaultValue: "Some text",
			name: "text inside button",
			type: {
				name: "string",
			},
		},
		variant: {
			options: ["filled", "outline"],
			control: { type: "radio" },
			type: {
				name: "string",
			},
		},
	},
} as Meta

const Template: Story = (args) => <Button {...args} />

export const BasicButton = Template.bind({})
