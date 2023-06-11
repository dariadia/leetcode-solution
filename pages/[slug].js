import { getAllPosts, getDocBySlug } from '~/lib/posts';
import markdownToHtml from '~/lib/markdown';
import Layout from '~/components/Layout';

export default function Doc({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>;
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      };
    }),
    fallback: 'blocking'
  };
}
