import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import classes from './ChatHistory.css';
const chatHistory = (props) => (
   <div className={classes.ChatOutput}>
      {props.messages.map((message, i)=>(
         <ChatMessage key={i} message={message} load={props.loading}/>
      ))}
   </div>
)
export default chatHistory;
