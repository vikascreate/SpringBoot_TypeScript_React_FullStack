package com.messaging.websocket.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").setAllowedOriginPatterns("*").withSockJS();

    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app");
        registry.enableSimpleBroker("/chatroom","/user");
        registry.setUserDestinationPrefix("/user");
    }
    //-----BEGIN PRIVATE KEY-----
    //MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYU50QkyU7pg8+
    //PHNxqQvZ3AGzmeF+CLClq4vTQLwKPqawrxo1TuzvKKrra/OpEHUenLk0nylnG3Y0
    //IBJpSwqGjXIq5ibNHFpbBkfSv3tVOzxzT7ewylBC98uw1VWsQvwhQvj0i+Mfp75t
    //Pn6Cv8k4u3ryBsg2Ik2dXLJVVgkxtPaoqnioZwKOeKmmzmyJVODcj3vNMn1A7x5i
    //UQbSiK6dDLa2i5vG4/aCjHeOu22np6RHKo7FDDZS7zgXlS/OXp4hu89bP/OEHRqr
    //XcAtDGK5I3kGGL7khUyAhCcmDOH8VDKMOZ5YNSseEedz8Qq0+Bq5xXfBA5tbpYqR
    //z+LZ1RspAgMBAAECggEANBeSY2rjlOUMl6KL9CtOcMRTXpHoJGboTsSr84+LmHX0
    //wugvifW7BW5IFk/VCXmuklQQHzVSjYMl6DBu7o8E9li6TM1GO68frPqqsfutMd2F
    //VYk1RSu6vx2XnboJmuU4fLP5aj4DT9yfdQQPB+IyDOjMltp+PNbu1L19LiJ9LUwi
    //WVt7Nv0HZiHLt8CMf3t0F2ciF+y95zJ0Ci0pHAWQ05DYDFIu0ObbGaJiAvHJ71IS
    //FfHNVTVCdlq0V20VOS8Dzf0ohlRryX7qACoL+3LSbCHd4bxsI0huD7rA2H6xHmRt
    //AgJrbQbtlprpgb2KJ6XxT9aJuOv1Onqht+Vt7HXsTwKBgQD8eYBwC/DO+LvNlE1s
    //ekUHZUYRzr39/WWF50O4t9ENyg0fiiX3HW0bC607JUp7aujS/XE7b+JkPEAQegeg
    //geDo9llDsG+0q6Lx+wwfvZLCjqO4dUgMgBkoPVVJxXyzKG5h6ZryV2HR85HjDUTj
    //RHPE2g7X/wbqsL/0Q2dOGfzRFwKBgQDbWOWV8ydZuisJ58nOdgVN5fZsvhlNcL24
    //O3GyCs8rCZ8irxkl/JjI2a13Smu3fUAMPq/fOhijqSdcdoqa4n7ohMY13Rnfg1fm
    //LeF8I84LaEH/I3gWvDyO7r6zJgb4p5JZRz7BS3q6bgOYpajvj7m+1ry47RWxcn0e
    //CAVbXhadvwKBgDHblJ+L3BwjRoMMfFWlt6gEOdgeaaqUtc3Bo8AAnMoKUpkd4O1x
    //5C/pGGaLsK+6pwuzfP7t01lUBJq8XnE19MJMk8goOYcGNgFvQC+sciT1oiM1FetS
    //CKXHpuYQl9WRcGrphO3Cj9C0NuUNo8L1q57+KNxCwozqJp4ICYiE3UY1AoGAUzRZ
    //gpQF7UdtZAiEyMiEIpSE8aL6viFyFhyWeE8ZXt37e5CoHXzACBBqeMHGMohUb1Co
    //Lik/h3V29OASm8YnFdSny27fjaWpBiuJSSnb0v/taPbvatBkuGNf+10Fb/VA0pTv
    ///SrAl098Fb9hYd5HO1kBpbRpcjJXu7iXL511PskCgYEA11d2OriB4ckIsQ/dWHBE
    //Tcc4oI7Dr0eU3PYvYCwfhMmF9h/OqlL70qhn59hy+ILJZvbdJNWATOR5+NKPH0Mi
    //koUSnoyViv0CJjcIOthKSCi+BhXbgzuvctq1dcD/ezsjjxLuCumNE0utECO4q48W
    //rwMrYX6TJXGK5M8Tv3TMX8I=
    //-----END PRIVATE KEY-----
}
