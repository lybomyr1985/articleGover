import  React, {Component} from 'react'
import './footer.css'
import iiim from '../../image/news2.jpg'

export default class Footer extends Component{
    render(){
        return (
            <div className="footer">
             <img className="img_Footer" src={iiim}/>
                <div className="copyR">
               
                Lybomyr &copy; 2017<br/>
                <a href="" class="footer_link">www.l7777.com.ua</a>
                </div>
         
            </div>
        )
    }

}