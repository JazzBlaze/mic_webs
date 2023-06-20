import OurTeamDetails from "../OurTeamsDetails";
import ReactImageFallback from "react-image-fallback";
import Loading from "../images/loading.gif"
import MicLogo from "../images/mic-logo.png"

const OurTeam = () => {
    return (
        <>
            <section id="OurTeams">
                <div>
                    <h2 className="flex justify-center m-[30px]">Our Team</h2>
                    <div className="flex flex-row flex-wrap justify-center w-full mt-[30px] mx-[10px] px-[10%] gap-10">
                        
                        <div className="hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center min-w-[350px] w-[350px] gap-8 rounded-[30px] p-[1%] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]" onClick={() => (window.open(OurTeamDetails.secretary[0].linkedIn, '_blank'))} >
                            <div className="w-[35%] flex self-center">
                                <ReactImageFallback className="w-[100%] rounded-full" src={OurTeamDetails.faculty[0].image_url} initialImage={Loading} fallbackImage = {MicLogo} alt="Associate proffesor" />
                            </div>
                            <div className="w-[70%]">
                                <h4>{OurTeamDetails.faculty[0].Name}</h4>
                                <p className="text-[15px] font-semibold">{OurTeamDetails.faculty[0].role}</p>
                                <p className="pt-4 text-[15px]">
                                    {OurTeamDetails.faculty[0].quote}
                                </p>
                            </div>
                        </div>

                        <div className="hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center min-w-[350px] w-[350px] gap-8 rounded-[30px] p-[1%] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]" onClick={() => (window.open(OurTeamDetails.secretary[0].linkedIn, '_blank'))} >
                            <div className="w-[35%] flex self-center">
                                <ReactImageFallback className="w-[100%] rounded-full" src={OurTeamDetails.faculty[1].image_url} initialImage={Loading} fallbackImage = {MicLogo} alt="Associate proffesor" />
                            </div>
                            <div className="w-[70%]">
                                <h4>{OurTeamDetails.faculty[1].Name}</h4>
                                <p className="text-[15px] font-semibold">{OurTeamDetails.faculty[1].role}</p>
                                <p className="pt-4 text-[15px]">
                                    {OurTeamDetails.faculty[1].quote}
                                </p>
                            </div>
                        </div>

                    </div>

                    
                    <div className="flex justify-center">
                        <div className="flex flex-row justify-center flex-wrap w-full m-[30px]">
                            {OurTeamDetails.president.map((item, index) => (
                                <OurTeamCard key={index} {...item} />
                            ))
                            }
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-row justify-center flex-wrap w-full mx-[30px]">
                            {OurTeamDetails.secretary.map((item, index) => (
                                <OurTeamCard key={index} {...item} />
                            ))
                            }
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-row justify-center flex-wrap w-full mx-[30px]">
                            {OurTeamDetails.core.map((item, index) => (
                                <OurTeamCard key={index} {...item} />
                            ))
                            }
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-row justify-center flex-wrap w-full m-[30px]">
                            {OurTeamDetails.advisory.map((item, index) => (
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


const OurTeamCard = ({ Name, image_url, role, quote, linkedIn }) => {
    return (<>
        <div className="flex justify-center mt-[30px] mx-[10px]">

            <div className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-row justify-center w-[350px] gap-8 rounded-[30px] p-[4%] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]" onClick={() => (window.open(linkedIn, '_blank'))} >
                <div className="w-[35%] flex self-center">
                    <ReactImageFallback className="w-[100%] rounded-full aspect-square" src={image_url} initialImage={Loading} fallbackImage={MicLogo} alt="MIC core member" />
                </div>
                <div className="w-[70%]">
                    <h4>{Name}</h4>
                    <p className="text-[14px] font-semibold">{role}</p>
                    <p className="pt-4 text-[16px]">
                        {quote}
                    </p>
                </div>
            </div>

        </div>
    </>);
};