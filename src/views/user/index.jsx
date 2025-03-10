import React, { Component } from "react";
import { Card, Button, Table, message, Divider } from "antd";
import { getUsers, deleteUser, editUser, addUser } from "@/api/user";
import TypingCard from "@/components/TypingCard";
import EditUserForm from "./forms/edit-user-form";
import AddUserForm from "./forms/add-user-form";
const { Column } = Table;
class User extends Component {
  state = {
    users: [],
    editUserModalVisible: false,
    editUserModalLoading: false,
    currentRowData: {},
    addUserModalVisible: false,
    addUserModalLoading: false,
  };
  getUsers = async () => {
    const result = await getUsers();
    const { status } = result.data;
    if (status === 200) {
      console.log("USERS", result.data.data);
      this.setState({
        users: result.data.data,
      });
    }
  };
  handleEditUser = (row) => {
    this.setState({
      currentRowData: Object.assign({}, row),
      editUserModalVisible: true,
    });
  };

  handleDeleteUser = (row) => {
    const { userId } = row;
    if (userId === "ADMIN") {
      message.error("不能删除管理员用户！");
      return;
    }
    deleteUser({ userId }).then((res) => {
      message.success("删除成功");
      this.getUsers();
    });
  };

  handleEditUserOk = (_) => {
    const { form } = this.editUserFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ editModalLoading: true });
      //找出相应的用户
      const targetUser = this.state.users.find(
        (item) => item.userId === values.userId
      );
      editUser({ ...targetUser, ...values })
        .then((response) => {
          form.resetFields();
          this.setState({
            editUserModalVisible: false,
            editUserModalLoading: false,
          });
          message.success("编辑成功!");
          this.getUsers();
        })
        .catch((e) => {
          message.success("编辑失败,请重试!");
        });
    });
  };

  handleCancel = (_) => {
    this.setState({
      editUserModalVisible: false,
      addUserModalVisible: false,
    });
  };

  handleAddUser = (row) => {
    this.setState({
      addUserModalVisible: true,
    });
  };

  //添加用户表单回调
  handleAddUserOk = (_) => {
    const { form } = this.addUserFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ addUserModalLoading: true });
      addUser(values)
        .then((response) => {
          form.resetFields();
          this.setState({
            addUserModalVisible: false,
            addUserModalLoading: false,
          });
          message.success("添加成功!");
          this.getUsers();
        })
        .catch((e) => {
          message.success("添加失败,请重试!");
        });
    });
  };

  componentDidMount() {
    this.getUsers();
  }
  render() {
    const { users } = this.state;
    const title = (
      <span>
        <Button type="primary" onClick={this.handleAddUser}>
          添加用户
        </Button>
      </span>
    );
    const cardContent = `在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。`;
    return (
      <div className="app-container">
        <TypingCard title="用户管理" source={cardContent} />
        <br />
        <Card title={title}>
          <Table bordered rowKey="id" dataSource={users} pagination={false}>
            <Column
              title="用户ID"
              dataIndex="userId"
              key="userId"
              align="center"
            />
            <Column
              title="用户名称"
              dataIndex="nickname"
              key="nickname"
              align="center"
            />
            <Column
              title="用户角色"
              dataIndex="type"
              key="type"
              align="center"
            />
            <Column
              title="电话"
              dataIndex="phoneNumber"
              key="phoneNumber"
              align="center"
            />
            <Column
              title="操作"
              key="action"
              width={195}
              align="center"
              render={(text, row) => (
                <span>
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    title="编辑"
                    onClick={this.handleEditUser.bind(null, row)}
                  />
                  <Divider type="vertical" />
                  <Button
                    type="primary"
                    shape="circle"
                    icon="delete"
                    title="删除"
                    onClick={this.handleDeleteUser.bind(null, row)}
                  />
                </span>
              )}
            />
          </Table>
        </Card>
        <EditUserForm
          currentRowData={this.state.currentRowData}
          wrappedComponentRef={(formRef) => (this.editUserFormRef = formRef)}
          visible={this.state.editUserModalVisible}
          confirmLoading={this.state.editUserModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleEditUserOk}
        />
        <AddUserForm
          wrappedComponentRef={(formRef) => (this.addUserFormRef = formRef)}
          visible={this.state.addUserModalVisible}
          confirmLoading={this.state.addUserModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleAddUserOk}
        />
      </div>
    );
  }
}

export default User;
