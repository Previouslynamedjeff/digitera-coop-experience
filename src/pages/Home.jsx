import { Helmet } from "react-helmet";
import Title from "../components/Title";

function Home() {
    return (
    <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Title>Home</Title>
        <div className="bg-neutral-100 rounded-lg h-full">
        </div>
    </>
    );
}

export default Home;