import { Helmet } from "react-helmet";
import { TitleCard } from "../../components/Title";
import Card from "../../components/Card";
import WeeklyWriteup from "../../assets/weekly-writeup.png";

function CommunicatingWithJordan() {
    return (
    <>
        <Helmet>
            <title>Communicating With Jordan</title>
        </Helmet>
        <TitleCard>Communicating With Jordan</TitleCard>
        <div className="bg-neutral-100 rounded-2xl px-6 py-2">
            <Card title="Weekly Report">
                <p className="text-lg text-neutral-700 mb-4">
                    Because Digitera is a remote co-op, communication happens mainly over Slack messages. Each week,
                    All co-op students at Digitera send a report to Jordan on whatever work they have been doing. 
                    These reports do not have to be very detailed; a few sentences are enough.
                </p>
                <img className="text-center box-border w-[60%] m-auto border-neutral-100 border-4 rounded-md my-8" alt="Skills section in resume" src={WeeklyWriteup}/>

            </Card>
            <Card title="Meetings">
                <p className="text-lg text-neutral-700 mb-4">
                    Once a month or whenever necessary, Jordan will schedule an online meeting with the entire project 
                    team to discuss progress and decide on directions moving forward. These meetings last for about 30
                    minutes and take place on Google Meets.
                </p>
            </Card>
        </div>
    </>
    );
}

export default CommunicatingWithJordan;