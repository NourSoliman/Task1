import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Marketing from './Marketing'
import {Row , Col  } from 'react-bootstrap'
function MarketingPage() {
  return (
    <>
    <Row>
        <Col lg={2} sm={2}>
        <Sidebar />
        </Col>
        <Col lg={10} sm={10} className="marketing-colum">
        <Marketing />
        </Col>
    </Row>
    </>
  )
}

export default MarketingPage