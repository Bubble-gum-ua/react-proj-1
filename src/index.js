import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {
        id: 1, message: "Hi, how are you?", likesCount: 15, photoAvatar: <img
            src="https://i.pinimg.com/originals/3d/6f/b2/3d6fb2056e94691bf76a4426dd826aa4.jpg"/>
    },
    {
        id: 2, message: "It's my first post", likesCount: 20, photoAvatar: <img
            src="https://cdna.artstation.com/p/assets/images/images/019/650/704/large/ynorka-chiu-jaina-proudmoore-by-ynorka.jpg?1564434256"/>
    },]

let dialogs = [
    {id: 1, name: 'Ozzeron'},
    {id: 2, name: 'Lusyi'},
    {id: 3, name: 'Lena'},
    {id: 4, name: 'Freddy'},
    {id: 5, name: 'Busya'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your mood?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
