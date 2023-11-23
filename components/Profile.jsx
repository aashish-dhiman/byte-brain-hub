import Card from "./Card";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <section className="w-full">
            <h1 className="head_text text-left">
                <span className="orange_gradient">{name} Profile</span>
            </h1>
            <p className="desc text-left">{desc}</p>

            <div className="mt-10 prompt_layout">
                {data.map((post) => (
                    <Card
                        key={post._id}
                        post={post}
                        createdAt={post.createdAt}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Profile;
