import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostItem.module.css';
import { formatDate } from '../utils/dateUtils';

function BlogPostItem({ id, title, summary, date, url }) {
  const formattedDate = formatDate(date);

  return (
    <div className={styles.blogPostItem}>
      <Link to={url} className={styles.title}>
        <h2>{title}</h2>
      </Link>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
}

export default BlogPostItem;