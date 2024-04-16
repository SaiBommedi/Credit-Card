import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40vw;
  justify-content: space-between;
  padding: 30px;
`

export const CardHeading = styled.h1`
  font-family: Roboto;
  color: white;
  align-self: center;
  padding: 40px;
  font-size: 30px;
  font-weight: bold;
`
export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 12px;
  height: 30vh;
  width: 30vw;
  align-self: center;
`
export const CardHolderNum = styled.p`
  font-family: Roboto;
  color: white;
  font-size: 25px;
  padding: 35px;
  padding-left: 45px;
  padding-top: 50px;
`
export const CardHolderContainer = styled.div`
  padding-left: 30px;
  padding-bottom: 30px;
`

export const CardHolder = styled.p`
  font-family: roboto;
  color: white;
`
export const CardHolderName = styled.p`
  font-family: roboto;
  color: white;
  font-size: 28px;
`
export const PaymentContainer = styled.div`
  height: 40vh;
  width: 40vw;
  margin: 20px;
  box-shadow: 3px 3px 10px 5px #c3cad9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PaymentHeading = styled.h1`
  font-family: roboto;
  color: #344e7a;
`
export const CardNumInput = styled.input`
  margin: 10px;
  padding: 5px;
`
export const CardHolderInput = styled.input`
  margin: 10px;
  padding: 5px;
`
