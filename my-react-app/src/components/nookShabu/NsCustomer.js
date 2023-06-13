import DataFoods from "./Data/DataFoods";
const NsCustomer =()=>{
    return(
        <>
        <div>Customer</div>
        <p>{DataFoods.map((foods,id)=>{
            return(
                <div key={id}> 
                    <img src={foods.image}/>
                    <p>{foods.title}</p>
                    <p>{foods.type}</p>
                    <p>{foods.show}</p>
                    <p>{foods.total}</p>
                </div>
            )
        })}</p>
        </>
    )
}
export default NsCustomer;