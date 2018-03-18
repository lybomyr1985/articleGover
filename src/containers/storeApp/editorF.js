import React, {Component}from 'react' 
import ReactDOM, {render} from 'react-dom' 

import ReactQuill ,{Quill} from 'react-quill'
import  ImageResize   from 'quill-image-resize-module'
//import { ImageDrop } from 'quill-image-drop-module'

Quill.register('modules/ImageResize',  ImageResize)
//Quill.register('modules/imageDrop', ImageDrop)

import 'react-quill/dist/quill.snow.css'
 
 

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text:''} // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }


  render() {
   
     
    return (
  
      <div>
      <ReactQuill  
                 value={this.state.text}
                  theme={this.state.theme}
                  onChange={this.handleChange}
                  modules={MyEditor.modules}
                  formats={MyEditor.formats}
                  bounds={'catalog'}   
                  placeholder={this.props.placeholder}  
           
                 />
 <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => 
              this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div>
       </div>
       
                 
    )
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */

MyEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image',  'video', 'formula','module' ],
    [{ 'color': [] }, { 'background': [] }], 
  
    ['clean']
  ],
  ImageResize: {
    displaySize: true
  },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
}

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
MyEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]
/*
MyEditor.propTypes = {
  placeholder: React.PropTypes.string,
}

var e=MyEditor;
console.log(e);*/