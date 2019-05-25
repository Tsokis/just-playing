import React, { Component } from 'react';

class Contact extends Component {

   constructor(props) {
     super(props);
     this.state = {
       firstName: '',
       lastName: '',
       email: '',
       isLoading: false,
       posts:[]
     };
     this.handelSubmit = this.handelSubmit.bind(this);
     this.simulatePost = this.simulatePost.bind(this);
     this.handeLoading = this.handeLoading.bind(this);
   }

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            posts: [...data]
          })
        })
        .catch(error => console.log(error));
    }
  

  handelSubmit(e) {
   console.log(`Your response was: ${this.state.firstName} ${this.state.lastName} ${this.state.email}`);
  }

  handeLoading(){
    this.setState({isLoading:!this.state.isLoading});
    console.log(this.state.isLoading);
  }

  simulatePost(){
    return setTimeout(() => {
      console.log('posted');
      this.handelSubmit();
      this.setState({isLoading:!this.state.isLoading})
      console.log(this.state.isLoading);
   },2000)
  }

  render() {
    
    return (
      <div>
      {this.state.isLoading? <p>data posted</p>:<p>Contact Us</p>}
    
        {/* <form> */}
            <div className="form-group">
                <label>First Name</label><br/>
                <input type="text" placeholder="enter first name..." onChange={e=> this.setState({firstName:e.target.value})} value={this.state.firstName} />
            </div>
            <div className="form-group">
                <label>Last Name</label><br/>
                <input type="text" placeholder="enter last name..." onChange={e=> this.setState({lastName:e.target.value})} value={this.state.lastName} />
            </div>
            <div className="form-group">
                <label>Email Address</label><br/>
                <input type="text" placeholder="enter email..." onChange={e=> this.setState({email:e.target.value})} value={this.state.email} />
            </div>
            <input type="submit" value="Submit" onClick={this.simulatePost} />
        {/* </form> */}
        <div className="Weather">
              { this.state.posts.map((item, index) => <DataList key={index} {...item} />) }
      </div>);    
      </div>
    );
   } 
  }

  const DataList = (props) => (
    <ul>
      <li><strong>title</strong>: {props.title}</li>
      <li><strong>body</strong>: {props.body}</li>
    </ul>
)
  
export default Contact;
