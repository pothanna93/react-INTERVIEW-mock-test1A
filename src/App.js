import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {
    userInput: '',
    isSave: true,
  }

  onChangeValue = event => {
    this.setState({userInput: event.target.value})
  }

  onClickSave = () => {
    this.setState({
      isSave: false,
    })
  }

  onClickEdit = () => {
    this.setState({
      isSave: true,
    })
  }

  render() {
    const {userInput, isSave} = this.state
    return (
      <div className="app-container">
        <div className="input-div">
          <h1>Editable Text Input</h1>
          {isSave ? (
            <div>
              <input
                type="text"
                className="input-element"
                onChange={this.onChangeValue}
                value={userInput}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickSave}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="user-edit-div">
              <p className="para">{userInput}</p>
              <button
                type="button"
                className="button"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default App
