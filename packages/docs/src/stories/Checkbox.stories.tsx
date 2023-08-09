

import {StoryObj, Meta} from '@storybook/react'
import {Checkbox, CheckboxProps, Box, Text} from '@ds-flow/react'
import React from 'react'

export default {    
    title: 'Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {},
    decorators: [
       (Story) => {
        return (
                <Box css={{display: 'flex', flexDirection: 'row', gap: '$2'}}>
                       {Story()}
                    <Text>Accept terms of use</Text>  
                </Box>
            )
       }
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
}

