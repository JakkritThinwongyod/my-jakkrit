import { Card, Col } from 'react-bootstrap';

const Foods = ({ title, image }) => {
    return (
        <Col xxs={4} xs={4} sm={4} md={4} lg={3} xl={3} xxl={2} style={{ padding: '0.2rem' }}>
            <Card style={{ border: 'none', margin: '0rem', padding: '0rem', width: '100%' }}>
                <Card.Body
                    style={{
                        margin: '0rem',
                        borderRadius: '0.5rem',
                        backgroundColor: 'var(--color-01)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Card.Img src={image} />
                    <Card.Title style={{ fontSize: '1rem', height: '2.5rem', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                        {title}
                    </Card.Title>
                    <button className='btn-add-order'>เพิ่ม</button>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Foods;