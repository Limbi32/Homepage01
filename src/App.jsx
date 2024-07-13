
import './App.css'
import logo from './assets/logo.svg'
import {Navigation} from './Components/Header/Navigation.jsx'
import {Article1} from './Components/Section1/Article1.jsx'
import {Article2} from './Components/Section1/Article2.jsx'
import {Type1} from './Components/Section2/Type1.jsx'
import {Type2} from './Components/Section2/Type2.jsx'
import {Type3} from './Components/Section2/Type3.jsx'
import {Menu} from './Components/Header/Menu.jsx'
import {Logo} from './Components/Header/Logo.jsx'
import icon1 from './assets/icon-menu.svg'
import icon2 from './assets/icon-menu-close.svg'
import types01 from './assets/image-retro-pcs.jpg'
import types02 from './assets/image-top-laptops.jpg'
import types03 from './assets/image-gaming-growth.jpg'
import { useEffect, useRef, useState } from 'react'


function App() {

  const [nbmenu, setNbmenu]=useState(icon1)
    const iconref=useRef(null)
    const menuref=useRef(null)
   
    
    const handlemenu=()=>{
      if (nbmenu==icon1) {
        setNbmenu(icon2)
      }else{
        setNbmenu(icon1)
      }
      if (menuref.current.classList=="active") {
        menuref.current.classList.remove('active')
      }else{
        menuref.current.classList.add('active')
      }
 
      
    }
    useEffect(()=>{
     
    },[])

  return (
    <>
     
    <Header logo={logo} menuref={menuref} nbmenu={nbmenu} handlemenu={handlemenu} />
    <Section1 />
    <Section2 />  
        
      

    </>
  )
}
function Section1(){
  return <section className="section-01">
  <Article1/>
  <Article2/>
       
</section>
}
function Section2(){
  return <section className="section-02">
            <Type1 Types01={types01} />
            <Type2 Types02={types02} />
            <Type3 Types03={types03} />
      </section>
}
function Header({logo,menuref,nbmenu,handlemenu}){
  return  <header>
      <Logo Logo1={logo} /> 
        <nav ref={menuref} className="active">
        <Navigation />              
        </nav>
        <Menu Menu1={nbmenu}  onclick={handlemenu} />  
      </header>
}
export default App
