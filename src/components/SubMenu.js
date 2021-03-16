import React,{useState} from 'react'
import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../styles/SubMenu.css'


function SubMenu({item}) {
    const [subNav,setSubNav]=useState(false)
    const showSubnav =()=>setSubNav(!subNav)
    return (
        <>
        <Link className="subMenuLink" to ={item.path} onClick={item.subNav && showSubnav}>
        <div >
            {item.icon}
            <span className="subMenuLable">{item.title}</span>
            
        </div>
        <div>
            {item.subNav && subNav ? item.iconOpen :item.subNav ? item.iconClosed:null}
        </div>
        </Link>
        {subNav && item.subNav.map((item,index)=>{
            return(
                <Link className="dropDownLink" to={item.path} key={index}>
                    <div>
                    {item.icon}
                    <span className="subMenuLable">{item.title}</span>
                    </div>
                </Link>
        )
        })}
        </>
    )
}

export default SubMenu
