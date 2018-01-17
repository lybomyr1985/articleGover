import  React, {Component} from 'react'
import  {connect} from 'react-redux'
import redIn from '../reducers/redIn'
import {fetchData} from '../actions/action'
import {fetchArt} from '../actions/action'
import * as actions from '../actions/action'
import { bindActionCreators } from 'redux' 
import Article from './articticle/acticle'  
import {Link} from 'react-router-dom'
class  Appst extends Component{

    componentWillMount(){
       this.props.actions.fetchData();
   }
   
  render(){
        const {articles}=this.props;
    
       const art= articles.map(function (article,key){
         return (  
             <div key={key}>
             <Article title={article.title} 
                      body={article.body}
                      published={article.published}
                      visits={article.visits}
                 
            >  </Article>
            <Link to={`artic/${article._id}`}>dddddddddddddddddddd</Link>
            </div>
            )
         
       });
 
     return(
            <div>     
              {art}
       
            </div>

     )  
           }
         
}

const mapStateToProps=(store)=>{
  console.log('state='+store.articles);
        return	{        
        articles: store.articles
              }
        
    } 

const mapDispatchToProps=(dispatch)=> {
        return { actions: bindActionCreators(actions, dispatch)}
    }
      

   
export default connect( mapStateToProps, mapDispatchToProps )(Appst)