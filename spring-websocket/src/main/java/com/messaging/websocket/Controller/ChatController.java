package com.messaging.websocket.Controller;

import com.messaging.websocket.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message recievePublicMessage( Message message){
        //System.out.println(message.toString());
        return message;
    }
    @MessageMapping("/private-message")
    public Message recievePrivateMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getRecieverName(),"/private-message",message);
        System.out.println(message.toString());
        return message;
    }
}
