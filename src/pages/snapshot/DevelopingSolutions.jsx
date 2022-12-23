import { Helmet } from "react-helmet";
import { TitleCard } from "../../components/Title";
import Card from "../../components/Card";
import ImageInFirebase from "../../assets/image-in-firebase.png";

function DevelopingSolutions() {
    return (
    <>
        <Helmet>
            <title>Developing Solutions</title>
        </Helmet>
        <TitleCard>Developing Solutions</TitleCard>
        <div className="bg-neutral-100 rounded-2xl px-6 py-2">
            <Card title="Determining the Cause">
                <p className="text-lg text-neutral-700 mb-4">
                    Once a problem has been identified, it must be solved. In order to solve the problem, you must
                    identify why the problem is occuring. There are usually multiple possible causes for any issue. 
                    Through the process of elimination, you can determine what the cause actually is and solve it.
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    I considered 3 possible causes for why the thumbnail preview was not being displayed.
                </p>
                <Card className="flex border-2 border-neutral-400 p-2 rounded-xl justify-center my-6 mx-2 flex-wrap">
                    <Card className="bg-white text-4xl py-4 px-8 m-2 rounded-xl flex-grow" title="Possibility #1: The image doesn't exist ❌">
                        <div className="flex">
                            <p className="text-lg text-neutral-700">
                                At first, I thought the image might not be getting uploaded to the database properly. 
                                But, since the image still appears when the article gets uploaded, this was not the case.
                            </p>
                            <img className="text-center box-border w-[20%] m-auto border-neutral-100 border-4 rounded-md -mt-16" alt="Skills section in resume" src={ImageInFirebase}/>
                        </div>
                    </Card>
                    <Card className="bg-white text-4xl py-4 px-8 m-2 rounded-xl flex-grow" title="Possibility #2: There is a network problem ❌">
                        <p className="text-lg text-neutral-700">
                            Then, I considered that there might be a network issue. I dismissed this idea whenI found that 
                            the image should be stored locally in the program's memory. 
                        </p>
                    </Card>
                    <Card className="bg-white text-4xl py-4 px-8 m-2 rounded-xl flex-grow" title="Possibility #3: The user interface is not working ✔️">
                        <p className="text-lg text-neutral-700">
                            Finally, through a lot of testing, I discovered that it was an issue with the user interface. 
                            The image was being uploaded, but the user interface prevented you from seeing it.
                        </p>
                    </Card>
                </Card>
                <p className="text-lg text-neutral-700 mb-4">
                    Sometimes, it is really easy to see the root cause of a problem. Sometimes, it can take up to an hour of
                    trying different things to find it...Part of being in a tech co-op is constant problem-solving.
                    Now that I knew what was specifically causing the problem, I was ready to start solving it.
                </p>
            </Card>
            <Card title="Determining Where the Problem is Located (in the Code)">
                <p className="text-lg text-neutral-700 mb-4">
                    As a developer, problems will almost exclusively be solved by writing code. You must figure out what files/functions/lines 
                    of code are responsible for the issue. I found that the code for the thumbnail preview image was split between two functions
                    in different files. You will be able to identify what the code is doing.
                </p>
            </Card>
            <Card title="Researching and Implementing a Solution">
                <p className="text-lg text-neutral-700 mb-4">
                    Realistically, most complicated problems cannot be solved just by thinking really hard on them. Most solutions
                    come from searching for answers online. You will spend a lot of time combing through code documentation and
                    online forums. Often, you will not be the first person to encounter your issue. A popular website for researching
                    coding problems is <a href="https://stackoverflow.com/" target="_blank" className="text-blue-600 hover:underline">Stack Overflow</a>. I frequently used
                    the <a href="https://docs.flutter.dev/" target="_blank" className="text-blue-600 hover:underline">Flutter documentation</a> and the <a href="https://firebase.google.com/docs" target="_blank">
                    Firebase documentation</a>.
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    The solution to getting the thumbnail preview to display was essentially just reminding the program
                    that the image has been uploaded.
                </p>
            </Card>
        </div>
    </>
    );
}

export default DevelopingSolutions;