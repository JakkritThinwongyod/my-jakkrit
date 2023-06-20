import { Card } from 'react-bootstrap';

const Foods = ({ title, image }) => {
    return (
        <Card style={{ width: '14.375rem', margin: '0.5rem',border:'none',backgroundColor:'var(--color-01)' }}>
            <Card.Body className='d-flex flex-column align-items-center'>
                <Card.Img variant="top" style={{ width: '12.5rem', }} src={image} />
                <Card.Title style={{ fontSize: '1.5rem' }} className='text-center'>
                    {title}
                </Card.Title>
                <button className='btn-add-order'>เพิ่ม</button>
            </Card.Body>
        </Card>
    )
}
export default Foods;