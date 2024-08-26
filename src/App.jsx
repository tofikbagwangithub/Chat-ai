import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState("");
  
  async function generateAnswer(){
    
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAuvlAt1QDe3a32g0SeYrOY9YaseuWELdo",
      method: "post",
      data: {
        "contents":[
          {"parts":[{"text": question}]},
        ],
      },
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    
  }

  return (
    <>
      <a href="https://github.com/tofikbagwangithub/chat-ai" target="_blank">
      <h1 className="bg-green-300">chat-AI Application</h1></a>

      <textarea className="border rounded w-full" value={question} onChange={(e)=>setQuestion(e.target.value)}col='30' rows='10' placeholder="Ask anything"> </textarea>
      <button onClick={generateAnswer}>Generate Answer</button>
      <pre> {answer} </pre>
    </>
  )
}

export default App
