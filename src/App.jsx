import React, { useEffect } from "react"
import { useState } from "react";
import Editor from "./components/Editor";
import UseStorage from "./components/hooks/Usestorage";
function App()
{
  const [html , setHtml]=UseStorage('html','')
  const [css , setCss]=UseStorage('css','')
  const [js , setJavascript]=UseStorage('js','')
  const[srcDoc , setSrcDoc]=useState('');
useEffect(()=>{
  const timeout = setTimeout(()=>{

    setSrcDoc(
      `<html> 
  <body> ${html} </body> 
  <style>${css}</style> 
  <script>${js}</script>  
  </html>
  `
    )
  } , 450)
  return()=> clearTimeout(timeout)

} , [html , css ,js])



  return <>
    <div className="pane top-pane">
      <Editor 
      language="xml" 
      displayName="HTML" 
      value={html} 
      onChange={setHtml}  

      />
      <Editor 
      language="css" 
      displayName="CSS" 
      value={css} 
      onChange={setCss}
      />
      <Editor 
      language="javascript" 
      displayName="JAVASCRIPT"
      value={js}
      onChange={setJavascript}
      />
    </div>
    <div className="pane">
      <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"

      />

    </div>
  </>
}
export default App ;


//fontawesome icons download
// $ npm i @fontawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core