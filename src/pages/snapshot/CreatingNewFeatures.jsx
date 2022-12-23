import { Helmet } from "react-helmet";
import { TitleCard } from "../../components/Title";
import Card from "../../components/Card";
import SheetsLogo from "../../assets/google-sheets.png";
import FirebaseLogo from "../../assets/firebase.png";
import AppsScriptLogo from "../../assets/google-apps-script.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleQuestion, faCode, faFileCsv } from "@fortawesome/free-solid-svg-icons";
import LoadingAnimation from "../../assets/loading.gif";

function CreatingNewFeatures() {
    return (
    <>
        <Helmet>
            <title>Creating New Features</title>
        </Helmet>
        <TitleCard>Creating New Features</TitleCard>
        <div className="bg-neutral-100 rounded-2xl px-6 py-2">
            <Card title="Making Something New">
                <p className="text-lg text-neutral-700 mb-4">
                    Midway through my co-op term, I was asked to start making new features for my project. Adding new features
                    is an important part of most projects: How can the project develop without anything new? 
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    The process of creating new features involves a lot more critical thinking. You must ask: <i>What would I want
                    as a user of this app? How can I make this app easier to use? What can I add that is of interest?</i> One of the 
                    features I added was the ability to add user accounts via a file. It began with a question: If a whole entire school 
                    board signed up for the app, how could we add the accounts of all its students? This is a thought that most of the app's 
                    users would never need to think about. Certainly, a person should not be manually entering in thousands of student 
                    accounts. The feature began with a design problem that needed to be solved.
                </p>
                <div className="flex justify-center items-center mb-4 border-2 border-neutral-400 p-8 rounded-xl">
                    <img className="w-[7%]" src={SheetsLogo} alt="Google Sheets logo"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <FontAwesomeIcon icon={faCircleQuestion} className="text-8xl text-neutral-300"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <FontAwesomeIcon icon={faCode} className="text-8xl text-neutral-300"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <img className="w-[7%]" src={FirebaseLogo} alt="Firebase logo"/>
                </div>
            </Card>
            <Card title="Researching the Feature">
                <p className="text-lg text-neutral-700 mb-4">
                    There are usually multiple ways a design problem can be solved. Since school emails follow a particular structure
                    (student_number@board.ca) I thought about simply accepting logins that came from a particular email address.
                    However, due to the way Firebase works, this turned out to be impossible. 
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    Next, I thought about synchronizing the accounts from a Google Sheet. This would make it extremely easy for 
                    administration to delete older student's accounts and update the credentials of existing users.
                </p>
                <div className="flex justify-center items-center mb-4 border-2 border-neutral-400 p-8 rounded-xl">
                    <img className="w-[7%]" src={SheetsLogo} alt="Google Sheets logo"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <img className="w-[10%]" src={AppsScriptLogo} alt="Google Apps Script logo"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <FontAwesomeIcon icon={faCode} className="text-8xl text-neutral-300"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <img className="w-[7%]" src={FirebaseLogo} alt="Firebase logo"/>
                </div>
                <p className="text-lg text-neutral-700 mb-4">
                    In order to implement this feature, I tried to use Google Apps Script to read the Google Sheets. However,
                    I was unable to get it to work properly, and it required a lot of security authentication to do. I decided
                    to scrap the idea and try another way. Several attempts later, I decided the best way was to add users by
                    uploading a file.
                </p>
                <div className="flex justify-center items-center mb-4 border-2 border-neutral-400 p-8 rounded-xl">
                    <img className="w-[7%]" src={SheetsLogo} alt="Google Sheets logo"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <FontAwesomeIcon icon={faFileCsv} className="text-8xl text-neutral-300"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <FontAwesomeIcon icon={faCode} className="text-8xl text-neutral-300"/>
                    <FontAwesomeIcon icon={faArrowRight} className="text-4xl mx-12"/>
                    <img className="w-[7%]" src={FirebaseLogo} alt="Firebase logo"/>
                </div>
            </Card>
            <Card title="Try, Fail, Repeat">
                <p className="text-lg text-neutral-700 mb-4">
                    When implementing a new feature, expect to fail over and over as you try to make it. It took me many attempts
                    and many hours of researching, writing code, then deleting it to get this feature to work. Even still, I had to
                    compromise its functionality. Melanie also struggled with implementing her feature of push notifications. Try, fail,
                    and repeat.
                </p>
                <img className="text-center box-border w-[20%] m-auto" alt="Skills section in resume" src={LoadingAnimation} loading="lazy"/>
            </Card>
        </div>
    </>
    );
}

export default CreatingNewFeatures;