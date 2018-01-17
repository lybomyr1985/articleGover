import    {Component} from 'react'
import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import {  Link } from 'react-router-dom'
 
 


export default class Article extends Component{
render (){
    const {title,body,published,visits,id} =this.props;
     
    return(
        <div className="article">
        <span  >{id}</span>
            <h3 className="art_title">{title }</h3>
            <div className="art_body">{body}</div>
            <h3 className="art_published">{published }</h3>
            <span className="art_visits">{visits}</span>
            
       </div>

    )
}

}
/*
  const Article= ({title,body,published,visits,id})=>{
     return(
          
        <div className="article">
            <h3 className="art_title">{title }</h3>
            <div className="art_body">{body}</div>
            <h3 className="art_published">{published }</h3>
            <span className="art_visits">{visits}</span>
            <span  >{id}</span>
            
            
        
       </div>

    )
}

export default Article;*/