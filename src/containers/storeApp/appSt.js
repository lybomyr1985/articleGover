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
import {Pagination } from 'react-bootstrap' 
 import {push} from 'react-router-redux'
 var URLSearchParams = require('url-search-params');

class  Appst extends Component{
   constructor(props){
       super(props);
       this.changePage=this.changePage.bind(this);
   }
    componentWillMount(){
       this.props.actions.fetchData();
   }
   
    changePage(page){
        console.log("Page"+page);
        this.props.history.push('/?page='+page);
          }

  render(){
   
    //pagination 
    const per_page=3;
    const pages=Math.ceil(this.props.articles.length /per_page);
    const {articles}=this.props;
    const current_page=this.props.page;
    const start_offset=(current_page-1)*per_page;
    let start_count=0;
    
       const art= articles.map(function (article,key){
    //   console.log(article.img);
    if(key>=start_offset&& start_count< per_page){
        start_count++;
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
    }
         
         
       });
       
     return(
            <div className="art_section">  
                    <div className="dodButton">
                <Link to={'/addNewArt'}> <Button color="warning">Додати нове повідомлення</Button></Link>  
                </div>
                <div className="art_sec_Art">
                    {art}
                </div>
                
                <div className="art_pagin">
                <Pagination 
                    className="user-pagination pull-right" bsSize="medium"
                    maxButtons={5} 
                    first next prev boundaryLinks
                    items={pages} activePage={current_page}
                    onSelect={this.changePage}
                />
                    </div>
           </div>
     )  
           }
  
}

const mapStateToProps=(store,ownProps)=>{

const search = ownProps.location.search; 
const params = new URLSearchParams(search);
console.log('params='+params);
           return{
            articles: store.articles,
           page: Number(params.get('page'))
                }
            } 
   
const mapDispatchToProps=(dispatch)=> {
        return { actions: bindActionCreators(actions, dispatch)}
    }
      

   
export default connect( mapStateToProps, mapDispatchToProps )(Appst)