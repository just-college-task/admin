import React ,{useEffect}from "react";
import { connect } from "react-redux";
import Content from "./Content";
import Header from "./Header";
import RightPanel from "./RightPanel";
import Sider from "./Sider";
import TagsView from "./TagsView";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import store from '@/store';
import { historyChange } from '@/store/actions/history';

const Main = (props) => {
  useEffect(()=>{
    store.dispatch(historyChange({history:props}));
    console.log("+",store.getState());
  });

  console.log("props",props);
  const { tagsView } = props;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        {tagsView ? <TagsView /> : null}
        <Content />
        <RightPanel />
      </Layout>
    </Layout>
  );
};
export default connect((state) => state.settings)(withRouter(Main));
