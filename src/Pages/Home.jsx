import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div >
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
max-w-6xl p-2 mx-auto gap-6 min-h-[80vh]'>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <p>No Data Found</p>
        </div>
      )}
    </div>
  )
};

export default Home;