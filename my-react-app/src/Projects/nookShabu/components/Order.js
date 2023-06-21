import { Button, Col, Image, Row, Tab, Nav, Container, Form } from 'react-bootstrap';
import ImgLogo from '../image/Logo-Nook-Shabu-200x200.png'
import { useState } from 'react';

const Order = () => {
    const [key, setKey] = useState("OrderList");
    const [count, setCount] = useState(1)

    return (
        <Row>
            <Col className='text-center'>   
                <Image src={ImgLogo} style={{ padding: '1.5rem 1.5rem 0.5rem 1.5rem ' }} />
                <h1 style={{ color: 'var(--color-04)', fontWeight: '700' }}>Your Order</h1>
                <Tab.Container activeKey={key} onSelect={(e) => { setKey(e) }}>
                    <Row>
                        <Col>
                            <Nav>
                                <Nav.Item className={key === 'OrderList' ? 'nav-items active-tab' : 'nav-items'}>
                                    <Nav.Link eventKey="OrderList" style={{ color: 'var(--color-03)' }}>รายการ</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={key === 'OrderSuccess' ? 'nav-items active-tab' : 'nav-items'}>
                                    <Nav.Link eventKey="OrderSuccess" style={{ color: 'var(--color-03)' }}>สำเร็จ</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='OrderList'>
                                    <Container fluid style={{ height: "35rem", padding: '0.5rem', borderRadius: '0rem 0rem 0.5rem 0.5rem', backgroundColor: 'var(--color-bg)' }}>
                                        <Row>
                                            <Col style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'center' }}>
                                                <h5 style={{ padding: '0rem 0.5rem' }}>โต๊ะที่ :</h5>
                                            </Col>
                                            <Col>
                                                <Form.Select size='sm'>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                        <hr style={{ margin: '0.5rem auto' }} />
                                        <Row >
                                            <Col style={{ color: 'var(--color-04)', fontWeight: '600' }}>รายการ</Col>
                                            <Col style={{ color: 'var(--color-04)', fontWeight: '600' }}>จำนวน</Col>
                                        </Row>
                                        <hr style={{ margin: '0.5rem auto' }} />
                                        <Row style={{ height: '25rem' }}>
                                            <Col>หมูสามชั้นสไลด์</Col>
                                            <Col>
                                                <Button variant='danger' size='sm' onClick={() => setCount((count) => count - 1)}>-</Button>
                                                <span style={{ padding: '0 0.5rem' }}>{count}</span>
                                                <Button variant='danger' size='sm' onClick={() => setCount((count) => count + 1)}>+</Button>
                                            </Col>
                                        </Row>
                                        <Button variant='danger' size='lg' style={{ width: '10rem' }}>สั่งอาหาร</Button>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey='OrderSuccess'>
                                    <Container fluid style={{ height: "35rem", padding: '0.5rem', borderRadius: '0rem 0rem 0.5rem 0.5rem', backgroundColor: 'var(--color-bg)' }}>
                                        <Row>
                                            <Col style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'center' }}>
                                                <h5 style={{ padding: '0rem 0.5rem' }}>โต๊ะที่ :</h5>
                                            </Col>
                                            <Col>
                                                <h5>1</h5>
                                            </Col>
                                        </Row>
                                        <hr style={{ margin: '0.5rem auto' }} />
                                        <Row >
                                            <Col style={{ color: 'var(--color-04)', fontWeight: '600' }}>รายการ</Col>
                                            <Col style={{ color: 'var(--color-04)', fontWeight: '600' }}>จำนวน</Col>
                                        </Row>
                                        <hr style={{ margin: '0.5rem auto' }} />
                                        <Row >
                                            <Col xxl={8}>หมูสามชั้นสไลด์</Col>
                                            <Col xxl={2}>5</Col>
                                            <Col xxl={2}><i className='bx bxs-check-circle' style={{ color: 'green' }}></i></Col>
                                        </Row>
                                        <hr style={{ margin: '0.5rem auto' }} />
                                        <Row><h5 style={{ color: 'var(--color-03)' }}>รอจัดส่งรายการ</h5></Row>
                                        <Row >
                                            <Col xxl={8}><h6>หมูสามชั้นสไลด์</h6></Col>
                                            <Col xxl={2}>2</Col>
                                            <Col xxl={2}></Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
        </Row>
    )
}
export default Order;