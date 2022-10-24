import React, { useState} from 'react'
import styled from 'styled-components'
import { Card,Button,Form } from 'antd';
import { useEffect } from 'react';
import { getBannerList } from "@/api/banner.js"
import UploadForm from './forms/uploadForm';
import { uploadBanner } from '@/api/banner';

export default function Banner() {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    getBannerList(100).then(response => {
      console.log("banner", response);
      if (response.data.status === 200) {
        let list = response.data.data;
        setBannerList(list);
        /*bannerId
: 
14
courseId
: 
0
picLink
: 
"C:\\Users\\gaowanlu\\Desktop\\MyProject\\dir\\e09f02cb-e58f-43cb-bb12-d41a4f5227db-BD4BC6A17B84848ADEB906992442FCB5.png"
time
: 
"2022-10-24T17:10:48.614+00:00" */
      }
    });
  }, []);

  const add = (form) => {
    uploadBanner(form).then(res => {
      console.log(res);
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <div div className = 'app-container' >
      <MyCard title="正在展示">
        <List>
          {
            bannerList.map((v, i, a) => {
              return <Row key={v.courseId}>
                <p>courseId: {v.courseId}</p>
                <p>bannerId: {v.bannerId}</p>
                <p>time: {v.time}</p>
                <img src={v.picLink} alt=''/>
                <MyButton>除去</MyButton>
              </Row>
            })
          }
        </List>
      </MyCard>
      <MyCard title="上传轮播图">
        <UploadForm submit={add}></UploadForm>
      </MyCard>
      <MyCard title="可选展示项目">
      </MyCard>
    </div>
  )
}

const List = styled.ol`
  
`;

const Row = styled.li`
  margin-bottom: 10px;
`;

const MyButton = styled(Button)`
  margin-left: 10px;
`;

const MyCard = styled(Card)`
  margin-bottom: 1rem;
`;
