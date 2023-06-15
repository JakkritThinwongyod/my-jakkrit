import { Button, Card, Tab, Tabs } from 'react-bootstrap';
import ImgLogo from '../image/Logo-Nook-Shabu-200x200.png'
import { useState } from 'react';

const Order = () => {
    const [key, setKey] = useState("OrderList");

    return (
        <>
            <img src={ImgLogo} alt="Logo" />
            <h1>Your Order</h1>
            <Tabs activeKey={key} onSelect={(e) => setKey(e)} id="controlled-tab-example">
                <Tab eventKey="OrderList" title="รายการ">
                    <Card style={{ height: "35rem" }} className='text-center'>
                        <Card.Body>
                            <Card.Text style={{ display: 'flex', justifyContent: 'flex-end' }}>โต๊ะที่ : 01</Card.Text>
                            <Card.Title style={{ display: 'flex', justifyContent: 'space-between' }}><span>รายการ</span> <span> จำนวน</span></Card.Title>
                            <Card.Text style={{ height: '25rem',display:'flex',justifyContent:'space-between' }}>
                                <div>
                                    <span>หมูสามชั้นสไลด์ </span>
                                </div>
                                <div>
                                    <Button variant='danger' size='sm'>-</Button>
                                    <span style={{padding: '0 0.5rem'}}>3</span>
                                    <Button variant='danger' size='sm'>+</Button>
                                </div>
                            </Card.Text>
                            <Button variant='danger' size='lg' style={{ width: '15rem' }}>สั่งอาหาร</Button>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="Success" title="สำเร็จ">
                    <div>
                        <div>โต๊ะที่ : 01</div>
                        <div>
                            <span>รายการ </span>
                            <span>จำนวน</span>
                            <div>
                                <span>หมูสามชั้นสไลด์ </span>
                                <span>3</span>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <span>รอจัดส่งรายการ</span>
                            <div>
                                <span>หมูสามชั้นสไลด์ </span>
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </>
    )
}
export default Order;