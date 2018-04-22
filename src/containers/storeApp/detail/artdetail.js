import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Article from '../articticle/acticle'  
import {Button} from 'reactstrap'

const ArticleDetail= ({article})=> (<div>
    <Link to={'/'}><Button className="back_button" color="primary">Back </Button></Link>
    <h1> {article.title }</h1>
      <Article 
      img={article.img}/>
     <div>{article.body})</div>
     <span>{article._id}</span>
   
</div>)
/*
class ArticleDetail extends React.Component{
     componentWillMount(){
       this.props.actions.fetchData();
   }
        render(){
           const {article}=this.props;
        return (<div>
         
            </div>)
    }
}*/

//console.log('stArt'+{article})
 
 
const mapStateToProps=(store,ownProps)=>{
 console.log('ownProps'+ownProps.match.params.id)
  return {
     article: store.articles.find(article=>article._id=== ownProps.match.params.id )
    
    }
    
}/*
const mapDispatchToProps=(dispatch)=> {
    return { actions: bindActionCreators(actions, dispatch)}
}*/
  
export default   withRouter(connect( mapStateToProps )(ArticleDetail));
/*
const ArticleDetail= ()=><h1>ArticleDetail</h1>
 
 
   
   export default   ArticleDetail*/