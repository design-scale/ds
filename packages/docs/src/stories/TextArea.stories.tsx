

import {StoryObj, Meta} from '@storybook/react'
import {TextArea, TextAreaProps, Box, Text} from '@ds-flow/react'
import React from 'react'

export default {
    title: 'Form/Text Area',
    component: TextArea,
    tags: ['autodocs'],
    args: {},
    decorators: [
       (Story) => {
        return (
            <Box css={{display: 'flex', flexDirection: 'column', gap: '$2'}} >
                <Text>Observations</Text>
                {Story()}
            </Box>
        )
       }
    ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Type your name'
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
}

export const WithPrefix: StoryObj<TextAreaProps> = {
    args: {
        prefix: 'dialeto.com/'
    }
}

