import { ComponentProps } from 'react'
import {styled} from '../styles'

export const Button = styled('button', {
    all: 'unset', // Redefine
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight:'$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    padding: '0 $8',

    '&:disabled': {
        cursor: 'not-allowed'
    },

    svg: {
        width: '$4',
        height: '$4'
    },

    variants: {

        variant: {

                primary: {
                    color: 'white',
                    background: '$ignite500',

                    '&:not(:disabled):hover': {
                        background: '$ignite300'
                    },

                    '&:disabled': {
                        backgroundColor: '$gray200',
                    }
                },

                secondary: {
                    color: '$ignite300',
                    border: '2px solid $ignite500',

                    '&:not(:disabled):hover': {
                        color: '$white',
                        background: '$ignite300',
                        borderColor: '$ignite300'
                    },

                    '&:disabled': {
                        color: '$gray200',
                        borderColor: '$gray200',
                    }
                },

                tertiary: {
                    background: '$gray100',

                    '&:not(:disabled):hover': {
                        color: '$gray900'
                    },

                    '&:disabled': {
                        color: '$gray200',

                    }
                }

            },

        size: {
                sm: {
                    height: 38
                }, 
                md: {
                    height: 46
                }
            },
        icon: {
            small: {
                svg: {
                    width: '16px',
                    height: '16px'
                }
            }
        }

    },

    defaultVariants: {
        variant: 'primary',
        size: 'md',
        icon: 'small'

    }


})

export interface ButtonProps extends ComponentProps<typeof Button>{}

