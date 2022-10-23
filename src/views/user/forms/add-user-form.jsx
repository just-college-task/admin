import React, { Component } from "react";
import { Form, Input, Select, Modal } from "antd";
import { reqValidatUserID } from "@/api/user";
const { TextArea } = Input;

class AddUserForm extends Component {
  // validatUserID = async (rule, value, callback) => {
  //   if (value) {
  //     if (!/^[a-zA-Z0-9]{1,6}$/.test(value)) {
  //       callback("用户ID必须为1-6位数字或字母组合");
  //     }
  //     let res = await reqValidatUserID(value);
  //     const { status } = res.data;
  //     if (status) {
  //       callback("该用户ID已存在");
  //     }
  //   } else {
  //     callback("请输入用户ID");
  //   }
  //   callback();
  // };
  render() {
    const { visible, onCancel, onOk, form, confirmLoading } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };
    return (
      <Modal
        title="编辑"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="用户电话:">
            {getFieldDecorator("phoneNumber", {
              rules: [{ required: true, validator: this.validatUserID }],
            })(<Input placeholder="请输入用户电话" />)}
          </Form.Item>
          <Form.Item label="密码:">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入用户密码!" }],
            })(<Input placeholder="请输入用户密码" />)}
          </Form.Item>
          {/* <Form.Item label="用户角色:">
            {getFieldDecorator("type", {
              initialValue: "USER",
            })(
              <Select style={{ width: 120 }}>
                <Select.Option value="ADMIN">ADMIN</Select.Option>
                <Select.Option value="USER">USER</Select.Option>
              </Select>
            )}
          </Form.Item> */}
          {/* <Form.Item label="用户描述:">
            {getFieldDecorator("description", {
            })(<TextArea rows={4} placeholder="请输入用户描述" />)}
          </Form.Item> */}
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddUserForm" })(AddUserForm);
