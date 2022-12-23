import { Helmet } from "react-helmet";
import Title from "../components/Title";
import AppScreenshot from "../assets/app-screenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
    let classList = props.className !== undefined ? props.className : "bg-white rounded-xl p-8 pr-16 my-6 mx-2";
    let titleClassList = "text-3xl font-semibold mb-4 " + 
        (props.title !== undefined ? "after:h-1 after:w-20 after:block after:bg-rose-200 after:rounded-full after:mt-1" : "");
    return (
        <div className={classList}>
            <h1 className={titleClassList}>
                {props.title !== undefined ? props.title : undefined}
            </h1>
            {props.children}
        </div>
    );
}

function Home() {
    return (
    <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Title>Home</Title>
        <div className="bg-neutral-100 rounded-2xl px-6 py-2">
            <Card title="Welcome">
                <p className="text-lg text-neutral-700 mb-4">
                    My name is Andrew Chu and this is my guide to my placement at Digitera. I will be covering my experiences as a 
                    fullstack developer and how to tackle some of the work you will be doing.
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    This website is created in the likeness of the app I made during my co-op placement. However, this version was written
                    completely from scratch, in a completely different language. I was able to create this website using the skills I learned
                    at my placement.
                </p>
                <img className="text-center box-border w-[80%] m-auto border-neutral-100 border-4 rounded-md" alt="Screenshot of the Skule News app" src={AppScreenshot}/>
            </Card>
            <Card title="About Digitera">
                <p className="text-lg text-neutral-700 mb-4">
                    Digitera Interactive is an agency that combines a variety of different fields and services together. They work in marketing,
                    software development, and business. Digitera was founded by Jordan St Jacques in 2004. Some of their clients include DJs, 
                    schools, and tech companies.
                </p>
                <Card className="flex bg-neutral-100 p-4 rounded-xl justify-center my-6 mx-2 flex-wrap">
                    <a href="https://digitalmarketingplus.com/" target="_blank">
                        <Card className="bg-rose-100 flex text-4xl py-8 px-12 m-2 rounded-xl hover:brightness-90 transition-all">
                            <FontAwesomeIcon icon={faLink} />
                        </Card>
                    </a>
                    <a href="https://www.linkedin.com/company/digiteraagency/" target="_blank">
                        <Card className="bg-rose-100 flex text-4xl py-8 px-12 m-2 rounded-xl hover:brightness-90 transition-all">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </Card>
                    </a>
                    <a href="https://www.facebook.com/digitalmarketingpluscom/" target="_blank">
                        <Card className="bg-rose-100 flex text-4xl py-8 px-12 m-2 rounded-xl hover:brightness-90 transition-all">
                        <FontAwesomeIcon icon={faFacebook} />
                        </Card>
                    </a>
                    <a href="https://twitter.com/digitera_agency" target="_blank">
                        <Card className="bg-rose-100 flex text-4xl py-8 px-12 m-2 rounded-xl hover:brightness-90 transition-all">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Card>
                    </a>
                    <a href="https://www.instagram.com/digitera.agency/" target="_blank">
                        <Card className="bg-rose-100 flex text-4xl py-8 px-12 m-2 rounded-xl hover:brightness-90 transition-all">
                        <FontAwesomeIcon icon={faInstagram} />
                        </Card>
                    </a>
                </Card>
                <p className="text-lg text-neutral-700 mb-4">
                    There are multiple types of technology placements available at Digitera. Some of the positions available are fullstack developer (me),
                    mobile developer, and graphic designer.
                </p>
            </Card>
        </div>
    </>
    );
}

export default Home;