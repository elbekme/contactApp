import { Button } from "react-bootstrap";

const Contact = ({ post, deleteContact }) => {
  
  return (
        <div className='border  d-flex justify-content-left mb-4'>
            <div className="w-75 h-75 d-flex justify-content-between align-items-center">
            <h3 className="w-25 d-flex justify-content-left">{post.name}</h3>
            <h3 className="w-25 d-flex justify-content-left">{post.female}</h3>
            <h3 className="w-25 d-flex justify-content-left">{post.phone}</h3>
            </div>
            <div className="w-25 h-25 d-flex justify-content-end align-items-center">
                <Button className="btn btn-warning mx-3">Edit</Button>
                <Button className="btn btn-danger" onClick={() => deleteContact=(post.id)}>Delete</Button>
            </div>
        </div>
  )
}

export default Contact