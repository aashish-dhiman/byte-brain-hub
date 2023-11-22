import Feed from "@components/Feed";

export default function Home() {
    return (
        <section className="w-full flex-center flex-col">

            <h1 className="head_text text-center">
                Unleash the Power of
                <br />
                <span className="orange_gradient text-center">
                    {" "}
                    Connecting Minds & Ideas
                </span>
            </h1>
            <p className="desc text-center">
                Explore a world of curated prompts and share your insights.
                <br /> Whether you're a coder or simply curious, Byte Brain Hub
                is your gateway to the pulse of cutting-edge technology and
                artificial intelligence.
            </p>

            <Feed />
        </section>
    );
}
