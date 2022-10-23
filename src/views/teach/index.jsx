import React from 'react';
import TypingCard from '@/components/TypingCard'
import styled from 'styled-components';

const Teach = () => {
  const cardContent = "";
  return (
    <div className="app-container">
      <TypingCard title='任教的课' source={cardContent}/>
      <List/>
    </div>
  );
}

const List=styled.div`
  width:100%;
  min-height:100vh;
  background-color:darkgray;
  border-radius:0.5rem;
`;

export default Teach;