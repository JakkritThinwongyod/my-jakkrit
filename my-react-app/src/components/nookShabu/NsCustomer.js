import { Tab, Nav, Row, Col, Container } from 'react-bootstrap';
import DataFoods from "./Data/DataFoods";
import { useState, useEffect } from 'react';
import Foods from './components/Foods';
import Order from './components/Order';

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
            <Container fluid style={{ minHeight:'56rem',backgroundColor: "var(--color-01)" }}>
                <Row>
                    <Col xxl={10} style={{ padding: '0rem 1.5rem', }} >
                        <Tab.Container activeKey={key} onSelect={(e) => changeFoods(e)}>
                            <Row>
                                <Col>
                                    <Nav>
                                        <h1 style={{ color: 'var(--color-04)', padding: '1.5rem 1.5rem 1.5rem 1.5rem', fontWeight: '700' }}>MENU</h1>
                                        <Nav.Item className={key === 'Meat' ? 'nav-items active-tab' : 'nav-items'}>
                                            <Nav.Link eventKey="Meat" style={{ color: 'var(--color-03)' }}>เนื้อสัตว์</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={key === 'MeatBall' ? 'nav-items active-tab' : 'nav-items'}>
                                            <Nav.Link eventKey="MeatBall" style={{ color: 'var(--color-03)' }}>ลูกชิ้น</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={key === 'Vegetable' ? 'nav-items active-tab' : 'nav-items'}>
                                            <Nav.Link eventKey="Vegetable" style={{ color: 'var(--color-03)' }}>ผัก</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={key === 'Mushroom' ? 'nav-items active-tab' : 'nav-items'}>
                                            <Nav.Link eventKey="Mushroom" style={{ color: 'var(--color-03)' }}>เห็ด</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content style={{
                                        minHeight:'49rem',
                                        backgroundColor: 'var(--color-bg)',
                                        padding: '1.5rem',
                                        marginTop: '-1.5rem',
                                        marginBottom:'1.5rem',
                                        borderRadius: '0.5rem'
                                    }}>
                                        <Tab.Pane eventKey="Meat">
                                            <Container fluid>
                                                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    {foods.map((data, id) => {
                                                        return <Foods key={id} {...data} />
                                                    })}
                                                </Row>
                                            </Container>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="MeatBall">
                                            <Container fluid>
                                                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    {foods.map((data, id) => {
                                                        return <Foods key={id} {...data} />
                                                    })}
                                                </Row>
                                            </Container>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Vegetable">
                                            <Container fluid>
                                                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    {foods.map((data, id) => {
                                                        return <Foods key={id} {...data} />
                                                    })}
                                                </Row>
                                            </Container>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Mushroom">
                                            <Container fluid>
                                                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    {foods.map((data, id) => {
                                                        return <Foods key={id} {...data} />
                                                    })}
                                                </Row>
                                            </Container>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                    <Col xxl={2}>
                        <Order />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default NsCustomer;