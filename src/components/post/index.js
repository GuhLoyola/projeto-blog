import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

async function getPost(id) {
    const response = await fetch(`http://localhost:3000/json/post-${id}.json`)
    return await response.json()
}

const PostDetails = () => {
    const [post, setPost] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)
            setPost(post.data)
        }

        fetchData()
    })

    return (
        <section>
            <Link to='/'>Voltar para os posts</Link>
            <div>
                <img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.text}</p>
            </div>
        </section>
    )
}

export { PostDetails }