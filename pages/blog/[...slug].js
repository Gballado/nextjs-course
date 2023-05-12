// Catches anyting after blog and stores them in an array variable called 'slug'

import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
      
    </div>
  );
}

export default BlogPostsPage;
