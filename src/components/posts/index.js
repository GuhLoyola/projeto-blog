import { useEffect, useState } from 'react'

async function getPosts() {
    const response = await fetch('http://localhost:3000/json/posts.json')
    return await response.json()
}

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const posts = await getPosts()
            setPosts(posts.data)
        }

        fetchData()
    }, [])

    return (
        <section>
            {posts.map((post, index) =>
                <div key={index}>
                    <img src={post.image} alt="" />
                    <h2>{post.title}</h2>
                </div>
            )}
        </section>
    )
}

export { PostsList }