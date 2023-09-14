package com.messaging.websocket.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Message {
    private String senderName;
    private String recieverName;
    private String message;
    private String date;
    private Status status;
}
