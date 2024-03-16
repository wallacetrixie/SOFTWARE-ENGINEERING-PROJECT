import styles from "./postForm.module.css";

function PostForm({ handlePost }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePost();
  };
  return (
    <div className={styles.postForm}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <span>Post A Job Offer</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.left}>
            <div className={styles.formGroup}>
              <label htmlFor="jobTitle">Job Title:</label>
              <input type="text" id="jobTitle" name="jobTitle" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="jobDescription">Job Description:</label>
              <textarea id="jobDescription" name="jobDescription" rows={10}required />
            </div>
            <div className="buttons">
            <button type="submit">Post</button>
            <button type="close">Cancel</button>
            </div>
            
          </div>
          <div className={styles.right}>
            <div className={styles.formGroup}>
              <label htmlFor="jobDescription"> Choose the category:</label>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="jobDescription">Choose the Duration:</label>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="jobDescription">Choose the Experiennce:</label>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="jobDescription">Choose your budget:</label>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default PostForm;
