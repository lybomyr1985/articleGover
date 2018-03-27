import  React, {Component,PropTypes } from 'react'
import  MyEditor  from './editorF'
import { withRouter } from 'react-router-dom'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import {   Label, FormGroup,Input, FormText  } from 'reactstrap';  
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchDelete} from  '../actions/action_delete'
import { browserHistory  } from 'react-router' 
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 

class DeleteArticle extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      
      fDelite( ){
        const {article}=this.props;
        var dd =article._id;   
       
    console.log('IDDDD'+dd); 
    fetchDelete(dd)
    this.props.history.push('/');
      }
    
render(){
 
 
  return(
    <div>
    <h2>Видалення статті</h2> 
    <Button color="danger" onClick={this.toggle}>Видалити</Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
  <ModalHeader toggle={this.toggle}>Видалення</ModalHeader>
      <ModalBody>
         Ви дійсно хочете видалити цю статтю,
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.fDelite.bind(this)}>Так</Button>{' '}
        <Button color="secondary" onClick={this.toggle}>Скасувати</Button>
      </ModalFooter>
    </Modal>
    <Link to={'/'}>Back</Link>
     
      </div>
  )
}
}  
/*
const EditeArticle= ({article})=> (<div>

  <h1> {article.title }</h1>
   <div>{article.body})</div>
   <span>{article._id}</span>
   <Link to={'/'}>Back</Link>
</div>)
*/
const mapStateToProps=(store,ownProps)=>{
  console.log('ownProps'+ownProps.match.params.id)
   return {
      article: store.articles.find(article=>article._id=== ownProps.match.params.id )
     
     }
     
 }
   
 export default   withRouter(connect( mapStateToProps )(DeleteArticle));
 