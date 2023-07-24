import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

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
        <Section>
            {posts.map((post, index) =>
                <div key={index}>
                    <StyledLink to={`/post/${post.id}`}>
                        <Img src={post.image} alt="" />
                        <H2>{post.title}</H2>
                    </StyledLink>
                </div>
            )}
        </Section>
    )
}

const H2 = styled.h2`

    background-color: #6495ed;
    color: white;
    padding: 10px 20px;
    margin: 15px;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #286ce6;
        transform: scale(1.1);
    }
    
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Section = styled.section`
    display:flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Img = styled.img`
    width: 500px;
`

export { PostsList }