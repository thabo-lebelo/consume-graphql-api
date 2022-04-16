// import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const BLOGS_QUERY = gql`
    query {
        allBlogs {
            title
            body
            Author {
                name
            }
        }
    }
`;

const Home = () => {

    const { loading, error, data } = useQuery(BLOGS_QUERY);

    // const [blogs, setBlogs] = useState([
    //     { title: "Software development", body: "The best programming...", author: "Thabo", id: 1 },
    //     { title: "Basic accounting rules", body: "Reconciliation is...", author: "Thabang", id: 2 },
    //     { title: "Soccer tournament", body: "Made it to the final...", author: "Nkosi", id: 3 }
    // ]);

    return (
        <div className="home">
            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}
            {error && <p>Error :(</p>}
            {loading && <p>Loading...</p>}
            {data && Object.values(data).map(blogs => (
                blogs.map((blog, index) => (
                    
                    <div className="blog-preview" key={index}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.Author.name}</p>
                    </div>
                ))
            ))}
        </div>
    );
};

export default Home;