import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Text } from '@pancakeswap/uikit'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { useGetNews } from 'hooks/news'

const StyledNewsCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    // opacity: 0.65;
  }
`
const CardMidContent = styled(Heading).attrs({ scale: 'xl' })`
  line-height: 44px;
`
const News = () => {
  const { t } = useTranslation()
  const data = useGetNews()
  const type = data ? data.type : 'nothing'
  const uurl = data ? data.url : 'nothing'

  return (
    <StyledNewsCard>
      <CardBody>
        <Heading color="contrast" scale="xl">
          {t('News')}
        </Heading>
        <CardMidContent color="#7645d9">{`${type}`}</CardMidContent>
        <Text>{`${uurl}`}</Text>
        <CardMidContent color="#7645d9">{`${type}`}</CardMidContent>
        <Text>{`${uurl}`}</Text>
        <CardMidContent color="#7645d9">{`${type}`}</CardMidContent>
        <Text>{`${uurl}`}</Text>
        <Flex justifyContent="space-between">
          <Heading color="contrast" scale="lg" />
          Today News!
        </Flex>
      </CardBody>
    </StyledNewsCard>
  )
}

export default News
