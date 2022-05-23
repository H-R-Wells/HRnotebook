import React
// , { useContext } 
 from 'react';
// import noteContext from "../context/notes/noteContext";


function Notes() {


    // const context = useContext(noteContext);
    // const { notes, setNotes } = context;



    return (
        <div>
            {/* <!-- Ypur notes  --> */}
            <div className="container min-w-full bg-cyan-100 pb-12">

                {/* {notes.map((note) => {
                    return note.title;
                })} */}





                <div className=" flex min-w-full justify-center container">
                    <h1 id="list" className="font-serif font-extrabold text-2xl md:text-3xl py-10">Your Notes</h1>
                </div>




                <div className="flex md:px-10 px-3 max-w-full min-w-full container flex-col">
                    <div className="overflow-x-auto  border-8 border-y-stone-400 border-x-stone-700 min-w-max md:min-w-fit">
                        <div className="py-2 px-1 inline-block min-w-full sm:px-2 lg:px-2">
                            <div className="overflow-hidden">
                                <table className="min-w-full table-fixed">
                                    <thead className="bg-slate-400 border-b">
                                        <tr>
                                            <th scope="col"
                                                className="px-1 py-4 w-0 md:px-6 md:text-base font-medium text-gray-900 text-left">
                                                #
                                            </th>
                                            <th scope="col"
                                                className="px-4 py-4 w-4 md:px-6 md:w-1/4 md:text-lg font-semibold text-gray-900 text-left ">
                                                Title
                                            </th>

                                            <th scope="col"
                                                className="px-0 py-4 w-4 md:px-6 md:w-1/2 md:text-lg font-semibold text-gray-900 text-left">
                                                Description
                                            </th>
                                            <th className="px-2 py-4 w-1/4 md:px-6 md:w-20 font-semibold md:text-lg text-gray-100 bg-slate-500 text-center">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody id="nothingtodo">
                                        <tr className="bg-gray-100 border-b">
                                            <td colSpan="4"
                                                className=" px-0 py-4 w-2 md:px-6 md:w-1/4 col- text-base md:text-lg text-gray-900 font-normal text-center align-top">
                                                You got nothing To-Do 😪
                                            </td>
                                        </tr>
                                    </tbody>



                                    <tbody id="tablebody">
                                        <tr className="bg-gray-100 border-b">
                                            <td className="px-1 py-4 w-0 md:px-6 text-base font-medium text-gray-900 align-top">
                                                1</td>
                                            <td
                                                className="px-0 py-4 w-2 md:px-6 md:w-1/4 text-base md:text-lg text-gray-900 font-normal align-top">
                                                Markhello mdfk
                                            </td>
                                            <td
                                                className="px-0 py-4 w-4 md:px-6 md:w-1/2 text-base md:text-lg text-gray-900 font-light align-top">
                                                @mdo hello
                                            </td>
                                            <td className="w-1/4 md:w-20 text-center md:text-lg bg-white">
                                                <button
                                                    className="md:w-4/6 py-2.5 w-16 bg-blue-600  text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Notes