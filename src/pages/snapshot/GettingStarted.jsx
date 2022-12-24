import { Helmet } from "react-helmet-async";
import { TitleCard } from "../../components/Title";
import Card from "../../components/Card";
import Resume from "../../assets/resume.png";
import FirstRun from "../../assets/first-run.png";
import ProjectStructure from "../../assets/project-structure.png";

function GettingStarted() {
    return (
    <>
        <Helmet>
            <title>Getting Started</title>
        </Helmet>
        <TitleCard>Getting Started</TitleCard>
        <div className="bg-neutral-100 rounded-2xl px-6 py-2">
            <Card title="Before Your Placement">
                <p className="text-lg text-neutral-700 mb-4">
                    Before your placement starts at Digitera, you will be required to send in a resume. You will want to
                    include any programming experience you have. If you have any experience in the role you are applying 
                    for, be sure to include it (e.g., creating an iOS app for mobile developers). If you do not, do not 
                    worry. Before I started, my main programming experience came from school courses. I had little experience 
                    as a fullstack developer. I recommend learning how to 
                    use <a href="https://github.com/" target="_blank" className="text-blue-600 hover:underline">
                        GitHub
                    </a> at least as it will be an invaluable
                    tool no matter what role you choose, except for graphic design.
                </p>
                <img className="text-center box-border w-[60%] m-auto border-neutral-100 border-4 rounded-md my-8" alt="Skills section in resume" src={Resume}/>

                <p className="text-lg text-neutral-700 mb-4">
                    After Jordan receives your resume, you will be scheduled for a brief interview where you will be told 
                    what to study before your placement begins. As a fullstack developer, I was told to study the PHP
                    programming language.
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    When your placement starts, you will receive information on the project you will be working on. Due 
                    to specific circumstances, the project I ended up working on involved a different language: Dart. 
                    While it took some time to adapt, some of the skills I learned over the summer transferred over so it 
                    was not as hard to start.
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    You will then be sent a project which you will be working on for your entire co-op term. Try to understand
                    the tasks you are given and the purpose of the project. My task was to work on the backend of the app.
                </p>
            </Card>
            <Card title="Running the App">
                <p className="text-lg text-neutral-700 mb-4">
                    The first thing you will want to try to do is run the project. This will likely involve the installation
                    of various programs. I had to install the Dart programming language, the Flutter SDK, Git, and Android
                    Studio. Running the project ensures that you have all the necessary files and programs to start your placement.
                </p>
                <img className="text-center box-border w-[70%] m-auto border-neutral-100 border-4 rounded-md my-8" alt="First time running the app" src={FirstRun}/>
                <p className="text-lg text-neutral-700 mb-4">
                    I remember that it took some to get my project running at first. I had to look online to figure out how to fix
                    the issues. Luckily, I was working with another co-op student, Melanie, who helped me get things running.
                    If there is anything that truly does not work, try to ask other people working on your project or Jordan
                    for guidance.
                </p>
            </Card>
            <Card title="Reading the Code">
                <p className="text-lg text-neutral-700 mb-4">
                    Once you can run the project, you can start reading the code. It may feel overwhelming at first, seeing so many
                    files, but it is necessary. 
                </p>
                <div className="flex h-[60vh] flex-start">
                    <img className="box-border h-full border-neutral-100 border-4 rounded-md mr-8" alt="File directory of project" src={ProjectStructure}/>
                    <div>
                        <p className="text-lg text-neutral-700 mb-4">
                            A good place to start is the file directory itself. While a project may contain hundreds of files, you will
                            likely not need to read nearly all of them. For my project, all the files I worked on were located in 
                            the <code className="text-rose-400 bg-neutral-200 p-px">lib</code> folder. There were still quite a few files 
                            in that directory, but it made things a little easier. You should then start getting the general gist of the 
                            files in the order the app runs them in.
                        </p>
                        <p className="text-lg text-neutral-700 mb-4">
                            Even after your first read-through you may still not understand everything, which is okay. Understanding builds
                            up after working on the project for a long time. I spent a lot of time learning about Firebase and Flutter so 
                            I could understand the code. You will learn the fastest while trying to fix bugs and implement new features. 
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    </>
    );
}

export default GettingStarted;