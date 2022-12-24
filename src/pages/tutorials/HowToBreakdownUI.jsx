import { Helmet } from "react-helmet-async";
import { TitleCard } from "../../components/Title";
import Card from "../../components/Card";

function MiniWindow(props) {
    return (
    <div className="w-[80%] m-auto p-0 border-4 border-neutral-700 overflow-auto">
        {props.children}
    </div>
    )
}

function HowToBreakDownUi() {
    return (
    <>
        <Helmet>
            <title>How to Break Down a UI</title>
        </Helmet>
        <TitleCard>How to Break Down a UI</TitleCard>
        <div className="bg-neutral-100 rounded-2xl px-6 py-2">
            <Card className="bg-white rounded-xl p-8 my-6">
                <p className="text-lg text-neutral-700 mb-4">
                    As a frontend developer or a graphic designer, it is important to understand how to break
                    apart the user interface. The user inferace is everything the user sees on screen. It is all
                    the buttons, menus, and pages. The user interface often breaks up into chunks that repeat
                    in multiple places. This makes the interface easier to approach and also easier to edit 
                    later on.
                </p>
                <MiniWindow>
                    <nav className="bg-blue-200 flex justify-around w-full py-2 h-12">
                        <a className="hover:bg-blue-300 py-1 px-4 rounded-lg hover:cursor-pointer select-none">Home</a>
                        <a className="hover:bg-blue-300 py-1 px-4 rounded-lg hover:cursor-pointer select-none">About Us</a>
                        <a className="hover:bg-blue-300 py-1 px-4 rounded-lg hover:cursor-pointer select-none">Contact</a>
                    </nav>
                    <div className="flex h-96">
                        <main className="bg-red-200 h-full w-2/3 p-6">
                        <h1 className="bg-red-400 text-2xl font-semibold w-fit mb-3 rounded-lg py-2 px-4 m-auto">Title</h1>
                        <p className="bg-red-300 mb-3 rounded-lg p-2">
                            A good place to start is the file directory itself. While a project may contain hundreds 
                            of files, you will likely not need to read nearly all of them. For my project, all the files 
                            I worked on were located in the lib folder. There were still quite a few files in that directory, 
                            but it made things a little easier. You should then start getting the general gist of the files 
                            in the order the app runs them in.
                        </p>
                        <p className="bg-red-300 mb-3 rounded-lg p-2">
                            As a frontend developer or a graphic designer, it is important to understand how to break
                            apart the user interface. The user inferace is everything the user sees on screen. It is all
                            the buttons, menus, and pages. The user interface often breaks up into chunks that repeat
                            in multiple places.
                        </p>
                        </main>
                        <aside className="bg-green-200 h-full w-1/3 p-4 flex items-center flex-col">
                            <div className="h-18 w-[80%] bg-green-300 rounded-lg my-3 p-3 flex items-center hover:cursor-pointer">
                                <div className="h-10 w-10 bg-green-400 rounded-lg mr-6"></div>
                                <h1 className="select-none">Interesting Article 1</h1>
                            </div>
                            <div className="h-18 w-[80%] bg-green-300 rounded-lg my-3 p-3 flex items-center hover:cursor-pointer">
                                <div className="h-10 w-10 bg-green-400 rounded-lg mr-6"></div>
                                <h1 className="select-none">Interesting Article 2</h1>
                            </div>
                            <div className="h-18 w-[80%] bg-green-300 rounded-lg my-3 p-3 flex items-center hover:cursor-pointer">
                                <div className="h-10 w-10 bg-green-400 rounded-lg mr-6"></div>
                                <h1 className="select-none">Interesting Article 3</h1>
                            </div>
                            <div className="h-18 w-[80%] bg-green-300 rounded-lg my-3 p-3 flex items-center hover:cursor-pointer">
                                <div className="h-10 w-10 bg-green-400 rounded-lg mr-6"></div>
                                <h1 className="select-none">Interesting Article 4</h1>
                            </div>
                        </aside>
                    </div>
                </MiniWindow>
                <p className="text-lg text-neutral-700 my-4">
                    This user repeats itself in various ways.
                </p>
            </Card>
            <Card className="bg-white rounded-xl p-8 my-6" title="First Layer">
                <p className="text-lg text-neutral-700 my-4">
                    This user interface can be broken up initially into 3 
                    parts: <span className="bg-blue-200">the top navigation bar</span>
                    , <span className="bg-red-200">the main article</span>,
                    and <span className="bg-green-200">the side naviagation</span>.
                    These parts help define the overall shape of the interface.
                </p>
                <MiniWindow>
                    <nav className="bg-blue-200 flex justify-around w-full py-2 h-12">
                    </nav>
                    <div className="flex h-96">
                        <main className="bg-red-200 h-full w-2/3 p-6">
                        </main>
                        <aside className="bg-green-200 h-full w-1/3 p-4 flex items-center flex-col">
                        </aside>
                    </div>
                </MiniWindow>
            </Card>
            <Card className="bg-white rounded-xl p-8 my-6" title="Second Layer">
                <p className="text-lg text-neutral-700 my-4">
                    The next level contains the majority of the fine 
                    details: <span className="bg-blue-300">the navigation links</span>
                    , <span className="bg-red-400">the title</span>
                    , <span className="bg-red-300">the paragraphs</span>,
                    and <span className="bg-green-300">the article previews</span>. 
                </p>
                <MiniWindow>
                    <nav className="bg-blue-200 flex justify-around w-full py-2 h-12 text-transparent">
                        <a className="bg-blue-300 py-1 px-4 rounded-lg hover:cursor-pointer select-none">Home</a>
                        <a className="bg-blue-300 py-1 px-4 rounded-lg hover:cursor-pointer select-none">About Us</a>
                        <a className="bg-blue-300 py-1 px-4 rounded-lg hover:cursor-pointer select-none">Contact</a>
                    </nav>
                    <div className="flex h-96 text-transparent select-none">
                        <main className="bg-red-200 h-full w-2/3 p-6">
                        <h1 className="bg-red-400 text-2xl font-semibold w-fit mb-3 rounded-lg py-2 px-4 m-auto">Title</h1>
                        <p className="bg-red-300 mb-3 rounded-lg p-2">
                            A good place to start is the file directory itself. While a project may contain hundreds 
                            of files, you will likely not need to read nearly all of them. For my project, all the files 
                            I worked on were located in the lib folder. There were still quite a few files in that directory, 
                            but it made things a little easier. You should then start getting the general gist of the files 
                            in the order the app runs them in.
                        </p>
                        <p className="bg-red-300 mb-3 rounded-lg p-2">
                            As a frontend developer or a graphic designer, it is important to understand how to break
                            apart the user interface. The user inferace is everything the user sees on screen. It is all
                            the buttons, menus, and pages. The user interface often breaks up into chunks that repeat
                            in multiple places.
                        </p>
                        </main>
                        <aside className="bg-green-200 h-full w-1/3 p-4 flex items-center flex-col">
                            <div className="h-18 w-[80%] bg-green-300 rounded-lg my-3 p-3 flex items-center hover:cursor-pointer">
                                <div className="h-10 w-10 rounded-lg mr-6"></div>
                                <h1 className="select-none">Interesting Article 1</h1>
                            </div>
                            <div className="h-18 w-[80%] bg-green-300 rounded-lg my-3 p-3 flex items-center hover:cursor-pointer">
                                <div className="h-10 w-10 rounded-lg mr-6"></div>
                                <h1 className="select-none">Interesting Article 2</h1>
                            </div>
                            <div className="h-18 w-[80%] bg-green-300 rounded-lg my-3 p-3 flex items-center hover:cursor-pointer">
                                <div className="h-10 w-10 rounded-lg mr-6"></div>
                                <h1 className="select-none">Interesting Article 3</h1>
                            </div>
                            <div className="h-18 w-[80%] bg-green-300 rounded-lg my-3 p-3 flex items-center hover:cursor-pointer">
                                <div className="h-10 w-10 rounded-lg mr-6"></div>
                                <h1 className="select-none">Interesting Article 4</h1>
                            </div>
                        </aside>
                    </div>
                </MiniWindow>
                <p className="text-lg text-neutral-700 my-4">
                    The <span className="bg-green-400">article preview images</span> can be considered part of the third layer.
                </p>
            </Card>
            <Card title="Why Break Down the User Interface?">
            <p className="text-lg text-neutral-700 mb-4">
                In an actual app, each individual piece of the user interface would be much more complex. By dividing the user interface,
                it reduces the complexity. Each piece can be neatly written in its own file, creating an organized project structure.
            </p>
            </Card>
        </div>
    </>
    );
}

export default HowToBreakDownUi;