import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import Main from "../components/main"
import Sidebar from "../components/sidebar"


export default () => (
  <Layout>
    <Helmet defaultTitle="Ratul Maharaj">
        <body className="is-preload"/>
    </Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
        <script src="js/covid.js"/>
        <script src="js/browser.min.js"/>
        <script src="js/breakpoints.min.js"/>
        <script src="js/util.js"/>
        <script src="js/main.js"/>
    <Main/>
    <Sidebar/>
  </Layout>
  
);