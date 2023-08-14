import Contact from '../Contact';

const ContactList = ({ posts ,fetchPosts, errorMsg , deleteContact }) => {

  return (
    <div>
        {posts.length > 0
        ? posts.map((post) => (
            <Contact key={post.id} post={post} deleteContact={deleteContact} />
          ))
        : null}
        {errorMsg ? <h2>{errorMsg}</h2>: null}

    </div>
  )
}

export default ContactList