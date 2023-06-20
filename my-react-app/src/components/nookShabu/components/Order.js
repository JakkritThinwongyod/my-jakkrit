import { Button, Tab, Tabs } from 'react-bootstrap';
import ImgLogo from '../image/Logo-Nook-Shabu-200x200.png'
import { useState } from 'react';

const Order = () => {
    const [key, setKey] = useState("OrderList");
    const [count, setCount] = useState(1)

    return (
        <>
            <div className='text-center'>
                <img src={ImgLogo} alt="Logo" />
                <h1 style={{
                    color: 'red'
                }}>Your Order</h1>
                <Tabs activeKey={key} onSelect={(e) => setKey(e)} id="controlled-tab-example" >
                    <Tab eventKey="OrderList" title="รายการ">
                        <div style={{
                            height: "35rem",
                            padding: '1rem',
                            borderRadius: '0rem 0rem 0.5rem 0.5rem'
                        }}
                            className='text-center'>
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    height: '2rem',
                                    padding: '0.5rem'
                                }}>
                                    <h5 style={{ padding: '0rem 0.5rem' }}>โต๊ะที่ :</h5>
                                    <select style={{
                                        border: 'none'
                                    }}>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                    </select>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderBottom: '0.1rem solid black',
                                    padding: '0.5rem 0rem'
                                }}>
                                    <span>รายการ</span>
                                    <span>จำนวน</span>
                                </div>
                                <div style={{
                                    height: '25rem'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '0.5rem 0rem',
                                        border: 'none'
                                    }}>
                                        <span>หมูสามชั้นสไลด์</span>
                                        <div>
                                            <Button variant='danger' size='sm' onClick={() => setCount((count) => count - 1)}>-</Button>
                                            <span style={{ padding: '0 0.5rem' }}>{count}</span>
                                            <Button variant='danger' size='sm' onClick={() => setCount((count) => count + 1)}>+</Button>
                                        </div>
                                    </div>
                                </div>
                                <Button variant='danger' size='lg' style={{ width: '10rem' }}>สั่งอาหาร</Button>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Success" title="สำเร็จ">
                        <div style={{
                            height: "35rem",
                            padding: '1rem',
                            borderRadius: '0rem 0rem 0.5rem 0.5rem'
                        }}
                            className='text-center'>
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    height: '2rem',
                                    padding: '0.5rem'
                                }}>
                                    <h5 style={{ padding: '0rem 0.5rem' }}>โต๊ะที่ : 1</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderBottom: '0.1rem solid darkgrey',
                                    padding: '0.5rem 0rem'
                                }}>
                                    <span>รายการ</span>
                                    <span>จำนวน</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '0.5rem 0rem',
                                    border: 'none',
                                    borderBottom: '0.1rem solid darkgrey',
                                }}>
                                    <span>หมูสามชั้นสไลด์</span>
                                    <div>
                                        <span style={{ padding: '0 0.5rem' }}>{count}</span>
                                    </div>
                                </div>
                                <div>
                                    <span style={{ color: "darkgrey" }}>รอจัดส่งรายการ</span>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '0.5rem 0rem',
                                        border: 'none',
                                        borderBottom: '0.1rem solid darkgrey',
                                    }}>
                                        <span>หมูสามชั้นสไลด์</span>
                                        <div>
                                            <span style={{ padding: '0 0.5rem' }}>{count}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
export default Order;