import { Helmet } from "react-helmet";
import { TitleCard } from "../../components/Title";
import Card from "../../components/Card";
import { NavLink } from "react-router-dom";
import ThumbnailPreview from "../../assets/thumbnail-preview.png";

function FindingProblems() {
    return (
    <>
        <Helmet>
            <title>Finding Problems</title>
        </Helmet>
        <TitleCard>Finding Problems</TitleCard>
        <div className="bg-neutral-100 rounded-2xl px-6 py-2">
            <Card title="Identifying Unexpected Behaviour">
                <p className="text-lg text-neutral-700 mb-4">
                    For some projects, you will be given specific things to work on. But for my project, I was simply told to 
                    get the app to a point in which it works and can be published. I had a lot of freedom to choose what to do.
                    Each day, I would run the app to see if there was unexpected behaviour. Unexpected behaviour is anything that
                    should not happen under normal conditions. You will find bugs no matter what project you get assigned. There 
                    were many issues with the app at first. It was quite intimidating  to see basically a hundred lines of error messages. 
                    Overtime, I became adept at <NavLink to="/how-to-read-errors" className="text-blue-600 hover:underline">reading errors</NavLink>.
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    One of the issues I am proud of solving is the issue of previewing images. When creating a blog, you have the
                    option to add a banner image. I designed a small preview window which allows you to see what the image you
                    uploaded looks like. The issue was that the preview did not show up when the image was uploaded.
                </p>
                <img className="text-center box-border w-[80%] m-auto border-neutral-100 border-4 rounded-md my-8" alt="Screenshot of previewing the banner image" src={ThumbnailPreview}/>
                <p className="text-lg text-neutral-700 mb-4">
                    While it may seem like a small change, this feature ends up being incredibly helpful, especially when going back
                    to edit existing articles. After learning how to code using Dart and Flutter, this was one of my first main 
                    contributions to the app.
                </p>
            </Card>
        </div>
    </>
    );
}

export default FindingProblems;