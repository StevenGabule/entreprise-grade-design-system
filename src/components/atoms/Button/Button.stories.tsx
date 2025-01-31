import {Meta, StoryObj} from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
	component: Button
}
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Primary Button',
		primary: true
	}
}

export const Second: Story = {
	args: {
		children: 'Secondary Button',
		primary: true
	}
}