import React, { useState} from 'react'
import styled from 'styled-components'
import TypingCard from "@/components/TypingCard";
import { useEffect } from 'react';
import { getBannerList } from "@/api/banner.js"

export default function Banner() {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    getBannerList(100).then(response => {
      console.log("banner", response);
      if (response.data.status === 200) {
        let list = response.data.data;
        if (list.length === 0) {//mock
          list = [{ courseId: 1 }, { courseId: 2 }];
        }
        setBannerList(list);
      }
    });
  }, []);

  return (
    <div div className = 'app-container' >
      <TypingCard title="Banner管理"/>
      <Card>
        <Title>正在展示</Title>
        <List>
          {
            bannerList.map((v, i, a) => {
              return <Row key={v.courseId}>
                <span>courseId: {v.courseId}</span>
                <Button>删除</Button>
              </Row>
            })
          }
        </List>
        <Title>上传轮播图</Title>
        <Title>可选展示项目</Title>
      </Card>
    </div>
  )
}

const Title = styled.p`
  font-size:1rem;
  font-weight: lighter;
`;

const Card=styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  padding:10px;
`;

const Button = styled.button`
  margin-left: 0.2rem;
`;

const List = styled.ul`
  
`;

const Row = styled.li`
  margin-bottom: 10px;
`;
