import React from "react";
import TypingCard from "@/components/TypingCard";
import store from "@/store";

const About = () => {
  let user=store.getState().user;
  const cardContent = `
    <p>用户ID:${user.userId}</p>
    <p>昵称:${user.nickname}</p>
    <p>电话:${user.phoneNumber}</p>
    <p>用户身份:${user.role}</p>
  `;
  return (
    <div className="app-container">
      <TypingCard title="我的信息" source={cardContent} />
    </div>
  );
};

export default About;
