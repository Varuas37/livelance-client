import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
//import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../../components/messenger/ChatContainer";
import Contacts from "../../components/messenger/Contacts";
import Welcome from "../../components/messenger/Welcome";

import { allUsersRoute, host } from "../../../application/redux/action/APIRoutes";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
<<<<<<< HEAD:src/presentation/pages/messenger_alt/Chat.jsx
  const [currentChat, setCurrentChat] = useState(undefined);
 const [currentUser, setCurrentUser] = useState(undefined);
 currentUser = "624a011ddf00bf27080fc4ef"
=======
  //const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
 

 var test_id = '623f312a3a310a16d0c28f1a'

 const values = {
  email: localStorage.getItem("Name"),
  _id: localStorage.getItem("._id")
}

//localStorage.getItem(process.env.REACT_APP_PROFILE_KEY)


const currentChat = values
>>>>>>> 93e2c54e8dbe15b2e3367ff4997aad928f66df54:src/presentation/pages/messenger/Chat_Profile.jsx

 useEffect(async () => {
   // if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
   //   navigate("/signin");
   // } else {
     {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(async () => {
    if (currentUser) {
      
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
   
        
     
    }
  }, [currentUser]);



//  const handleChatChange = (chat) => {
 //   setCurrentChat(chat);
 // };
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} /*changeChat={handleChatChange}*/ />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #F5F5F5;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;