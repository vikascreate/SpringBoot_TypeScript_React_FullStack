import { Dispatch, SetStateAction } from "react"

export interface messageType{
    username:string,
    recievername:string,
    connected:boolean,
    messsage:string
}
export interface joinboxProps{
    userData:messageType,
    setUserData:(userData:messageType)=>void,
    publicChats:payloadData[],
    setPublicChats:Dispatch<SetStateAction<payloadData[]>>,
    setUserList:Dispatch<SetStateAction<string[]>>
    UserList:string[],
    registerUser:()=>void,
}
export interface payloadData{
    senderName:string,
    recieverName:string,
    status:string,
    message:string,
    date:string,
}
export interface chatboxprops{
    publicChats:payloadData[],
    userList:string[],
    writeMessage:string;
    setWriteMessage:Dispatch<SetStateAction<string>>,
    sendMessage:(a:number)=>void,
    userName:string,
    prvateChats:Map<string,payloadData[]>,
}