import OurTeamDetails from "../OurTeamsDetails";

const OurTeam = () => {
    return (
        <>
            <section id="OurTeams">
                <div>
                    <h2 className="flex justify-center m-[30px]">Our Team</h2>
                    <div className="flex flex-row justify-center w-full mt-[30px] mx-[10px] px-[10%]">

                        <div className="flex flex-row justify-center w-[350px] gap-8 rounded-[30px] p-[1%] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]">
                            <div className="w-[35%]">
                                <img className="w-[100%] rounded-[30px]" src={OurTeamDetails.president[0].image_url} alt="President pic" onClick={() => (window.open(OurTeamDetails.president[0].linkedIn, '_blank'))} />
                            </div>
                            <div className="w-[70%]">
                                <h4>{OurTeamDetails.president[0].Name}</h4>
                                <p className="pt-4">
                                    {OurTeamDetails.president[0].quote}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-row justify-center flex-wrap w-full m-[30px]">
                            {OurTeamDetails.heads.map((item, index) => (
                                <OurTeamCard key={index} {...item} />
                            ))
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default OurTeam;


const OurTeamCard = ({ Name, image_url, quote, linkedIn }) => {
    return (<>
        <div className="flex justify-center mt-[30px] mx-[10px]">

            <div className="flex flex-row justify-center w-[350px] gap-8 rounded-[30px] p-[4%] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]">
                <div className="w-[35%]">
                    <img className="w-[100%] rounded-[30px]" src={image_url} alt="President pic" onClick={() => (window.open(linkedIn, '_blank'))} />
                </div>
                <div className="w-[70%]">
                    <h4>{Name}</h4>
                    <p className="pt-4">
                        {quote}
                    </p>
                </div>
            </div>

        </div>
    </>);
};





