// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {currency, updateMoney} = this.props
    const {value} = currency

    const onChange = () => {
      updateMoney(value)
    }

    return (
      <li className="list-container">
        <button type="button" onClick={onChange} className="button">
          {value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
