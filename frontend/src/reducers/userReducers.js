
import {createSlice} from '@reduxjs/toolkit'

const initialState={
    id:'',
    name:'',
    email:'',
    username:'',
    avatar:'',
     posts:'',
     followers:'',
     following:'',
     myFollowingPost:'',
     users:[],
     chat:'',
     consversationId:'',
     chatList:'',

}

const userSlice=createSlice({
name:'user',
initialState,
reducers:{
    setUserLoginDetail:(state,action)=>{
        
        

        state.id=action.payload.id,
        state.name=action.payload.name,
        state.email=action.payload.email,
        state.username=action.payload.username,
        state.avatar=action.payload.avatar
        state.followers=action.payload.followers,
        state.following=action.payload.following
        state.posts=action.payload.posts
    },
    setUpdateImage:(state,action)=>{
           state.avatar=action.payload.avatar;
    },
    setPostOfFloowing:(state,action)=>{
         state.myFollowingPost=action.payload.myFollowingPost
    },
    setUserLogout:(state,action)=>{
        state.id=null,
        state.name=null,
        state.email=null,
        state.username=null,
        state.avatar=null,
        state.posts=null,
        state.followers=null,
        state.following=null,
        state.consversationId=null,
        state.myFollowingPost=null,
        state.users=[],
        state.chat=null
    },
    setChat:(state,action)=>{
          state.chat=action.payload.chat,
        // console.log(action.payload)
          state.consversationId=action.payload.consversationId
    },
    setClearChat:(state,action)=>{
        state.chat=action.payload.chat;
        state.consversationId=action.payload.consversationId
    },
    setRecent:(state,action)=>{
        state.users=action.payload.users
    },
    setChatList:(state,action)=>{
    
        state.chatList=action.payload.list
        console.log(state.chatList)
    //    let res= state.chatList.find((list)=>list.user.id==action.payload.list.user.id)
    //    if(!res){
    //    }
    }
  

}
})
 export const {setClearChat, setUserLoginDetail,setUserLogout,setUpdateImage,setPostOfFloowing,setRecent,setChat,setChatList}=userSlice.actions;
 export default userSlice.reducer;
