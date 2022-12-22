import OurTeamDetails from "./OurTeamsDetails";


// const listItems = data.map(
//     (element) => {
//         return (
//             <ul type="disc">
//                 <li style={{
//                     fontWeight: 'bold',
//                     color: 'red'
//                 }}
//                 >
//                     {element.State}
//                 </li>
//                 <li>{element.Capital}</li>
//             </ul>
//         )
//     }
// )


const OurTeam = () => {
    return (
        <>
            <section id="OurTeams" className="h-[100vh]">
                <div>
                    <h2 className="flex justify-center">Our Team</h2>
                    <div className="flex flex-row justify-center align-center w-full mt-[50px] mx-[10px] px-[10%]">

                            <div className="flex flex-row justify-center w-[500px] gap-8 rounded-[30px] p-[1%] shadow-[0_3px_20px_0px_rgba(0,0,0,0.2)]">
                                <div className="w-[35%]">
                                    <img className="w-[100%] rounded-[30px]" src={OurTeamDetails.items[0].image_url} alt="President pic" onClick={()=>(window.open(OurTeamDetails.items[0].linkedIn, '_blank'))} />
                                </div>
                                <div className="w-[70%]">
                                    <h4>{OurTeamDetails.items[0].Name}</h4>
                                    <p className="pt-4">
                                        {OurTeamDetails.items[0].quote}
                                    </p>
                                </div>
                            </div>
                        </div>

                </div>

            </section>
            {/* <div className='BlogDetails'>
            <h1>Blog detail - {id}</h1>
            {blog_id && (
                <article>
                    <h2>{blog_id.title}</h2>
                    <h2>{blog_id.author}</h2>
                    <div>{blog_id.body}</div>
                </article>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div> */}
        </>
    )
}

export default OurTeam;

