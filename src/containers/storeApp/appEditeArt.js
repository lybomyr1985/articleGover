import  React, {Component,PropTypes } from 'react'
import  MyEditor  from './editorF'
import { withRouter } from 'react-router-dom'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Button,  Label, FormGroup,Input, FormText  } from 'reactstrap';  
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEdite} from  '../actions/action_ediite'
import { browserHistory  } from 'react-router' 

class EditeArticle extends Component{
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.state = {};
  }
  handleValidSubmit(event, values) {
    console.log(event,values);
    const {article}=this.props;
    var id =article._id;
    const  e= document.getElementsByClassName('ql-editor');
   var  body={};
    for (var i = 0; i < e.length; i++) {   
        body= e[i].innerText; //second console output
    
body=e[i].innerText.replace('\n\n',' ');

 
var mg=e[i].firstChild.innerHTML;
var iimg=mg.replace(/^<img src="data:image\/\w+;base64,/,'').slice(0,-2);
console.log('iimg'+iimg);

var img = new Buffer(iimg, 'base64');
 console.log('iimg'+id);
        
    }
   // console.log(b2)
    console.log({...values,img,body})
   
 this.setState({...values,img,body});
  var xF=JSON.stringify(this.state);
 console.log('state ADD'+xF);
fetchEdite(id,xF);
 browserHistory.push('/');
  } 
  
    
render(){

  const {article}=this.props;
  var title=article.title;
  var bodyy=article.body;
  var imgg =article.img;
  var iid =article._id;
    for (var iii in imgg){
    // console.log('Image2'+img[i].type+img[i].data)
     var imgType=imgg[iii].type;
      var mmm=imgg[iii].data;
     // var iimageString= Base64.encode(img[i].data.toString('base4' ));
    // var imageString = Buffer.from(img[i].data.toString('base64' ));
    var image = new Buffer(mmm,'binary').toString('base64');
    //  console.log('iSSSSSS'+mmm)
   // console.log('iTYpe'+image)
   }
      
         /**/
     var str="data:image/jpeg;base64,";
     var res=  str.concat(image ).toString(); 
 console.log(res)
 var imag=`<img src="${res}"/><p>${bodyy}</p>`;
 const  e= document.getElementsByClassName('ql-editor');
  
 var ody={}
 for (var ii = 0; ii < e.length; ii++) {   
  ody= e[ii]  //second console output
 
 
}
 ody.innerHTML=imag;
 
 console.log('oodd'+iid)
 for (var opp in ody){
console.log(ody[opp]);
 }

 /* article.map(function(article){
      console.log(article.title);
  });*/


  
  return(
    <div>  
         <h2>Edite Form</h2>   
        <AvForm onValidSubmit={this.handleValidSubmit}>
      
          <AvField name="title" label="Name" required  value={title}/>
  
          <AvGroup>
            <Label for="example">Rank</Label>
          <MyEditor className="editor"   />
           
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>
       
          
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </AvForm>
      
     
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
     
 }/*
 const mapDispatchToProps=(dispatch)=> {
     return { actions: bindActionCreators(actions, dispatch)}
 }*/
   
 export default   withRouter(connect( mapStateToProps )(EditeArticle));
 /*
 const ArticleDetail= ()=><h1>ArticleDetail</h1>
  
  
    
    export default   ArticleDetail*/