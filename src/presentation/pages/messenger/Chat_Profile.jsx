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
  //const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
 

 var test_id = '623f312a3a310a16d0c28f1a'

 const values = {
  email: localStorage.getItem("Name"),
  _id: localStorage.getItem("._id")
}

//localStorage.getItem(process.env.REACT_APP_PROFILE_KEY)


const currentChat = values

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
  padding-left: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #F5F5F5;
  .container {
    height: 100vh;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;