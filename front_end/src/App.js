// import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'

// import 'react-virtualized/styles.css'

// import { List } from 'react-virtualized';


// class App extends Component {
//   state = {}
//   handleInputChange = (e, {value}) => {
//   	this.setState({username: value})
//   }

//   handleChange = (e) => {
//   	e.preventDefault()
//   	fetch('https://api.github.com/users/' + this.state.username + '/repos')
// 	  	.then(res => res.json())
// 	  	.then(res => {
// 	  		this.setState({'repos': res})
// 	  	})
// 	  	.catch(err => {
// 	  		console.log(err);
// 	  	})
//   	}

//   rowRenderer = ({
// 	  key,
// 	  index,
// 	  isScrolling,
// 	  isVisible,
// 	  style
// 	}) => {
//   	let repo = this.state.repos[index]
//   	console.log(repo)
//   	return (
// 	    <div
// 	      key={key}
// 	      style={style}
// 	    >
// 	    	<a href={repo.html_url}>
// 	    		{repo.name}
// 	    	</a>
// 	    </div>
// 	  )
//   }

//   render() {
//   	let repos = this.state.repos || []

//     return (
//     	<div>
// 	      <Form onSubmit = {this.handleChange}>
// 	        <Form.Input fluid label='username' placeholder='username' name='username' onChange={this.handleInputChange} />
// 	        <Form.Button>Submit</Form.Button>
// 	      </Form>
// 	      <List
// 			    width={700}
// 			    height={300}
// 			    rowCount={repos.length}
// 			    rowHeight={20}
// 			    rowRenderer={this.rowRenderer}
// 			  />
//     	</div>
//     )
//   }
// }

// export default App




import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import 'react-virtualized/styles.css'

import { Column, Table } from 'react-virtualized';


class App extends Component {
  state = {}
  handleInputChange = (e, {value}) => {
  	this.setState({username: value})
  }

  handleChange = (e) => {
  	e.preventDefault()
  	fetch('https://api.github.com/users/' + this.state.username + '/repos')
	  	.then(res => res.json())
	  	.then(res => {
	  		this.setState({'repos': res})
	  	})
	  	.catch(err => {
	  		console.log(err);
	  	})
  	}

  render() {
  	let repos = this.state.repos || []

    return (
    	<div>
	      <Form onSubmit = {this.handleChange}>
	        <Form.Input fluid label='username' placeholder='username' name='username' onChange={this.handleInputChange} />
	        <Form.Button>Submit</Form.Button>
	      </Form>
	      <Table
			    width={1300}
			    height={300}
			    headerHeight={40}
			    rowHeight={30}
			    rowCount={repos.length}
			    rowGetter={({ index }) => repos[index]}
  			>
			    <Column
			      label='Name'
			      dataKey='name'
			      width={300}
			    />
			    <Column
			      width={300}
			      label='Description'
			      dataKey='description'
			    />
			    <Column
			    	width = {300}
			    	label= 'nodeid'
			    	dataKey = 'node_id'
			    />
  			</Table>
    	</div>
    )
  }
}

export default App