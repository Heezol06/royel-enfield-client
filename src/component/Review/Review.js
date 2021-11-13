import React, { useRef} from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth(); 
    // const [reviewData, setReviewData] = useState({})

        const nameRef = useRef();
      const emailRef = useRef()
      const commentRef = useRef()
    
        const handleAddReview = (e) =>{
            const name = nameRef.current.value;
            const email = emailRef.current.value;
            const comment = commentRef.current.value;
            const newReview = {name: name, email: email, comment: comment}
            console.log(newReview);

            fetch('https://limitless-woodland-93842.herokuapp.com/addReview',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newReview)
            })
            .then(res=> res.json())
            .then(data => console.log(data))
            window.confirm('Are you sure you want to add a review')
            window.location.reload()

    }
    return (
        <div >
            <div>
                <div className="row ">
                <h2 className="text-center">Share Your Review</h2>
                </div>
                <div>
                <Form.Control 
                    ref={nameRef}
                    style={{marginLeft:"120px"}} 
                    className="w-75" 
                    name="name" 
                    size="sm" 
                    type="text" 
                    value={user.displayName} />
                    <br/>
                    <Form.Control 
                    ref={emailRef}
                    style={{marginLeft:"120px"}} 
                    className="w-75" 
                    name="email" 
                    size="sm" type="text" 
                    value={user.email} />
                    <br/>
                    <p className="text-center  ">Share your opinion with us.</p>
                    <FloatingLabel 
                    style={{marginLeft:"120px"}} 
                    className="w-75   mb-5" 
                    name="comments" 
                    label="Comments">
                    <Form.Control
                    ref={commentRef}
                    name="comment"
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <button style={{marginLeft:"450px"}} className="button mb-4" onClick={handleAddReview}>Submit</button>
                </div>
            </div>
            </div>
    );
};

export default Review;