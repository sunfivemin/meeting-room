export default function Login() {
    return (
        <div>
            <h4 className="title">Login</h4>
            <div>
                <div className="flex items-center min-h-screen bg-[var(--bg-main-color)] flex-1">
                    <div className="w-full">
                        <h2 className="mb-10 text-2xl font-bold text-center text-blue-400 uppercase">Fill out our form</h2>
                        <div className="p-10 mx-auto bg-white rounded-lg shadow md:w-3/4 lg:w-1/2">
                            <form action="">
                                <div className="flex items-center mb-5">
                                    <input type="text" placeholder="Your name" className="flex-1 py-2 placeholder-gray-300 border-b-2 border-gray-400 outline-none focus:border-indigo-400"></input>
                                </div>
                                <div className="flex flex-col justify-center items-center h-[100vh]">
                                    <div className="!z-5 relative  rounded-[20px] max-w-[300px] md:max-w-[400px]  bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] bg-white undefined">
                                        <div className="relative flex flex-row justify-between">
                                            <h4 className="mb-3 text-xl font-bold text-navy-700 dark:text-white">Horizon UI Inputs</h4>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="text-sm font-bold text-navy-700 dark:text-white">
                                                Default
                                            </label>
                                            <input type="text" id="email" placeholder="@horizon.ui" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-200 outline-none rounded-xl bg-white/0"></input>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email2" className="text-sm font-bold text-navy-700 dark:text-white">
                                                Success
                                            </label>
                                            <input
                                                type="text"
                                                id="email2"
                                                placeholder="Success input"
                                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"></input>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email3" className="text-sm font-bold text-navy-700 dark:text-white">
                                                Error
                                            </label>
                                            <input type="text" id="email3" placeholder="Error input" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email4" className="text-sm font-bold text-navy-700 dark:text-white">
                                                Disabled
                                            </label>
                                            <input disabled="" type="text" id="email4" placeholder="@horizon.ui" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none !border-none !bg-gray-100 cursor-not-allowed dark:!bg-white/5 "></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" placeholder="Put in your fullname." className="w-full p-3 border border-gray-300 rounded shadow mb-"></input>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">
                                        Twitter
                                    </label>
                                    <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." className="w-full p-3 border border-red-300 rounded shadow mb-"></input>
                                    <p className="mt-2 text-sm text-red-400">Twitter username is required</p>
                                </div>

                                <button className="block w-full p-4 font-bold text-white bg-blue-500 rounded-lg">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
