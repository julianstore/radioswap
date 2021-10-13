import { Colors } from './types'

export const baseColors = {
  failure: '#ED4B9E',
  primary: '#D94E41',
  primaryBright: '#D94E41',
  primaryDark: '#1d3557',
  secondary: '#8C342B',
  success: '#9B9694',
  warning: '#FFB237',
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: '#fffdf7',
  backgroundDisabled: '#dde6da',
  contrast: '#f7e9dc',
  invertedContrast: '#f1faee',
  input: '#eeeaf4',
  tertiary: '#EFF4F5',
  text: '#221922',
  textDisabled: '#a4a9ab',
  textSubtle: '#221922',
  borderColor: '#8C342B',
  card: '#f7e9dc',
  backgroundAlt: '#f7e9dc',
  cardBorder: '#E7E3EB',
  dropdown: '#F6F6F6',
  dropdownDeep: '#EEEEEE',
  inputSecondary: '#d7caec',
  disabled: '#E9EAEB',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
    cardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
    blue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
    violet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
    violetAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#221922',
  background: '#fffdf7',
  backgroundDisabled: '#E9EAEB',
  contrast: '#191326',
  invertedContrast: '#191326',
  input: '#eeeaf4',
  primaryDark: '#F2DA91',
  tertiary: '#f7e9dc',
  text: '#221922',
  textDisabled: '#BDC2C4',
  textSubtle: '#221922',
  borderColor: '#524B63',
  card: '#F2DA91',
  backgroundAlt: '#8c342b',
  cardBorder: '#383241',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  inputSecondary: '#262130',
  disabled: '#524B63',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
    cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
    blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
    violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
    violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  },
}
