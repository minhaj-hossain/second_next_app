import PostCard from "@/components/PostCard";





const PostPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();

    console.log(posts)

    return (
        <div className="container mx-auto">

            {
                posts.map(post => <PostCard key={post.id} posts={post} />)
            }

        </div>
    );
};

export default PostPage;