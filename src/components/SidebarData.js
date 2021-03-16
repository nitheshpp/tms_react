import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

export const SidebarData=[
    {
        title:'View And Assign Task',
        path:'/ViewAndAssignTask',
        icon:<AiIcons.AiOutlineFolderView/>,        
       
       
    },
    {
        title:'Mange Task',
        path:'#',
        icon:<FaIcons.FaTasks/>,
        iconClosed:<AiIcons.AiFillDownCircle/>,
        iconOpen:<AiIcons.AiFillUpCircle/>, 
       
        subNav:[
            {
                title:'Create Task',
                path:'/MangeTask/CreateTask',
                icon:<BiIcons.BiTask/>,
                 
            }
        ]
    },
    {
        title:'Manage User',
        path:'#',
        icon:<IoIcons.IoIosPeople/>,
        iconClosed:<AiIcons.AiFillDownCircle/>,
        iconOpen:<AiIcons.AiFillUpCircle/>, 
        
        subNav:[
            {
                title:'Create User',
                path:'/MangeUser/CreateUser',
                icon:<FaIcons.FaUserPlus/>,
                 
            }
        ]
    },
    {
        title:'Account Setings',
        path:'#',
        iconClosed:<AiIcons.AiFillDownCircle/>,
        iconOpen:<AiIcons.AiFillUpCircle/>, 
        icon:<AiIcons.AiOutlineSetting/>,
       
        subNav:[
            {
                title:'Change Name',
                path:'/AccountSetings/ChangeName',
                icon:<FaIcons.FaUserEdit/>,
                 
            },
            {
                title:'Change Password',
                path:'/AccountSetings/ChangePassword',
                icon:<RiIcons.RiLockPasswordFill/>,
                 
            },
            {
                title:'Change Phone Number',
                path:'/AccountSetings/ChangePhoneNumber',
                icon:<FaIcons.FaPhoneAlt/>,
                 
            }
        ]
    }
]