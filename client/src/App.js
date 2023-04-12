import React from 'react';
import './App.css';
import './normal.css';
function App () {
	return (
		<div className="App">
			<aside className="sidemenu">
				<div className="new-chat-button">
            + &nbsp; &nbsp; New Chat
				</div>
				<div>
          Chats
				</div>
			</aside>

			<section className="chatbox">

				<div className='chat-log'>
					<div className='chat-message'>
						<div className='avatar'> </div>
						<div className='message'>Message</div>

					</div>
				</div>

				<div className='chat-input-holder'>

					<textarea className="chat-input-textarea" placeholder="Enter your prompt here" rows='1'>

					</textarea>
				</div>
			</section>

		</div>
	);
}

export default App;
