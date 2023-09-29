import React, {useEffect, useState} from 'react';
import book from '../images/book1.jpg';
// import banner2 from '../images/banner-2.png';
// import banner3 from '../images/banner-3.png';

const Home = () => {

  const [useData, setData] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=bookss&key=AIzaSyAcV3GVBYOTfOkWqITQg7PUeuDgoXvIcto')
   console.log(res.status);
   if(res.status === 200){
    const data = await res.json();
    console.log(data);
    setData(data.items);
   }
  };
  useEffect(() => {
    fetchUserData()
  }, []);

  const displayData = () => {
    return useData.map((laptop) => (
       <div className="col-md-3 mb-4">
            <div className="card">
                <img className="card-img-top" src={laptop.image} alt="" />
                <div className="card-body">
                    <h4>{laptop.volumeInfo.title}</h4>
                    <h3>{laptop.volumeInfo.subtitle}</h3>
                    <h2>{laptop.publishedDate}</h2>
                    <h6>{laptop.volumeInfo.description}</h6>
                    
                </div>
            </div>
        </div>
    ));
};


  return (
    <>
      {/* Section banner start */}
      <section className='banner'>
        <div className='content '>
          <h1 className='text-center text-white pt-5'> Find your book of choice</h1>
          <p className='text-center text-white px-5 mx-5'>"Discovering your book of choice at Ebook Emporium is like embarking
            on a literary treasure hunt.  <br />With an extensive digital library at your fingertips, you can explore a
            world of genres and authors until you stumble upon  <br />that perfect book,
            waiting to transport you to
            another realm or enlighten your mind."</p>
          <a href="#" className='btn btn-primary text-center'>Get more books</a>
        </div>
      </section>
      {/* section banner finish */}

      {/* Section featured books start */}
      <section className='container my-5'>

        <h1 className='heading'> <span>Featured Books</span></h1>
        <h1 className='heading1'> <span>Featured Books</span></h1>
 </section>
      {/* section featured books finish */}
      <div className="container">
                <div className="row">{displayData()}</div>
            </div>

      



    </>
  )
}

export default Home

// sir code
// import React, { useEffect, useState } from "react"
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";



// const ManageUser = () => {
//     const [useData, setUserData] = useState([]);


//     const fetchUserData = async () => {
//         const res = await fetch('http://localhost:5000/user/getall');
//         console.log(res.status);

//         if (res.status === 200) {
//             const data = await res.json();
//             console.log(data);
//             setUserData(data);
//         }
//     };
//     useEffect(() => {
//         fetchUserData()
//     }, []);


//     const deleteUser = async (id) => {
//         toast.promise(
//             fetch("http://localhost:5000/user/delete/" + id, { method: "DELETE" }),
//             {
//                 loading: "Deleting...",
//                 success: () => {
//                     fetchUserData();
//                     return <b>User Deleted!</b>;
//                 },
//                 error: <b>Could not delete.</b>,
//             }
//         );
//     };


//     return (
//         <div>
//             <div className='container py-5'>
//                 <h3 className='text-center'>This is manage user</h3>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Father Name</th>
//                             <th>Email</th>
//                             <th>Password</th>
//                             <th>Action</th>
//                             <th>View</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             useData.map((user) => {
//                                 return <tr>
//                                     <td>{user._id}</td>
//                                     <td>{user.name}</td>
//                                     <td>{user.fathername}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.password}</td>
//                                     <td><button
//                                         onClick={() => {
//                                             deleteUser(user._id);
//                                         }}
//                                         className="btn btn-danger"
//                                     >
//                                         Delete</button></td>

//                                     <td>
                        
//                                         <Link to={'/updateuser/' +user._id} className="btn btn-primary">
//                                             View User
//                                         </Link>
//                                     </td>
//                                 </tr>

//                             })
//                         }


//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default ManageUser

// sir code end
