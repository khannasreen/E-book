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
    return useData.map((user) => (
       <div className="col-md-3 mb-4">
            <div className="card">
                <img className="card-img-top" src={user.image} alt="" />
                <div className="card-body">
                    <h4>{user.volumeInfo.title}</h4>
                    <h3>{user.volumeInfo.subtitle}</h3>
                    <h2>{user.publishedDate}</h2>
                    <h6>{user.volumeInfo.description}</h6>
                    
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

