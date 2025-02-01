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
		variant: 'primary'
	}
}

export const Second: Story = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary'
	}
}