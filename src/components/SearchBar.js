import React from 'react'

class SearchBar extends React.Component {
  state = { term: "" }

  onInputchange = (e) => {
    this.setState({ term: e.target.value })
  }

  onFormSumbit = (e) => {
    e.preventDefault()

    this.props.onFormSubmit(this.state.term)
  }

  render() {
    const { term } = this.state

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSumbit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text"
              value={term}
              onChange={this.onInputchange} />
          </div>
        </form>
      </div>
    )
  }
}


export default SearchBar