import React from 'react';
import classes from './Composer.css';

const chatMessageComposer = (props) => {
   return (
      <div className={classes.Chatinput}>
            <input placeholder="Talk to me..." className={classes.Userinput} type="text" value={props.value} onChange={props.changed} onKeyPress={props.atKeyPress}/>
         </div>
   )
}
export default chatMessageComposer;

