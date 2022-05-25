import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogPost from "../components/BlogCard";
import Head from "next/head";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/cl3lsjwz818z501xkey009jaa/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <h1> text </h1>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />np
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogPost
            title={post.title}
            author={post.author}
            coverPhoto={post.url}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
}
