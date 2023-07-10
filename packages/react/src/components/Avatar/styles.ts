import * as Avatar from '@radix-ui/react-avatar' 
import { styled } from "../../styles";

export const AvatarContainer = styled(Avatar.Root, {
    borderRadius: '$full',
    display: 'inline-block',
    width: '$12',
    height: '$12',
    overflow: 'hidden',
  })
  

export const AvatarImage = styled(Avatar.Image, {
    display: 'flex',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$gray100',
    color: '$gray800',

    svg: {
        width: '$6',
        hei: '$6'
    }

})