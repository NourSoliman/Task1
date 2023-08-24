import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Marketing from '../Plugins/Marketing'
import {Row , Col  } from 'react-bootstrap'
const  Home = () => {
  return (
    <>
    <Row>
        <Col lg={3}>
        <Sidebar />
        </Col>
        <Col lg={9}>
        <Marketing />
        </Col>
    </Row>
    </>
  )
}

export default Home