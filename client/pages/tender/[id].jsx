import styles from '../../styles/Detail.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const Detail = ({ post }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Title</h1>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.overview}>
          <h2 className={styles.overviewText}>Overview</h2>
          <ul className={styles.overviewList}>
            <li className={styles.overviewItem}>
              <b>Category: </b>
              {post.categories}
            </li>
            <li className={styles.overviewItem}>
              <b>Phone Number: </b>
            </li>
            <li className={styles.overviewItem}>
              <b>Closing Date: </b>
              {post.deadline}
            </li>
            <li className={styles.overviewItem}>
              <b>Posted Date: </b>
              {post.createdAt}
            </li>
            <li className={styles.overviewItem}>
              <b>Source: </b>AAU
            </li>
          </ul>
        </div>
        <div className={styles.desc}>
          <h1 className={styles.descHeading}>{post.deadline}</h1>
          <h1 className={styles.descHeading}>የኦዲት ጨረታ ማስታወቂያ</h1>
          <post className={styles.descBody}>{post.desc}</post>
        </div>
      </div>
      ;
    </>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/tenders/${params.id}`);
  return {
    props: { post: res.data },
  };
};

export default Detail;
