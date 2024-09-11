const Page = async ({}) => {
  const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // console.log("response from the API is :", posts);
  return <div>
    <h1>Blogs</h1>
    {posts.map((post, index) => <p key = {post.id} > {index +1}. {post.title}</p>)}
  </div>
}

export default Page
export const revalidate = 30;