import React from 'react'

class SearchBar extends React.Component {
 
 state = {term:''};
 onFormSubmit= (e)=>{
    
  e.preventDefault();
    this.props.onSubmitRun(this.state.term);
    
    
 }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
        <h1 style={{color:'#bbb'}}>You can use any keyword to search out the beautiful pictures!</h1>
        <label htmlFor="">Image Search</label>
        <input type="text" value= {this.state.term} onChange = {e=> this.setState({term:e.target.value})}/>
        </div>
        </form>
      </div>
    );
  }
}

export default SearchBar

