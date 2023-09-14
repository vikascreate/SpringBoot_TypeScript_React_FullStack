import { useState } from 'react'
import JoinBox from './JoinBox'
import ChatBox from './ChatBox'
import { messageType, payloadData } from '../Interfaces/interface'
import {over,Client, Message, Frame} from 'stompjs'
import SockJS from 'sockjs-client'

let stompclient:Client;
export default function Chatroom(){
    const [userData, setUserData] = useState<messageType>({
      username: "",
      recievername: "",
      connected: false,
      messsage: "",
    });
    const [userList, setUserList] = useState<string[]>([]);
    const [publicChats, setPublicChats] = useState<payloadData[]>([]);
    const [privateChats,setPrivateChats]=useState<Map<string,payloadData[]>>(new Map<string,payloadData[]>())
    const [writeMessage,setWriteMessage]=useState<string>("");
    function registerUser(){
      const Sock:WebSocket=new SockJS("https://localhost:8080/ws")
      stompclient=over(Sock)
      stompclient.connect({},OnConnected,(e:Frame|string)=>OnError(e))
  }
  function OnConnected(){
      setUserData({...userData,"connected":true})
      stompclient.subscribe('/chatroom/public',(payload:Message)=>OnPublicMessageRecieved(payload))
      stompclient.subscribe('/user/'+userData.username+'/private-message',(payload:Message)=>OnPrivateMessageRecieved(payload))
      if(stompclient){
          const chatMessage:payloadData={
              senderName:userData.username,
              recieverName:"",
              status:"JOIN",
              message:"hello",
              date:"",
          }
          stompclient.send('/app/message',{},JSON.stringify(chatMessage))
      }
  }
function OnPrivateMessageRecieved(payload:Message){
  setUserList((old)=>[...old,pd.senderName])
            arraytoset
  const pd:payloadData=JSON.parse(payload.body)
  const old:Map<string,payloadData[]>=privateChats;
  let item:payloadData[]|undefined;
            if(old.has(pd.senderName)){
              item=old.get(pd.senderName) 
              item?.push(pd)
              if(item)
              old.set(pd.senderName,item)
              setPrivateChats(()=>old)
            }else{
              old.set(pd.senderName,[pd])
              setPrivateChats(old)
            }
      }

  function OnPublicMessageRecieved(payload:Message){
      const payloadData:payloadData=JSON.parse(payload.body)
      switch(payloadData.status){
          case "JOIN":
            setUserList((old)=>[...old,payloadData.senderName])
            arraytoset
          break;
          case "CONNECT":
              break;
          case "MESSAGE":
            setUserList((old)=>[...old,payloadData.senderName])
            arraytoset
              setPublicChats((old)=>[...old,payloadData])
              break;
      }
  }
  function arraytoset(){
    const list:string[]=userList;
    const set:Set<string>=new Set<string>(list)
    setUserList([...set])
  }
  function OnError(error:Frame|string){
      console.log(error)
  }
  function sendMessage(a:number){
    if(writeMessage.length==0)return
    console.log(a)
    if(a!=0){
      if(stompclient){
        const chatMessage:payloadData={
            senderName:userData.username,
            recieverName:userList[a-1],
            status:"MESSAGE",
            message:writeMessage,
            date:"",
        }
        stompclient.send('/app/private-message',{},JSON.stringify(chatMessage))
        const old:Map<string,payloadData[]>=privateChats
        let item:payloadData[]|undefined;
        if(old.has(chatMessage.recieverName)){
          item=old.get(chatMessage.recieverName) 
          item?.push(chatMessage)
          if(item)
          old.set(chatMessage.recieverName,item)
          setPrivateChats(old)
        }else{
          old.set(chatMessage.recieverName,[chatMessage])
          setPrivateChats(old)
        }
        setWriteMessage("")
    }return;
  }
    if(stompclient){
      const chatMessage:payloadData={
          senderName:userData.username,
          recieverName:"",
          status:"MESSAGE",
          message:writeMessage,
          date:"",
      }
      stompclient.send('/app/message',{},JSON.stringify(chatMessage))
      setWriteMessage("")
  }
  }

    return (
      <div className="container">
        {userData.connected ? (
          <ChatBox 
          publicChats={publicChats} userList={userList} 
          writeMessage={writeMessage}
          setWriteMessage={setWriteMessage}
          sendMessage={(a:number)=>sendMessage(a)}
          userName={userData.username}
          prvateChats={privateChats}
          />
        ) : (
          <JoinBox
            userData={userData}
            setUserData={setUserData}
            publicChats={publicChats}
            setPublicChats={setPublicChats}
            setUserList={setUserList}
            UserList={userList}
            registerUser={registerUser}
          />
        )}
      </div>
    );
}
