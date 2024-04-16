import {useState} from 'react'

import {
  BgContainer,
  CardContainer,
  CardHeading,
  Card,
  CardHolderNum,
  CardHolder,
  CardHolderName,
  PaymentContainer,
  PaymentHeading,
  CardNumInput,
  CardHolderInput,
  CardHolderContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const onChangeNum = event => {
    setCardNum(event.target.value)
  }

  const [cardName, setCardName] = useState('')
  const onChangeName = event => {
    setCardName(event.target.value)
  }

  return (
    <BgContainer>
      <CardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <Card data-testid="creditCard">
          <CardHolderNum>{cardNum}</CardHolderNum>
          <CardHolderContainer>
            <CardHolder>CARDHOLDER NAME</CardHolder>
            <CardHolderName>{cardName}</CardHolderName>
          </CardHolderContainer>
        </Card>
      </CardContainer>
      <PaymentContainer>
        <PaymentHeading>Payment Method</PaymentHeading>
        <CardNumInput
          type="text"
          onChange={onChangeNum}
          placeholder="Card Number"
        />
        <CardHolderInput
          type="text"
          onChange={onChangeName}
          placeholder="Cardholder Name"
        />
      </PaymentContainer>
    </BgContainer>
  )
}

export default CreditCard
