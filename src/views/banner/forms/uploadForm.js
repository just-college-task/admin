import React from 'react'
import { Input, Form, InputNumber, Button} from 'antd'
import { useState } from 'react';
import styled from 'styled-components';

export default function UploadForm(props) {
    const [posterUrl, setPostUrl] = useState(null);
    const [id, setId] = useState(0);
    const [imageFile, setImageFile] = useState(null);

    const fileChange = (e) => {
        let files = e.currentTarget.files;
        let reads = new FileReader();
        setImageFile(files[0]);
        reads.readAsDataURL(files[0]);
        reads.onload = (e) => {
            setPostUrl(e.target.result);
        };
    }
    const submit = (e) => {
        console.log(imageFile);
        let form = new FormData();
        form.append("courseId", id);
        form.append("bannerImg", imageFile);
        props.submit(form);
    }
    return (
    <>
        <Form>
            <Form.Item label="课程ID">
                <InputNumber defaultValue={0} onChange={(e) => {setId(e)}}/>
            </Form.Item>
            <Input type='file' onChange={(e) => {fileChange(e)}}/>
            </Form>
            {posterUrl&&<div>
                <Img src={posterUrl} alt="" />
            </div>}
            {posterUrl&&<Button onClick={(e) => { submit(e) }}>提交</Button>}    
    </>
  )
}

const Img = styled.img`
    margin: 1rem;
    width: 30%;
`;
