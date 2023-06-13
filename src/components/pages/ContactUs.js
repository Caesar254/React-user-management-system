import React from 'react'

const  ContactUs = () => {
  return (
    <div className='container'>
        <h2>ContactUs</h2>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 ">
    <textarea className="form-control" id="query"></textarea>
    <label className="form-check-label" for="exampleCheck1">Your Query</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
    </div>
  )
}

export default ContactUs 