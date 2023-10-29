import { IncomingMessage } from 'http';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import awsExports from '@/aws-exports';
import styles from '../styles/Home.module.css';

Amplify.configure({ ...awsExports, ssr: true });

// export async function getServerSideProps({ req }: { req: IncomingMessage }) {
//   const SSR = withSSRContext({ req });
  
//   try {
//     const response = await SSR.API.get('notYetApiName', '/posts', {
//       headers: {
//         Authorization: `Bearer ${await Auth.currentSession()}`,
//       },
//     });
    
//     return {
//       props: {
//         posts: response.data,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {},
//     };
//   }
// } TODO: fix "getServerSideProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetchingx

async function handleCreatePost(event:any) {
  event.preventDefault();

  const form = new FormData(event.target);
  
  try {
    // Create a new post using a REST API endpoint
    await API.post('yourRestApiName', '/posts', {
      body: {
        title: form.get('title'),
        content: form.get('content'),
      },
      headers: {
        Authorization: `Bearer ${await Auth.currentSession()}`,
      },
    });

    // Redirect to the posts page or update the UI as needed
  } catch (error) {
    console.log('Error creating a post', error);
  }
}

export default function Home({ posts = [] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Amplify + Next.js</h1>

        <p className={styles.description}>
          <code className={styles.code}>{posts.length}</code>
          posts
        </p>

        <div className={styles.grid}>
          {/* {posts.map((post) => (
            <div className={styles.card} key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))} */}

          <div className={styles.card}>
            <h3 className={styles.title}>New Post</h3>

            <Authenticator>
              <form onSubmit={handleCreatePost}>
                <fieldset>
                  <legend>Title</legend>
                  <input
                    defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
                    name="title"
                  />
                </fieldset>

                <fieldset>
                  <legend>Content</legend>
                  <textarea
                    defaultValue="I built an Amplify project with Next.js!"
                    name="content"
                  />
                </fieldset>

                <button>Create Post</button>
                <button type="button" onClick={() => Auth.signOut()}>
                  Sign out
                </button>
              </form>
            </Authenticator>
          </div>
        </div>
      </main>
    </div>
  );
}
