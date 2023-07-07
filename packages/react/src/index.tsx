import {styled} from './styles'

import {colors} from '@ds-flow/tokens'

const Button = styled('button', {
    backgroundColor: '$ignite700',
    color: '$gray200',
    padding: '$2',
})

console.log(colors)

export function App() {
    return(<h1 style={{color: colors.ignite300}}>Hello World</h1>)
}