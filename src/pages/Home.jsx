import { Helmet } from "react-helmet";
import Title from "../components/Title";

function Home() {
    return (
    <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Title>Home</Title>
        <div className="bg-neutral-100 rounded-2xl h-full p-6">
            <h1 className="after:h-1 after:w-20 after:block after:bg-rose-200 after:rounded-full after:mt-1 text-2xl font-semibold mb-4">
                Welcome
            </h1>
            <p className="text-xl text-neutral-900">
                My name is Andrew Chu and this is my guide to my placement at Digitera. I will be covering 
            </p>
        </div>
    </>
    );
}

export default Home;