import React from "react";
import TypingCard from "@/components/TypingCard";
import store from "@/store";
import styled from "styled-components";
import { Descriptions } from "antd";

const About = () => {
  let user = store.getState().user;
  return (
    <div className="app-container">
      <View>
        <Descriptions title="用户信息">
          <Descriptions.Item label="用户ID">{user.userId}</Descriptions.Item>
          <Descriptions.Item label="昵称">{user.nickname}</Descriptions.Item>
          <Descriptions.Item label="电话">{user.phoneNumber}</Descriptions.Item>
          <Descriptions.Item label="用户身份">{user.role}</Descriptions.Item>
        </Descriptions>
      </View>
    </div>
  );
};

const View = styled.div`
  background-color: #ffffff;
  padding: 0.8rem;
`;

export default About;
