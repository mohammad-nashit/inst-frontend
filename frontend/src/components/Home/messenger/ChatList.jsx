import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../../../routes/baseUrl'
import { useDispatch, useSelector } from 'react-redux';
import { setChat } from '../../../reducers/userReducers';

function ChatList({value}) {
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user)
    const [item,setItem]=useState();
    const [lastMessage,setLastMessage]=useState()
    let id
     if(value.senderId===user.id){
           id=value.receiverId
     }
     else{
        id=value.senderId
     }
     useEffect(()=>{
        const getLastMsg=async()=>{
            const {data}=await axios.get(`${url}/api/last/message?id=${value._id}`)

            setLastMessage(data.message)
        }
        getLastMsg()
     },[value])
    useEffect(()=>{
        const userlist=async()=>{
            const {data}=await axios.get(`${url}/api/user?_id=${id}`)
            setItem(data)

        }
        userlist()
    },[value])
    
  return (
    <div onClick={()=>dispatch(setChat({
        chat:item,
        consversationId:value._id
    }))} >

            <div className='user-card'  >
            <img src={item?.avatar}/>
            <div className='user-info'>
                <h4>{item?.name}</h4>
                <div className='wrap-msg'>

                <p>{lastMessage}</p>
                </div>
            </div>
         </div>

        
</div>
  )
}

export default ChatList