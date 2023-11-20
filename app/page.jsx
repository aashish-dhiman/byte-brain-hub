import Feed from "@components/Feed";

export default function Home() {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br />
                <span className="orange_gradient text-center">
                    {" "}
                    AI-Powered Prompts
                </span>
            </h1>
            <p className="desc text-center">
                Embark on a journey of exploration at Byte Brain Hub, where you
                can effortlessly discover and exchange AI-powered prompts.
                <br /> Join a community of tech enthusiasts, innovators, and
                curious minds. It's the space where ideas converge, and
                innovation takes flight.
            </p>

            <Feed />
        </section>
    );
}
