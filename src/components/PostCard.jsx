import Link from "next/link";

const PostCard = ({ posts }) => {


    const { userId, id, title, body } = posts;




    return (
        <div className="mt-10">
            <div className="group w-full  rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ">

                {/* Top meta info */}
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span>User ID: <span className="text-cyan-400">{userId}</span></span>
                    <span>Post ID: <span className="text-blue-400">{id}</span></span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {title}
                </h2>

                {/* Body */}
                <p className="text-slate-400 leading-relaxed text-sm">
                    {body}
                </p>

                <Link href={`/posts/${id}`} className="text-red-800">Check details</Link>

            </div>
        </div>
    );
};

export default PostCard;