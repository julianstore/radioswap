import React from 'react'
import Svg from '../../Svg/Svg'
import { SvgProps } from '../../Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z"
        fill="#1E2026"
      />
      <path
        d="M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z"
        fill="#F0B90B"
      />
      <path
        d="M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z"
        fill="#F0B90B"
      />
      <path d="M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z" fill="#F0B90B" />
      <path
        d="M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z"
        fill="#F0B90B"
      />
      <path
        d="M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z"
        fill="#F0B90B"
      />
      <path
        d="M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z"
        fill="#F0B90B"
      />
      <path d="M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z" fill="#F0B90B" />
      <path d="M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z" fill="#F0B90B" />
      <path
        d="M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z"
        fill="#F0B90B"
      />
      <path d="M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z" fill="#F0B90B" />
    </Svg>
  )
}

export default Icon
