import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const ADD_BLOG = gql`
    mutation AddPost($title: String!, $body: String!, $author_id: ID!) {
        createBlog(title: $title, body: $body, author_id: $author_id) {
            Author {
                name
            }
        }
    }
`;

const Create = () => {

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author_id, setAuthor] = useState(1);
    const [addPost, { data, loading, error }] = useMutation(ADD_BLOG);

    return (
        <div className="create">
            <h2>Add a New blog</h2>
            <form onSubmit={e => {
                e.preventDefault();
                addPost({ variables: { title, body, author_id } });
                history.push('/'); // got to home page
            }}>
                <label>Blog title:</label>
                <input type="text" required value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Blog body:</label>
                <textarea required value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author_id}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="1">Thabo</option>
                    <option value="2">Thabang</option>
                    <option value="3">Nkosi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
};

export default Create;