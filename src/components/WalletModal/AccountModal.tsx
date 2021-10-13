import React from 'react'
import Button from '../Button/Button'
import Text from '../Text/Text'
import LinkExternal from '../Link/LinkExternal'
import Flex from '../Flex/Flex'
import { Modal } from '../PModal'
import CopyToClipboard from './CopyToClipboard'
import { localStorageKey } from './config'

interface Props {
  account: string
  logout: () => void
  onDismiss?: () => void
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '8px' }}
    >
      {account}
    </Text>
    <Flex mb="32px">
      <LinkExternal small href={`https://polygonscan.com/address/${account}`} mr="16px">
        View on Matic Explorer
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        size="sm"
        variant="secondary"
        onClick={() => {
          logout()
          window.localStorage.removeItem(localStorageKey)
          onDismiss()
          window.location.reload()
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
)

export default AccountModal
