//import { Paper,Box } from '@mui/material'
import { chatboxprops } from "../Interfaces/interface";
import {
  Box,
  Button,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState} from "react";
export default function ChatBox({
  userList,
  writeMessage,
  setWriteMessage,
  sendMessage,
  publicChats,
  userName,
  prvateChats
}: chatboxprops) {
  // return (
  //   <div>
  //   <div>
  //     {userList.map((user)=>{
  //       return (
  //         <h2>{user}</h2>
  //       )
  //     })}
  //   </div>
  //   {publicChats.map((payload:payloadData)=>{
  //     return(
  //     <div>
  //       <h1>{payload.senderName}</h1>
  //       <h3>{payload.recieverName}</h3>
  //       <h3>{payload.message}</h3>
  //       <h4>{payload.status}</h4>
  //     </div>

  // )})}
  // <input></input>
  // <button>send</button>
  // </div>
  // )
  const [tab,setTab]=useState<number>(0)
  function handleMessage(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setWriteMessage(event.target.value);
  }
  //const chats:payloadData[]=publicChats
  function ListItems(){
    return(<>
  {publicChats.map((item,index)=>{
    return (
      <div>
        {item.senderName === userName ? (
          <div
            key={index}
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              margin: "10px",
              maxWidth: "50%",
              width: "fit-content",
              overflow:'hidden'
              //  whiteSpace:'no-wrap'
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{ margin: "5px", height: "35px" }}
            >
              {item.senderName}
            </Button>
            <Typography variant="h6" sx={{ padding: "5px" }}>
              {item.message}
            </Typography>
          </div>
        ) : (
          <div
            key={index}
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              margin: "10px",
              maxWidth: "50%",
              width: "fit-content",
              overflow:'hidden'
              //  whiteSpace:'no-wrap'
            }}
          >
            <Button
              variant="contained"
              color="warning"
              sx={{ margin: "5px", height: "35px" }}
            >
              {item.senderName}
            </Button>
            <Typography variant="h6" sx={{ padding: "5px" }}>
              {item.message}
            </Typography>
          </div>
        )}
      </div>
    );
  })}
  </>
    )
}
function PrivateChats(){
  return(
    <div>
      {prvateChats.get(userList[tab-1])?.map((item,index)=>{
        return (
          <div>
            {item.senderName === userName ? (
          <div
            key={index}
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              margin: "10px",
              maxWidth: "50%",
              width: "fit-content",
              overflow:'hidden'
              //  whiteSpace:'no-wrap'
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{ margin: "5px", height: "35px" }}
            >
              {item.senderName}
            </Button>
            <Typography variant="h6" sx={{ padding: "5px" }}>
              {item.message}
            </Typography>
          </div>
        ) : (
          <div
            key={index}
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              margin: "10px",
              maxWidth: "50%",
              width: "fit-content",
              overflow:'hidden'
              //  whiteSpace:'no-wrap'
            }}
          >
            <Button
              variant="contained"
              color="warning"
              sx={{ margin: "5px", height: "35px" }}
            >
              {item.senderName}
            </Button>
            <Typography variant="h6" sx={{ padding: "5px" }}>
              {item.message}
            </Typography>
          </div>
        )}
          </div>
        )
      })}
    </div>
  )
}
  return (
    <div>
      <Box>
        <Paper
          sx={{
            display: "flex",
            height: "70vh",
            width: "80vw",
            margin: "auto",
            marginTop: "10vh",
          }}
        >
          <Tabs
            orientation="vertical"
            sx={{ borderRight: 1, borderColor: "divider", width: "20%" }}
            variant="scrollable"
            value={tab}
            onChange={(_,newval)=>setTab(newval)}
          >
            <Tab label="Chatroom" value={0} />
            {userList.map((user,index) => {
              return <Tab label={user} value={index+1} />;
            })}
          </Tabs>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "95%",
                overflow: "scroll",
                flexDirection: "column",
              }}
            >
              {tab==0?<ListItems/>:<PrivateChats/>}
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                variant="filled"
                fullWidth
                value={writeMessage}
                onChange={(e) => handleMessage(e)}
              />
              <Button onClick={()=>sendMessage(tab)}>Send</Button>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
