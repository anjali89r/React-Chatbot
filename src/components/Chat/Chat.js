import React, {Component} from 'react';
import ChatMessageComposer from '../ChatMessageComposer/ChatMessageComposer';
import ChatHistory from '../ChatSection/ChatHistory/ChatHistory';
import apiai from 'apiai-promise';
class Chat extends Component{
    state = {
        messages: [], //[{from: 'bot', message: 'Hi'}]
        inputValue: '',
        loading: false
    }
    sendMessage = (message)=>{
        this.setState((prevState)=>{
            prevState.messages.push(message)
        })
    }
    atKeyPress = (event)=> {
        if(event.key !== 'Enter') { return; }

        this.setState((prevState)=>{
            prevState.messages.push({
                  message: this.state.inputValue,
                  from: 'you'
                })
        })

        let data = this.state.inputValue;
        var app = apiai("703805d136674c638680b2020987129e");
        this.setState({loading: true})
        app.textRequest(data, {
            sessionId: '6fdc4b34-6326-4e61-bb3f-1fcd4yc'
        }).then((response) => {
            console.log(response);
            this.setState({loading: false})
            this.setState((prevState)=>{
                      prevState.messages.push({
                         message: response.result.fulfillment.speech,
                         from: 'bot'
                      })
                      return prevState;
                    })
        }).catch((error) => {
            console.log(error);
        })



        this.setState({ inputValue: '' });

      }

    render(){

        return(
            <div>
                <ChatHistory messages={this.state.messages} loading={this.state.loading}></ChatHistory>
                <ChatMessageComposer
                    sendMessage={this.sendMessage}
                    changed={(event)=>this.setState({inputValue: event.target.value})}
                    atKeyPress = {(event)=>this.atKeyPress(event)}
                    value={this.state.inputValue}

                ></ChatMessageComposer>
            </div>

        )
    }
}

export default Chat;
