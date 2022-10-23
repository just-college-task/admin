import React, { Component } from "react";
import { Form, Input, Select, Modal } from "antd";
const { TextArea } = Input;
class EditUserForm extends Component {
  render() {
    const {
      visible,
      onCancel,
      onOk,
      form,
      confirmLoading,
      currentRowData,
    } = this.props;
    const { getFieldDecorator } = form;
    const { userId, nickname, type, phoneNumber } = currentRowData;
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
          <Form.Item label="用户ID:">
            {getFieldDecorator("userId", {
              initialValue: userId,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="用户名称:">
            {getFieldDecorator("nickname", {
              rules: [{ required: true, message: "请输入用户名称!" }],
              initialValue: nickname,
            })(<Input placeholder="请输入用户名称" />)}
          </Form.Item>
          <Form.Item label="用户角色:">
            {getFieldDecorator("type", {
              initialValue: type,
            })(
              <Select style={{ width: 120 }} disabled={userId === "ADMIN"}>
                <Select.Option value="ADMIN">ADMIN</Select.Option>
                <Select.Option value="USER">USER</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="电话">
            {getFieldDecorator("phoneNumber", {
              initialValue: phoneNumber,
            })(<TextArea rows={4} placeholder="请输入用户电话" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "EditUserForm" })(EditUserForm);
