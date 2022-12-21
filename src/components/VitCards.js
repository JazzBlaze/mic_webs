

const VitCards = () => {
    return (
        <>
            {/*         
        <div class="flex flex-col justify-center h-screen">
	<div
		className="relative flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0 rounded-xl shadow-lg p-3 max-w-20xl md:max-w-5xl mx-auto border border-white">
		<div className="flex flex-row">
            <div>
                <h3 className="font-black text-gray-800 md:text-3xl text-xl">VIT. It says it all.</h3>
                </div>	
            <div className="flex flex-col space-y-2 p-3">
				<p className="md:text-lg text-gray-500 text-base">One of India's top engineering schools, 
            Vellore Institute of Technology equips students with the best exposure 
            to a top-notch education, internship prospects, lucrative job placement opportunities,
             and infrastructure amenities. Being one of the top-most clubs in VIT, MIC stands tall!</p>
             </div>

             <div className="md:w-1/3 flex justify-between item-center p-[2%]">
                <div>
                    <img className="" src={VitLogo} alt="VIT LOGO" /></div>
			 </div>
             </div>
		</div>
	</div> */}
    <section id="VitCards">
            <div className="flex justify-center h-[100vh]">
                <div className="relative flex flex-col items-center gap-3 space-y-15 md:space-x-15 p-[3%] border-[20px] border-grey w-[100%]">
                    <div className="flex justify-center">
                        <div className="relative flex flex-col items-center gap-3 rounded-[30px] space-y-15 md:space-x-15 shadow-lg p-[3%] w-[100%] md:max-w-[100%] border-[20px] border-grey">
                            <div>
                                <h3 className="font-black text-gray-800 md:text-3xl text-xl">VIT. It says it all.</h3>
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0">
                                <div className="p-[2%]">
                                    <p className="md:text-lg text-gray-500 text-base">One of India's top engineering schools,
                                        Vellore Institute of Technology equips students with the best exposure
                                        to a top-notch education, internship prospects, lucrative job placement opportunities,
                                        and infrastructure amenities. Being one of the top-most clubs in VIT, MIC stands tall!</p>
                                </div>

                                <div className="md:w-1/3 flex justify-between item-center">
                                    <div>
                                        <img className="" src={"/images/vit_logo.png"} alt="VIT LOGO" /></div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center">
                            <div className="relative flex flex-col gap-3 space-y-15 md:space-x-15 w-[100%] md:max-w-[100%] mx-auto border border-white">
                                <div className="flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0 w-[100%]">
                                    <div className="p-[2%] shadow-lg rounded-[30px]">
                                        <div>
                                            <h3 className="font-black text-gray-800 md:text-3xl text-10xl px-[15%] md:px-[30%]">Collaboration</h3>

                                            <p className="md:text-lg text-gray-500 text-base">An open and iniviting space for developers to pitch in their ideas and suggestions</p>
                                        </div>
                                    </div>

                                    <div className="p-[4%]  md:w-1/3 flex shadow-lg justify-between item-center  rounded-[30px]">
                                        <div>
                                            <h3 className="font-black text-gray-800 md:text-3xl text-xl">Proactive</h3>

                                            <p className="md:text-lg text-gray-500 text-base">Working on Upcoming fields and Innovative approaches to problems</p>
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