import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'
import { ButtonProps, ButtonThemeVariant, variants } from './types'

type ThemedProps = {
  theme: DefaultTheme
} & ButtonProps

const getDisabledStyles = ({ isLoading, theme }: ThemedProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `
}

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== 'button') {
    return `
      pointer-events: none;
    `
  }

  return ''
}

const getButtonVariantProp =
  (prop: keyof ButtonThemeVariant) =>
  ({ theme, variant = variants.PRIMARY }: ThemedProps) => {
    // return theme.button[variant][prop]
    return ''
  }

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ variant }) => (variant === 'text' ? 'transparent' : ' rgb(217, 78, 65)')};
  border: ${({ variant }) => (variant === 'text' ? '0px' : ' 0px')};
  border-radius: 16px;
  box-shadow: ${({ variant }) => (variant === 'text' ? 'none' : ' rgb(14 14 44 / 40%) 0px -1px 0px inset;')};
  color: ${({ variant }) => (variant === 'text' ? 'black' : 'white')};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  /* max-content instead of auto for Safari fix */
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
  height: ${({ size }) => (size === 'sm' ? '32px' : '48px')};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === 'sm' ? '0 16px' : '0 24px')};
  transition: background-color 0.2s;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: ${({ variant }) => (variant === 'text' ? 'rgb(239, 244, 245)' : ' rgb(217, 78, 65)')};
    border-color: currentcolor;
  }
  &:focus:not(:active) {
    box-shadow: ${({ variant }) =>
      variant === 'text' ? 'rgb(140 52 43) 0px 0px 0px 2px ' : ' rgb(140 52 43) 0px 0px 0px 2px'};
  }
  &:active {
    background-color: ${({ variant }) => (variant === 'text' ? 'transparent ' : ' rgb(29, 53, 87)')};
    box-shadow: ${({ variant }) =>
      variant === 'text' ? 'rgb(14 14 44 / 40%) 0px -1px 0px inset ' : ' rgb(29, 53, 87)'};
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`

StyledButton.defaultProps = {
  fullWidth: false,
  type: 'button',
}

export default StyledButton
