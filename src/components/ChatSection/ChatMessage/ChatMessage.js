import React from 'react';
import classes from './ChatMessage.css';
//import Spinner from '../../Spinner/Spinner';
const chatMessage = (props) => {
   const assignedClass = [];
   if(props.message.from === 'bot'){
      assignedClass.push(classes.Botmessage)
   }
   else{
      assignedClass.push(classes.Usermessage);
   }

   return(
      <div className={assignedClass.join(' ')}>
         <div className={classes.Message}>
            {props.message.message}
         </div>
      </div>
   )
}


// const chatMessage = (props) => {
//    const assignedClass = [];
//    if(props.message.from === 'bot'){
//       assignedClass.push(classes.Botmessage)
//    }
//    else{
//       assignedClass.push(classes.Usermessage);
//    }

//    return(
//       <div>
//          {(props.message.from === 'bot') ? (props.load ? <Spinner /> :
//          <div className={assignedClass.join(' ')}>
//             <div className={classes.Message}>
//              {props.message.message}
//             </div>
//          </div>) :
//          <div className={assignedClass.join(' ')}>
//             <div className={classes.Message}>
//              {props.message.message}
//             </div>
//          </div>}
//       </div>

//    )
// }
export default chatMessage;
