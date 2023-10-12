import React, { type DetailedHTMLProps, type HTMLAttributes } from 'react'

export default function Icon (props: IconProps): JSX.Element {
  const prefixes = ['round', 'filled', 'outlined', 'sharp']
  let icon = props.children as string
  let pi = -1
  prefixes.forEach((v, i) => {
    if (icon.indexOf(v + '_') === 0) pi = i
  })
  if (pi === -1) {
    pi = 0
  } else {
    icon = icon.substring(prefixes[pi].length + 1)
  }
  let className = 'material-icons-' + prefixes[pi]
  if (props.className) className += ' ' + props.className
  return (
    <span
      slot={props.slot}
      style={{ fontSize: props.size, color: props.color, margin: props.margin, userSelect: 'none', transition: 'all 0.3s ease-in-out' }}
      className={className}
      onClick={props.onClick}
      onMouseDown={e => { e.stopPropagation() }}
    >
      {icon}
    </span>
  )
}

export interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: string
  color?: string
  margin?: string
  className?: string
}
