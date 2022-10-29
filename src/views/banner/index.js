import React, { useState } from "react";
import styled from "styled-components";
import { Card, Button, Form } from "antd";
import { useEffect } from "react";
import { getBannerList } from "@/api/banner.js";
import UploadForm from "./forms/uploadForm";
import { uploadBanner, deleteBanner } from "@/api/banner";
import Poster from "./poster/Poster";

export default function Banner() {
  const [list, setList] = useState({
    bannerList: [],
  });

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    let bannerList = await getList();
    console.log({ bannerList });
    setList({ bannerList });
  };

  const getList = async () => {
    return getBannerList().then((response) => {
      let list = response.data.data;
      return list;
    });
  };

  const add = (form) => {
    uploadBanner(form)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        alert("上传失败");
      });
  };

  const del = (courseId, bannerId) => {
    deleteBanner(courseId, bannerId)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        alert("删除失败");
      });
  };

  return (
    <div div className="app-container">
      <MyCard title="为课程添加海报">
        <UploadForm submit={add}></UploadForm>
      </MyCard>
      <MyCard title="正在展示">
        {list.bannerList.map((v, i, a) => {
          return (
            <Row key={v.courseId}>
              <p>courseId: {v.courseId}</p>
              <p>bannerId: {v.bannerId}</p>
              <p>time: {v.time}</p>
              <p>picLink: {v.picLink}</p>
              <Poster src={v.picLink} alt="" />
              <FlexRight>
                <MyButton
                  onClick={(e) => {
                    del(v.courseId, v.bannerId);
                  }}
                >
                  删除记录
                </MyButton>
              </FlexRight>
            </Row>
          );
        })}
      </MyCard>
    </div>
  );
}

const Row = styled.li`
  margin-bottom: 10px;
  border-bottom: 1px grey solid;
  padding-bottom: 10px;
`;

const MyButton = styled(Button)``;

const FlexRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MyCard = styled(Card)`
  margin-bottom: 1rem;
`;
