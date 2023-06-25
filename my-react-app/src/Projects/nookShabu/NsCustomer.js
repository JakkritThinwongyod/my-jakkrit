import { Tab, Nav, Row, Col, Container, Image, Button } from 'react-bootstrap';
import DataFoods from "./Data/DataFoods";
import { useState, useEffect } from 'react';
import Foods from './components/Foods';
import Order from './components/Order';
import ImgLogo from './image/Logo-Nook-Shabu-200x200.png'


const NsCustomer = () => {
    const [key, setKey] = useState("Meat");
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const filterFoods = DataFoods.filter((element) => {
            return element.type === key;

        });
        setFoods(filterFoods);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeFoods = (selectKey) => {
        setKey(selectKey);

        const filterFoods = DataFoods.filter((element) => {
            return element.type === selectKey;
        });

        setFoods(filterFoods);

    }

    return (
        <>
            <Container fluid style={{ minHeight: '56rem', backgroundColor: 'var(--color-01)', paddingBottom: '2rem' }}>
                <Row>
                    <Col xxs={12} xs={12} sm={12} md={12} lg={12} xl={10} xxl={10} style={{ padding: '0rem 1.5rem', }} >
                        <Tab.Container activeKey={key} onSelect={(e) => changeFoods(e)}>
                            <Row style={{ marginTop: '1rem' }}>
                                <Col xxs={12} xs={12} sm={12} md={2} lg={2} xl={2} xxl={2}>
                                    <Row>
                                        <Col xxs={4} xs={4} sm={4} md={0} lg={0} xl={0} xxl={0}>
                                            <Image src={ImgLogo} style={{ width: '5rem', height: '5rem' }} className='mobile-show' />
                                        </Col>
                                        <Col xxs={4} xs={4} sm={4} md={12} lg={12} xl={12} xxl={12}>
                                            <h1 style={{ color: 'var(--color-04)', paddingTop: '1.5rem', fontWeight: '700' }} className='text-center'>MENU</h1>
                                        </Col>
                                        <Col xxs={4} xs={4} sm={4} md={0} lg={0} xl={0} xxl={0}>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xxs={12} xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
                                    <Nav>
                                        <Nav.Item className={key === 'Meat' ? 'nav-items active-items' : 'nav-items'}>
                                            <Nav.Link eventKey="Meat" style={key === 'Meat' ? { color: 'var(--color-04)' } : { color: 'var(--color-03)' }}>เนื้อสัตว์</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={key === 'MeatBall' ? 'nav-items active-items' : 'nav-items'}>
                                            <Nav.Link eventKey="MeatBall" style={key === 'MeatBall' ? { color: 'var(--color-04)' } : { color: 'var(--color-03)' }}>ลูกชิ้น</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={key === 'Vegetable' ? 'nav-items active-items' : 'nav-items'}>
                                            <Nav.Link eventKey="Vegetable" style={key === 'Vegetable' ? { color: 'var(--color-04)' } : { color: 'var(--color-03)' }}>ผัก</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={key === 'Mushroom' ? 'nav-items active-items' : 'nav-items'}>
                                            <Nav.Link eventKey="Mushroom" style={key === 'Mushroom' ? { color: 'var(--color-04)' } : { color: 'var(--color-03)' }}>เห็ด</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Tab.Content className='food-content' style={{ backgroundColor: 'var(--color-bg)', padding: '1rem', marginBottom: '1.5rem', borderRadius: '0.5rem' }}>
                                    <Tab.Pane eventKey="Meat">
                                        <Container fluid >
                                            <Row style={{ display: 'flex', justifyContent: 'flex-start' }} >
                                                {foods.map((data, id) => {
                                                    return <Foods key={id} {...data} />
                                                })}
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="MeatBall">
                                        <Container fluid>
                                            <Row style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                                {foods.map((data, id) => {
                                                    return <Foods key={id} {...data} />
                                                })}
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Vegetable">
                                        <Container fluid>
                                            <Row style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                                {foods.map((data, id) => {
                                                    return <Foods key={id} {...data} />
                                                })}
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Mushroom">
                                        <Container fluid>
                                            <Row style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                                {foods.map((data, id) => {
                                                    return <Foods key={id} {...data} />
                                                })}
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Row>
                        </Tab.Container>
                    </Col>
                    <Col sm={12} md={12} lg={12} xl={2} xxl={2} className='desktop-show'>
                        <Order />
                    </Col>
                    <Col className='mobile-show'>
                        <div style={{position: 'fixed', bottom: '0rem', right: '0', left: '0', height: '4rem',backgroundColor: 'var(--color-bg)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Button variant='dark' href='/Order' style={{ padding: '0.5rem', width: '55%', height: '3rem', fontSize: '1.2rem' }}>รายการอาหาร</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default NsCustomer;