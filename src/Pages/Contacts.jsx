import { useState, useEffect} from "react";
import ContactList from "../components/ContactList/ContactList";
import { Button } from 'react-bootstrap';
import ModalComp from "../components/Modal";
import AddContact from "../components/AddContact";
import axios from 'axios';

const Contacts = () => {
    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false);
    const [loading,  setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');


    useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = async (posts) => {
      setLoading(true);
      try {
        const res = await axios('http://localhost:3000/contacts');
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        setErrorMsg(err.message);
        setLoading(false);
      }
    };

    const addContacts = async (contact) => {
      try{
        const res = await axios.post('http://localhost:3000/contacts', contact);
        console.log(res.data);
        fetchPosts();
      } catch(err){
          console.log(err);
      }
  };

  const deleteContact = async (id) =>{
    if(window.confirm('Are you sure you want to delete')){
      try{
        const res = await axios.delete(`http://localhost:3000/contacts/${id}`);
        console.log(res.data);
        fetchPosts();
      } catch(err){
        console.log(err);
      }
    }
  };

  return (
    <div className="container ">
        <div className="row mb-5 text-center">
            <h1 className=" pt-2 pb-2 ">Contacts</h1>
            <Button onClick={() => setShow(true)}>Add Contact</Button>
        </div>
        <ModalComp show={show} setShow={setShow}>
            <AddContact  addContacts={addContacts} setShow={setShow}/>
        </ModalComp>
        <ContactList fetchPosts={fetchPosts} loading={loading} errorMsg={errorMsg} deleteContact={deleteContact} posts={posts}/>
        </div>
  )
}

export default Contacts