import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const POSTS_QUERY = gql`
    query {
        allPosts {
            title
            body
            Author {
                name
            }
        }
    }
`;

const Home = () => {

    const { loading, error, data } = useQuery(POSTS_QUERY);

    // const [posts, setPosts] = useState([
    //     { title: "Software development", body: "The best programming...", author: "Thabo", id: 1 },
    //     { title: "Basic accounting rules", body: "Reconciliation is...", author: "Thabang", id: 2 },
    //     { title: "Soccer tournament", body: "Made it to the final...", author: "Nkosi", id: 3 }
    // ]);

    return (
        <div className="home">
            {/* {posts.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                </div>
            ))} */}
            {error && <p>Error :(</p>}
            {loading && <p>Loading...</p>}
            {data && Object.values(data).map(posts => (
                posts.map((post, index) => (
                    
                    <div className="blog-preview" key={index}>
                        <h2>{post.title}</h2>
                        <p>Written by {post.Author.name}</p>
                    </div>
                ))
            ))}
        </div>
    );
};

export default Home;