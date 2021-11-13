import React, { useRef } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const AddProduct = () => {

    const nameRef = useRef();
    const descriptionRef = useRef()
    const imgRef = useRef()
    const priceRef = useRef()
  
      const handleAddBike = (e) =>{
          const name = nameRef.current.value;
          const description = descriptionRef.current.value;
          const img = imgRef.current.value;
          const price = priceRef.current.value;
          const newBike = {name: name, description: description, img: img, price:price}
          console.log(newBike);

          fetch('https://limitless-woodland-93842.herokuapp.com/bikes',{
              method: 'POST',
              headers: {
                  'content-type' : 'application/json'
              },
              body: JSON.stringify(newBike)
          })
          .then(res=> res.json())
          .then(data => console.log(data))
          window.confirm('Are you sure you want to Add a new plan')
          window.location.reload()

  }
    return (
            <div className="shadow-lg rounded p-5">
            <div>
                <div className="row ">
                <h2 className="text-center">Add A New Bike</h2>
                </div>
                <div>
                <Form.Control 
                    ref={nameRef}
                    style={{marginLeft:"120px"}} 
                    className="w-75" 
                    name="name" 
                    size="sm" 
                    type="text" 
                    placeholder="Bike Name" />
                    <br/>
                    <Form.Control 
                    ref={imgRef}
                    style={{marginLeft:"120px"}} 
                    className="w-75" 
                    name="email" 
                    size="sm" type="text" 
                    placeholder="Bike Image Url here" />
                    <br/>
                    <Form.Control 
                    ref={priceRef}
                    style={{marginLeft:"120px"}} 
                    className="w-75" 
                    name="email" 
                    size="sm" type="text" 
                    placeholder="Bike Price" />
                    <br/>
                    <FloatingLabel 
                    style={{marginLeft:"120px"}} 
                    className="w-75   mb-5" 
                    name="comments" 
                    label="Bike Description">
                    <Form.Control
                    ref={descriptionRef}
                    as="textarea"
                    placeholder=""
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <button style={{marginLeft:"450px"}} className="button mb-4" onClick={handleAddBike}>Submit</button>
                </div>
           
            </div>
        </div>
    );
};

export default AddProduct;