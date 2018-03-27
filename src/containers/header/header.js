import  React, {Component} from 'react'
import iim from '../../image/News.jpg'
import './header.css'
export default class Header extends Component{
    render(){
        return (
            <div >
   
            <img className="img_Header" src={iim}/>
            </div>
        )
    }

}