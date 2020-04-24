import React from "react"
import Layout from "../components/layout"
import Posts from "../components/posts"
import Sidebar from "../components/sidebar"
import Intro from "../components/intro"

export default () => (
  <Layout>
    <Intro id="specialIntro"/>
    <Posts/>
    <Sidebar/>
  </Layout>
);