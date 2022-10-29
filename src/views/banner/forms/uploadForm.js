import React from "react";
import { Input, Form, InputNumber, Button } from "antd";
import { useState, useRef } from "react";
import styled from "styled-components";
import Poster from "../poster/Poster";

export default function UploadForm(props) {
  const [posterUrl, setPostUrl] = useState(null);
  const [id, setId] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef();

  const fileChange = (e) => {
    let files = e.currentTarget.files;
    let reads = new FileReader();
    if (files.length > 0) {
      setImageFile(files[0]);
      reads.readAsDataURL(files[0]);
      reads.onload = (e) => {
        setPostUrl(e.target.result);
      };
    }
  };
  const submit = (e) => {
    console.log(imageFile);
    let form = new FormData();
    form.append("courseId", id);
    form.append("bannerImg", imageFile);
    props
      .submit(form)
      .then((res) => {
        if (res) {
          //上传成功
          setPostUrl(null);
          setId(0);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const inputImage = () => {
    // 模拟input点击事件
    let evt = new MouseEvent("click", {
      bubbles: false,
      cancelable: true,
      view: window,
    });
    fileInputRef.current.dispatchEvent(evt);
  };

  return (
    <>
      <Form>
        <Form.Item label="课程ID">
          <InputCourseId
            defaultValue={0}
            onChange={(e) => {
              setId(e);
            }}
          />
        </Form.Item>
        <Form.Item label="课程轮播图">
          <Button onClick={(e) => inputImage()}>添加</Button>
        </Form.Item>
        <input
          style={{ display: "none" }}
          ref={fileInputRef}
          type="file"
          onChange={(e) => {
            fileChange(e);
          }}
        />
      </Form>
      {posterUrl && (
        <div>
          <Poster src={posterUrl} alt="" />
        </div>
      )}
      {posterUrl && (
        <SubmitButton
          onClick={(e) => {
            submit(e);
          }}
        >
          提交
        </SubmitButton>
      )}
    </>
  );
}

const InputCourseId = styled(InputNumber)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  background-color: #1da57a;
  color: #fafafa;
`;
