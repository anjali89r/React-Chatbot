import React, {Component} from 'react';
import './Chat.css';
//import axios from 'axios';
import Form from '../Form/Form';
import apiai from 'apiai';

//var apiai = require('apiai');
//console.log(process.env.clientkey)

class Chat extends Component{
    state = {
        message: {
            bot: ['hey, I\'m your chatbot'],
            user: []
        }
    }
    userQuery = () => {
        const userPosted = [
            ...this.state.message.user
        ]
        let data = userPosted.slice(-1).join('');
                 var app = apiai("703805d136674c638680b2020987129e");

                var request = app.textRequest(data, {
                    sessionId: '6fdc4b34-6326-4e61-bb3f-1fcd4ac'
                });

                request.on('response', (response) => {

                    console.log(response.result.fulfillment.speech);
                    const copyMess = {...this.state.message}//{bot: [], user:[]}
                    copyMess.bot  = [...this.state.message.bot,response.result.fulfillment.speech ]

                    this.setState({message: copyMess})

                });

                request.on('error', function(error) {
                    console.log(error);
                });

                request.end();
    }
    userQuestion = (event) => {
        const copyMess = {...this.state.message};
        copyMess.user  = [...this.state.message.user,event.target.value ];
        this.setState({message: copyMess})
     }

    render(){
        const message = this.state.message.bot.map((el,index) => {
            return (
                <Message key={index} bot={this.state.message.bot}/>
            )
        })
        return(
            <div>
                <MessageSection>
                    {message}
                </MessageSection>
                <Form changed={(event)=>this.userQuestion(event)} name={this.state.message.user}/>

            </div>
        );
    }
}

export default Chat;


// class Chat extends Component{
//    state = {
//       title: '',
//   }
//   postDataHandler = ()=>{

//      const data = {
//          title: this.state.title,
//          speech: null
//      }
//      var app = apiai("703805d136674c638680b2020987129e");

//     var request = app.textRequest(data.title, {
//         sessionId: '6fdc4b34-6326-4e61-bb3f-1fcd4ac'
//     });

//     request.on('response', (response) => {

//         console.log(response.result.fulfillment.speech);
//         this.setState({speech: response.result.fulfillment.speech})
//     });

//     request.on('error', function(error) {
//         console.log(error);
//     });

// request.end();
//   }
//    render(){
//       return(
//       <div className="NewPost">
//          <label>Title</label>
//          <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
//          <button onClick={this.postDataHandler}>Add Post</button>

//         <div>{this.state.speech}</div>
//       </div>);
//    }
// }
// export default Chat;
