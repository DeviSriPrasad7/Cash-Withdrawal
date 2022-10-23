// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    money: 2000,
  }

  updateWallet = value => {
    const {money} = this.state
    const actualValue = money - value
    console.log(actualValue)
    this.setState({money: actualValue})
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="person-container">
            <button type="button" className="person-button">
              S
            </button>
            <h1 className="person-heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <p className="money-value">{money}</p>
          </div>
          <p>In Rupees</p>
          <p className="money-value">Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="unorder-list">
            {denominationsList.map(eachUser => (
              <DenominationItem
                currency={eachUser}
                key={eachUser.id}
                updateMoney={this.updateWallet}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
