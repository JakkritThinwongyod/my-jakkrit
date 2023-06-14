import { Tab, Tabs } from 'react-bootstrap';
import DataFoods from "./Data/DataFoods";
import { useState , useEffect } from 'react';
import Foods from './components/Foods';

const NsCustomer = () => {

    const [key, setKey] = useState("Meat");
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const filterFoods = DataFoods.filter((element) => {
            return element.type === key;
        });

        setFoods(filterFoods);
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
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10'>
                        <h1>MENU</h1>
                        <Tabs id="controlled-tab-example" activeKey={key} onSelect={(e) => changeFoods(e)} className="mb-3">
                            <Tab eventKey="Meat" title="เนื้อสัตว์">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        {foods.map((data, id) => {
                                            return <Foods key={id} {...data} />
                                        })}
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="MeatBall" title="ลูกชิ้น">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        {foods.map((data, id) => {
                                            return <Foods key={id} {...data} />
                                        })}
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Vegetable" title="ผัก">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        {foods.map((data, id) => {
                                            return <Foods key={id} {...data} />
                                        })}
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Mushroom" title="เห็ด">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        {foods.map((data, id) => {
                                            return <Foods key={id} {...data} />
                                        })}
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>

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