import { Meta, StoryObj } from '@storybook/nextjs'
import SmallBanner from './small-banner'



const meta: Meta<typeof SmallBanner> = {
    component: SmallBanner,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SmallBanner>

export const Variants: Story = {
    render: () => (
        <>
            <SmallBanner />
        </>
    ),
}
