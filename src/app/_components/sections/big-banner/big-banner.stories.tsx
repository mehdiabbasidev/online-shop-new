import { Meta, StoryObj } from '@storybook/react'
import BigBanner from './big-banner'

const meta: Meta<typeof BigBanner> = {
    component: BigBanner,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BigBanner>

export const Variants: Story = {
    render: () => (
        <>
            <BigBanner />
        </>
    ),
}
