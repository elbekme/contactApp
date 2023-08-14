import { useState } from "react";
import { Button } from "react-bootstrap";

const AddContact = ({addContacts,setShow}) => {
    const [contact,setContact] = useState ({
        name: '',
        female: '',
        phone: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addContacts(contact);
        setContact({
            name: '',
            female: '',
            phone:'',
        });
        setShow(false);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label" htmlFor="name">First Name</label>
                <input type="text" name='name' id='name' className="form-control"
                value={contact.name} onChange={(e)=> setContact({...contact, name: e.target.value})}/>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="female">Last Name</label>
                <input type="text" name='female' id='female' className="form-control"
                value={contact.female} onChange={(e)=> setContact({...contact, female: e.target.value})}/>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="number">Phone Number</label>
                <input type="text" name='number' id='number' className="form-control"
                value={contact.phone} onChange={(e)=> setContact({...contact, phone: e.target.value})}/>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-2">
            <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
            <Button variant="primary" type='submit'>Save</Button>
            </div>
        </form>
    </div>
  )
}

export default AddContact