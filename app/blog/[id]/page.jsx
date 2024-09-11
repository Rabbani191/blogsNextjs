import { notFound } from "next/navigation";

const generateStaticParams = async () => {
  console.log("static params is executed");

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  console.log("posts are downloaded in generatestatic param");

  return posts.map((post) => {
    id: String(post.id);
  });
};

const fetchPosts = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    console.log("fetch method executed for id :", id, !post.title);
    if (!post.title) {
      console.log("here come the error");

      notFound();
    }

    return post;
  } catch (error) {
    notFound();
  }
};

const Page = async ({ params }) => {
  const { id } = params;
  const post = await fetchPosts(id);
  return (
    <div>
      <h1>Individual Page: {id}</h1>
      <p>{post.title}</p>
    </div>
  );
};
export { generateStaticParams };
export default Page;
// export const dynamicParams = false;
