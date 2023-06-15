import { Button, Card } from 'react-bootstrap';

const Foods = ({ title, image }) => {
    return (
        <div className='col col-xl-3 col-xxl-2'>
            <Card style={{ width: '15.6rem' }} className='m-1'>
                <Card.Img variant="top" style={{ width: '12.5rem' }} className='mx-auto' src={image} />
                <Card.Body className='mx-auto'>
                    <Card.Title style={{ fontSize: '1.5rem' }} className='text-center'>
                        {title}
                    </Card.Title>
                    <Button variant="danger" style={{ width: '12.5rem' }} >เพิ่ม</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Foods;