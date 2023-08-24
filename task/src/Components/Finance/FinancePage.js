import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Finance from './Finance'
import {Row , Col  } from 'react-bootstrap'
function FinancePage() {
  return (
    <>
    <Row>
        <Col lg={2}>
        <Sidebar />
        </Col>
        <Col lg={10}>
        <Finance />
        </Col>
    </Row>
    </>
  )
}

export default FinancePage