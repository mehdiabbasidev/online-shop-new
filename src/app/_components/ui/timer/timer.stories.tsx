import { Meta, StoryObj } from '@storybook/nextjs'
import { CountdownTimer } from './timer'

const meta: Meta<typeof CountdownTimer> = {
    component: CountdownTimer,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CountdownTimer>

export const Variants: Story = {
    render: () => (
        <>
            <CountdownTimer targetDate="2025-02-30T00:00:00" />
        </>
    ),
}
