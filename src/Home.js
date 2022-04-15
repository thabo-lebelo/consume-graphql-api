import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "Software development", body: "The best programming...", author: "Thabo", id: 1 },
        { title: "Basic accounting rules", body: "Reconciliation is...", author: "Thabang", id: 2 },
        { title: "Soccer tournament", body: "Made it to the final...", author: "Nkosi", id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;