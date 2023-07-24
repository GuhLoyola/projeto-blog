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
            <StyleLink to='/'>Voltar para os posts</StyleLink>
            <div>
                <Img src={post.image} alt={post.title} />
                <H2>{post.title}</H2>
                <p>{post.text}</p>
            </div>
        </Section>
    )
}

const Section = styled.section`
    background-color: blueviolet;
    ${props => props.lightgray && css`
        background-color: lightgray;
    `}
    padding: 50px;
`

const Img = styled.img`
    width: 100%;
    margin-top: 30px;
`

const H2 = styled.h2`
    margin: 15px 0;
`

const StyleLink = styled(Link)`

    padding: 10px 20px;
    margin: 10px 0;
    background-color: blueviolet;
    color: white;
    border-radius: 15px;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover  {
        background-color: #6f1abd;
    }
    
`

export { PostDetails }