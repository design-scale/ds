import {styled} from './styles'

import {colors} from '@ds-flow/tokens'

export const Button = styled('button', {

    fontFamily: '$default',
    backgroundColor: '$ignite300',
    color: 'White',
    padding: '$2 $6',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '100px',


    variants: {
        size: {
            small: {
                fontSize: 14,
                padding: '$2 $6'
            },
            big: {
                fontSize: 18,
                padding: '$4 $8'
            }
        }
    },

    defaultVariant: {
        size: 'small'
    }
})