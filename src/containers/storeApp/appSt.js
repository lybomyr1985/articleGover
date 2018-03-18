import  React, {Component} from 'react'
import  {connect} from 'react-redux'
import redIn from '../reducers/redIn'
import {fetchData} from '../actions/action'
import {fetchArt} from '../actions/action'
import * as actions from '../actions/action'
import { bindActionCreators } from 'redux' 
import Article from './articticle/acticle'  
import {Link} from 'react-router-dom'
//import Button from 'react-bootstrap/lib/Button'
import {Button} from 'reactstrap'
 



class  Appst extends Component{

    componentWillMount(){
       this.props.actions.fetchData();
   }
   
  render(){
        const {articles}=this.props;
    
       const art= articles.map(function (article,key){
       console.log(article.img);
         return (  
             <div key={key}>
             <Article title={article.title} 
                      img={article.img}
                      body={article.body}
                      published={article.published}
                      visits={article.visits}
                 
            >  </Article>
          
            <Link to={`artic/${article._id}`}> <Button color="primary">Детальніше...</Button></Link>
            <Link to={`articEdite/${article._id}`}> <Button color="warning">Редагувати</Button></Link>  
            <Link to={`articDelete/${article._id}`}> <Button color="danger">Видалити</Button></Link>  
            </div>
            )
         
       });
 
     return(
            <div>  
        <Link to={'/addNewArt'}> <Button color="warning">Додати нове повідомлення</Button></Link>  
        
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