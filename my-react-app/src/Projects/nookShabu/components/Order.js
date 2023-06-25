import { Button, Col, Image, Row, Tab, Nav, Container, Form } from 'react-bootstrap';
import ImgLogo from '../image/Logo-Nook-Shabu-200x200.png'
import { useState } from 'react';

const Order = () => {
    const [key, setKey] = useState("OrderList");
    const [count, setCount] = useState(1)

    return (
        <Row style={{ backgroundColor: 'var(--color-01)', display: 'flex', justifyContent: 'center', padding: '0.5rem' }}>
            <Row style={{ width: '100%' }} >
                <Col xxs={0} xs={0} sm={0} md={0} lg={12} xl={12} xxl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Image src={ImgLogo} style={{ paddingTop: '2rem', width: '50%' }} className='desktop-show' />
                    <h1 style={{ color: 'var(--color-04)', fontWeight: '700' }} className='desktop-show'>Your Order</h1>
                </Col>
            </Row>

            <Row>
                <Col xxs={1} xs={1} sm={1} md={0} lg={0} xl={0} xxl={0} className='mobile-show'> 
                    <Button href='/' style={{border:'none',background:'none',marginTop:'1rem',marginLeft:'-1.5rem'}}>
                        <i className='bx bxs-chevron-left' style={{ fontSize: '3rem',color:'var(--color-03)' }}></i>    
                    </Button>
                </Col>
                <Col xxs={3} xs={3} sm={3} md={0} lg={0} xl={0} xxl={0}  className='mobile-show' >
                    <Image src={ImgLogo} style={{ width: '5rem', height: '5rem' }}/>
                </Col>
                <Col xxs={8} xs={8} sm={8} md={0} lg={0} xl={0} xxl={0}  className='mobile-show' >
                    <h1 style={{ color: 'var(--color-04)', paddingTop: '1.5rem', fontWeight: '700' }} className='text-center'>Your Order</h1>
                </Col>

            </Row>
            <Row>
                <Col xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Tab.Container activeKey={key} onSelect={(e) => { setKey(e) }}>
                        <Row >
                            <Col xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ padding: '0rem' }}>
                                <Nav>
                                    <Nav.Item className={key === 'OrderList' ? 'nav-items-Order active-items-Order' : 'nav-items-Order'}>
                                        <Nav.Link eventKey="OrderList" style={key === 'OrderList' ? { color: 'var(--color-04)' } : { color: 'var(--color-03)' }}>รายการ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={key === 'OrderSuccess' ? 'nav-items-Order active-items-Order' : 'nav-items-Order'}>
                                        <Nav.Link eventKey="OrderSuccess" style={key === 'OrderSuccess' ? { color: 'var(--color-04)' } : { color: 'var(--color-03)' }}>สำเร็จ</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Tab.Content style={{ backgroundColor: 'var(--color-bg)', borderRadius: '0rem 0rem 0.5rem 0.5rem', padding: '0rem 1.2rem 0rem 1.2rem', minHeight: '40rem' }}>

                                <Tab.Pane eventKey="OrderList">
                                    <Row style={{ height: '3rem', display: 'flex', alignContent: 'center', borderBottom: '0.2rem solid var(--color-01)' }} >
                                        <Col style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'center', paddingTop: '0.1rem' }}>
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
                                    </Row >
                                    <Row className='text-center' style={{ height: '3rem', display: 'flex', alignContent: 'center', borderBottom: '0.2rem solid var(--color-0)' }} >
                                        <Col style={{ color: 'var(--color-04)', fontWeight: '600' }}>รายการ</Col>
                                        <Col style={{ color: 'var(--color-04)', fontWeight: '600' }}>จำนวน</Col>
                                    </Row>
                                    <Row className='text-center' style={{ padding: '0.5rem 0rem 0.5rem 0rem ', minHeight: '30rem' }}>
                                        <Col xxs={6} xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>หมูสามชั้นสไลด์</Col>
                                        <Col xxs={6} xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                            <Button variant='danger' size='sm' onClick={() => setCount((count) => count - 1)}>-</Button>
                                            <span style={{ padding: '0 0.5rem' }}>{count}</span>
                                            <Button variant='danger' size='sm' onClick={() => setCount((count) => count + 1)}>+</Button>
                                        </Col>
                                    </Row>
                                    <Row style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', padding: '1rem' }}>
                                        <Button variant='danger' size='lg' style={{ width: '90%' }}>สั่งอาหาร</Button>
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="OrderSuccess">
                                    <Row style={{ height: '3rem', display: 'flex', alignContent: 'center', borderBottom: '0.2rem solid var(--color-01)' }} >
                                        <Col style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'center', paddingTop: '0.1rem' }}>
                                            <h5 style={{ padding: '0rem 0.5rem' }}>โต๊ะที่ : 01</h5>
                                        </Col>
                                    </Row >
                                    <Row className='text-center' style={{ height: '3rem', display: 'flex', alignContent: 'center', borderBottom: '0.2rem solid var(--color-01)' }} >
                                        <Col style={{ color: 'var(--color-04)', fontWeight: '600' }}>รายการ</Col>
                                        <Col style={{ color: 'var(--color-04)', fontWeight: '600' }}>จำนวน</Col>
                                    </Row>
                                    <Row className='text-center' style={{ padding: '0.5rem 0rem 0.5rem 0rem ', borderBottom: '0.2rem solid var(--color-01)' }}>
                                        <Col xxs={8} xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>หมูสามชั้นสไลด์</Col>
                                        <Col xxs={2} xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                                            <span style={{ padding: '0 0.5rem' }}>{count}</span>
                                        </Col>
                                        <Col xxs={2} xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                                            <i className='bx bxs-check-circle' style={{ color: 'green' }}></i>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        <h5 style={{ color: 'var(--color-03)' }}>รอจัดส่งรายการ</h5>
                                    </Row>
                                    <Row className='text-center' style={{ padding: '0.5rem 0rem 0.5rem 0rem ' }}>
                                        <Col xxs={8} xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>หมูสามชั้นสไลด์</Col>
                                        <Col xxs={2} xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                                            <span style={{ padding: '0 0.5rem' }}>{count}</span>
                                        </Col>
                                        <Col xxs={2} xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>

                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Row>
    )
}
export default Order;