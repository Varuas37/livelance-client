import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../../utils/APIRoutes";
import ChatContainer from "../../components/messenger/ChatContainer";
import Contacts from "../../components/messenger/Contacts";
import Welcome from "../../components/messenger/Welcome";
import Chattile from "./chattile";

const mapUserToChat = (user => {
  console.log("user", user)
  return {
    ...user,
    _id: `id-${user.email}`
  }
});

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const { email } = useParams();
  console.log("chatting with ", email)
  useEffect(async () => {
    console.log("chat mounted")
  }, []);

  useEffect(() => {
    const chat = mapUserToChat({email})
    console.log("chat", chat)
    setCurrentChat(chat);
    // TODO: create function / use redux to findfind user youre chatting w/ from email
  }, [email])

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(async () => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      } else {
        console.log("would redirect you to set your avatar"); //shouldnt execute
        
      }
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Container className='md:pl-64 h-1/2'>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
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
  //height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: white;
  height: 100vh;
  .container {
    position:relative; left:100px;
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
