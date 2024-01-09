import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import {PostInterface} from './types/index';

function App() {

  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/posts/');
        const postsData = await res.json();
        
        setPosts(postsData.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  },[]);

  return (
    <>

      <div className='heading'>Posts :)</div>

      <div className='container'>
        {posts && posts.map((post: PostInterface) => (
          <div key={post.id}>
            <Card data={post}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
