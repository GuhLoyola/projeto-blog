import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { styled, css } from 'styled-components'

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
        <Section lightgray>
            <Link to='/'>Voltar para os posts</Link>
            <div>
                <Img src={post.image} alt={post.title} />
                <H2>{post.title}</H2>
                <p>{post.text}</p>
            </div>
        </Section>
    )
}

const Section = styled.section `
    background-color: blueviolet;
    ${props => props.lightgray && css `
        background-color: lightgray;
    `}
    padding: 50px;
`

const Img = styled.img`
    width: 100%;
`

const H2 = styled.h2`
    margin: 15px 0;
`

export { PostDetails }