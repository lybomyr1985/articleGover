import    {Component} from 'react'
import React from 'react'

export default class ArticleDetail extends  Component{
    render(){
        // получаем параметры
        const id = this.props.match.params._id;
    
        return <h2>id: {id}   </h2>;
    }
}