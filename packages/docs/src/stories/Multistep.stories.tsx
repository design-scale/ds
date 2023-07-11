import React from 'react'
import {StoryObj, Meta} from '@storybook/react'
import {Box, Text, MultiStep, MultiStepProps} from '@ds-flow/react'



export default {
    title: 'Form/Multi Step',
    component: MultiStep,
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => {
            return(
                <Box>
                    <Text size='sm'>Email address</Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<MultiStepProps>


export const Primary: StoryObj<MultiStepProps>  = {
    args: {}
}