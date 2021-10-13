import React from 'react'
import Svg from '../../Svg/Svg'
import { SvgProps } from '../../Svg/types'

interface LogoProps extends SvgProps {
  isDark: boolean
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? '#FFFFFF' : '#000000'
  return (
    <Svg viewBox="0 0 205 50" {...props}>
      <image
        width="205"
        height="50"
        href={isDark ? '/images/logo/LogoTextNewDark.png' : '/images/logo/LogoTextNewWhite.png'}
      />
    </Svg>
  )
}

export default Logo
