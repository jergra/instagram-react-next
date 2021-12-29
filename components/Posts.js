import {useState, useEffect} from 'react'
import faker from 'faker'
import Post from './Post';
import {
  onSnapshot,
  collection,
  query,
  orderBy
} from "@firebase/firestore";
import {db} from '../firebase'

const POSTS = [
    {
        id:'123',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'SUBSCRIBE AND LIKE'
    },
    {
        id:'124',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'SUBSCRIBE AND LIKE'
    },
    {
        id:'125',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'SUBSCRIBE AND LIKE'
    },
    {
        id:'126',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'SUBSCRIBE AND LIKE'
    },
]

function Posts() {
    //const posts = POSTS
    const [posts, setPosts] = useState([])

    useEffect(
        () => 
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')), 
                (snapshot) => {
                    setPosts(snapshot.docs)
                }
            ),
        [db]
    )
    

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}  >
                    <Post
                        key={post.id} 
                        id={post.id}
                        username={post.data().username}
                        userImg={post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption}
                    /> 
                    <br />
                </div>
            ))} 
        </div>
    )
}

export default Posts
