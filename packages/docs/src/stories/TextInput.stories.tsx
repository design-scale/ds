

import {StoryObj, Meta} from '@storybook/react'
import {TextInput, TextInputProps, Box, Text} from '@ds-flow/react'
import React from 'react'

export default {
    title: 'Form/Text Input',
    component: TextInput,
    tags: ['autodocs'],
    args: {},
    decorators: [
       (Story) => {
        return (
            <Box >
                <Text>E-mail address</Text>
                {Story()}
            </Box>
        )
       }
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'dialeto.com/'
    }
}

