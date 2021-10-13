import React from 'react'
import { Card, CardBody, Heading, Text, LinkExternal } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledContractsCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Contracts: React.FC<ExpandableSectionProps> = ({ bscScanAddress }) => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledContractsCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Radio Contracts')}
        </Heading>
        <Row>
          <StyledLinkExternal href={bscScanAddress}>{t('View Radio Contract')}</StyledLinkExternal>
        </Row>
        <Row>
          <StyledLinkExternal href={bscScanAddress}>{t('View Radio Contract')}</StyledLinkExternal>
        </Row>
        <Row>
          <StyledLinkExternal href={bscScanAddress}>{t('View Radio Contract')}</StyledLinkExternal>
        </Row>
      </CardBody>
    </StyledContractsCard>
  )
}

export default Contracts
