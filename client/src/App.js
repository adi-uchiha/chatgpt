import './App.css';
import './normal.css';
function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="new-chat-button">
            + &nbsp; &nbsp; New Chat
        </div>
      </aside>

      <section className="chatbox">
        <textarea className="chat-input-textarea" placeholder="Enter your prompt here">
          
        </textarea>
      </section>
      
    </div>
  );
}

export default App;
