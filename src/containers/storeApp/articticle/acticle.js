import    {Component} from 'react'
import React from 'react'
import Base64 from 'base-64' 
 
 
 


export default class Article extends Component{
   
render (){
    const {title,img, body,published,visits,id} =this.props;
 for (var i in img){
 // console.log('Image2'+img[i].type+img[i].data)
  var imgType=img[i].type;
   var mmm=img[i].data;
  // var iimageString= Base64.encode(img[i].data.toString('base4' ));
 // var imageString = Buffer.from(img[i].data.toString('base64' ));
 var image = new Buffer(mmm,'binary').toString('base64');
 //  console.log('iSSSSSS'+mmm)
// console.log('iTYpe'+image)
}
   
      /**/
      var str='data:image/jpeg;base64,';
  var res=  str.concat(image ).toString(); 
  
  console.log('Image'+res.toString())
    return(
        <div className="article">
        <span  >{id}</span>
            <h3 className="art_title">{title }</h3>
             <div>{imgType}</div>
             <img  src={res}/>
             
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