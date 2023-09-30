import React from 'react'
import logo from '../images/mylogo.png';

const AddBook = () => {
    return (
        <div>
            <div className='col-md-6 mx-auto my-5 ' >
                <div className="card-body shadow border rounded-2">
                    <div className="card px-4 py-4">
                        <img src={logo} alt="" />
                        <h2 className='text-center blueclass text-white my-3 rounded-1'>ADD YOUR BOOK</h2>
                        <form action="submit">
                            <label>Book Name</label>
                            <input type='text' className='form-control mb-4' name='bookname' />
                            <label>Author</label>
                            <input type='text' className='form-control mb-4' name='author' />
                            <label>Publisher</label>
                            <input type='text' className='form-control mb-4' name='publisher' />
                            <label>Language: &nbsp; &nbsp; </label>
                            <input type="radio" className=' mb-4' name='language' /> English&nbsp;&nbsp; &nbsp;
                            <input type="radio" className='' name='language' /> Hindi<br />
                            <select className="form-select">
                                <option selected>Book Category</option>
                                <option value="1">Genre Fiction</option>
                                <option value="2">Literary Fiction</option>
                                <option value="3">Mainstream Fiction.  </option>
                            </select><br />
                            <label>Publish Date</label>
                            <input type='date' className='form-control mb-4' name='date' />
                            <label>Price</label>
                            <input type='number' className='form-control mb-4' name='price' />
                            <div class="mb-3">
                                <label for="formFile" className="form-label">Choose your file</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                            <button type='submit' className='btn blueclass w-100 text-white my-2 '>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook
