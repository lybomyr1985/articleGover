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
import './artic_base.css'; 
import  'react-fa-icon'
import imE from  '../../image/edit-icon.png'
import imD from  '../../image/delete-icon.png'
import 'font-awesome/css/font-awesome.min.css';
class  Appst extends Component{

    componentWillMount(){
       this.props.actions.fetchData();
   }

  
  


  render(){
        const {articles}=this.props;
    
       const art= articles.map(function (article,key){
       console.log(article.img);
         return (  
             <div key={key} className="article_base">
             <Article title={article.title} 
                      img={article.img}
                   
                    
                 
            >  </Article>     
            <div className="buttonBlok">     
                <Link to={`artic/${article._id}`}> <Button color="primary">Детальніше...</Button></Link>
                <Link to={`articEdite/${article._id}`}> <Button color="warning"><img src={imE} className={"iE"} alt="mii"/></Button></Link>  
                <Link to={`articDelite/${article._id}`}>  <Button color="danger"  ><img src={imD} className={"iD"} alt="mi"/></Button> </Link> 
            </div>
            </div>
            )
         
       });
 
     return(
            <div>  
            <div className="dodButton">
        <Link to={'/addNewArt'}> <Button color="warning">Додати нове повідомлення</Button></Link>  
        </div>
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