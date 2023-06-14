import {Button,Card} from 'react-bootstrap';
import DataFoods from "./Data/DataFoods";

const NsCustomer =()=>{
    return(
        <>
        <div>Customer</div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10'>
                        <div className='container-fluid'>
                            <div className='row'>
                                {DataFoods.map((foods,id)=>{
                                    return(
                                            <div key={id} className='col col-xl-3 col-xxl-2'>
                                                <Card style={{ width: '15.6rem' }} className='m-1'>
                                                    <Card.Img variant="top" style={{ width: '12.5rem' }} className='mx-auto' src={foods.image} />
                                                    <Card.Body>
                                                        <Card.Title style={{ fontSize: '1.5rem' }} className='text-center'>
                                                            {foods.title}
                                                        </Card.Title>
                                                        <Button variant="primary" style={{ width: '12.5rem' }}>เพิ่ม</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        
                                        )
                                })}
                            </div>
                        </div>
                    </div>
                <div className='col-2'>
                                <h1>Your Order</h1>
                </div>
            </div>
        </div>
            
        

        </>
    )
}
export default NsCustomer;