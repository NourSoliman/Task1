import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Personnel from './Personnel'
import {Row , Col  } from 'react-bootstrap'
function PersonnelPage() {
  return (
    <>
    <Row>
        <Col lg={2}>
        <Sidebar />
        </Col>
        <Col lg={10}>
        <Personnel />
        </Col>
    </Row>
    </>
  )
}

export default PersonnelPage