import { firestore } from '../firebase';
import { useFormInput } from '../hooks';
import { useHistory } from 'react-router-dom';

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    firestore.collection('posts').add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
    history.push('/');
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form id="create-post-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} required />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} required />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content} required></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
