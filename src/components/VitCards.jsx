import VitLogo from "../images/vit_logo.png";

const VitCards = () => {
    return (
        <>
    <section id="about" className="h-[100vh]">
             <div className="flex justify-center py-[5%]">
                <div className="relative flex flex-col items-center gap-10 space-y-15 md:space-x-15 p-[3%]">
                    <div className="flex justify-center">
                        <div className="relative flex flex-col items-center rounded-[30px] space-y-15 md:space-x-15 p-[3%] w-[60%] md:max-w-[100%] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]" data-aos="zoom-in-up">
                            <div>
                                <h3 className="font-black text-gray-800 ">VIT. It says it all.</h3>
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-1 space-y-8 md:space-y-0">
                                <div className="p-[2%]">
                                    <p className="pt-[5%] text-xl md:text-4xl text-gray-500 text-base">One of India's top engineering schools,
                                        Vellore Institute of Technology equips students with the best exposure
                                        to a top-notch education, internship prospects, lucrative job placement opportunities,
                                        and infrastructure amenities. Being one of the top-most clubs in VIT, MIC stands tall!</p>
                                </div>

                                <div className="w-[80%] flex self-center">
                                    <div>
                                        <img className="" src={VitLogo} alt="VIT LOGO" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-full">
                        <div className="flex justify-center">
                            <div className="relative flex flex-col space-y-15 md:space-x-15 w-[60%] md:max-w-[100%] mx-auto">
                                <div className="flex flex-col gap-4 md:flex-row md:space-x-6 space-y-8 md:space-y-0">
                                    <div className="p-[4%] lg:w-[60%] h-[100%] md:w-[100%] rounded-[30px] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]" data-aos="fade-up-right">
                                        <div>
                                            <h3 className="font-black text-gray-800 md:text-5xl text-3xl flex justify-center">Collaboration</h3>

                                            <p className="p-[2%] pt-[5%] text-xl md:text-4xl text-gray-500 text-base">An open and iniviting space for developers to pitch in their ideas and suggestions</p>
                                        </div>
                                    </div>

                                    <div className="p-[4%] lg:w-[40%] h-[100%] md:w-[100%] rounded-[30px] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]" data-aos="fade-up-left">
                                        <div>
                                            <h3 className="font-black text-gray-800 text-3xl md:text-5xl flex justify-center">Proactive</h3>

                                            <p className="p-[2%] pt-[5%] text-xl md:text-4xl text-gray-500 text-base">Working on Upcoming fields and Innovative approaches to problems</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default VitCards;