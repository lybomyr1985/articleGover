import  React, {Component,PropTypes } from 'react'
import  {connect} from 'react-redux'
//import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import  MyEditor  from './editorF'
import {fetchAdd} from  '../actions/action_add'
import {Link} from 'react-router-dom'
import $ from 'jquery' 
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Button,  Label, FormGroup,Input, FormText  } from 'reactstrap';
import { browserHistory  } from 'react-router' 
 


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.state = {};
  }
  
  handleValidSubmit(event, values) {
    const  e= document.getElementsByClassName('ql-editor');
   var  body={};
    for (var i = 0; i < e.length; i++) {   
        body= e[i].innerText; //second console output
    
body=e[i].innerText.replace('\n\n',' ');

 
var mg=e[i].firstChild.innerHTML;
var iimg=mg.replace(/^<img src="data:image\/\w+;base64,/,'').slice(0,-2);
console.log('iimg'+iimg);

var img = new Buffer(iimg, 'base64');
 console.log('iimg'+img.length);
        
    }
   // console.log(b2)
    console.log({...values,img,body})
   
 this.setState({...values,img,body});
  var x=JSON.stringify(this.state);
 console.log('state ADD'+x);
fetchAdd(x);
this.props.history.push('/');
  //  console.log(e[0].id); 
//console.log(e); 

 /*Array.from(document.getElementsByClassName('editor')).forEach(function(item) {
  console.log(item);
});*/
  }

  render() {
   
    return (
      <div>
        <AvForm onValidSubmit={this.handleValidSubmit}>
          {/* With AvField */}
          <AvField name="title" label="Name" required />
          {/* With AvGroup AvInput and AvFeedback to build your own */}
          <AvGroup>
            <Label for="example">Rank</Label>
          <MyEditor className="editor"  />
           
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>
       
        
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </AvForm>
      
        {this.state.values && <div>
          <h5>Submission values</h5>
          Values: <pre>{JSON.stringify(this.state.value, null, 2)}</pre>
        </div>}
      </div>
    );
  }
}


  /*
export default class MyForm extends React.Component {
   
 constructor(props) {
   super(props);
   this.handleValidSubmit = this.handleValidSubmit.bind(this);
   this.state = {};
  
 }

 handleValidSubmit(event, values) {
  this.setState({values});
    console.log(this.state.values);
}
  
 
   render() {
     return (
       <div>
       <AvForm  onValidSubmit={this.handleValidSubmit}>


          <AvGroup>
            <Label for="example">Rank</Label>
            <AvInput name="rank" id="example" required />
            { this only shows when there is an error, use reactstrap's FormFeedback if you want is to always be displayed }
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>
 
        <FormGroup>
           <Button>Submit</Button>
         </FormGroup>
         </AvForm>
         {this.state.values && <div>
          <h5>Submission values</h5>
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
         </div>
       
     );
   }
 }




















 
export default class AddNewArt extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }
  
  

  render() {
    return (
      <Form >
        <FormGroup row>
          <Label for="Title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input  valid type="plaintext" name="Title" id="title" placeholder="with a placeholder" valid/>
          </Col>
        </FormGroup>
       
    <MyEditor>
      <FormGroup row id="rrr">
          <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
          <Col sm={10}>
           <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple /> 
          </Col>
        </FormGroup>
       
    </MyEditor>
    

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
} 

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default App;

 */