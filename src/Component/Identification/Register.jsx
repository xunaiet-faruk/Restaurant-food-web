import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [showName, setShowName] = useState({});

    return (
        <div>
            <div className="pt-[200px]">
                <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 ">
                    <h1 className="text-3xl font-semibold tracking-tight">Sign Up</h1>

                    <form action="#" className="space-y-6">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                Username
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                type="text"
                                required
                            />
                        </div>

                        <div className="space-y-2 text-sm">
                            <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                Username
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                type="text"
                                required
                            />
                        </div>


                        <div className="space-y-2 text-sm">
                            <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="password"
                                placeholder="Enter password"
                                name="password"
                                type="password"
                                required
                            />

                        </div>
                        <div>
                            <label htmlFor="type2-1" className="flex max-w-[380px] md:w-[380px]">
                                <div className="w-fit whitespace-nowrap  bg-[#F4B552]  px-2 py-1 text-sm text-white">Choose File</div>
                                <div className=" flex w-full max-w-[380px] items-center  border-b-[2px] border-[#F4B552]  px-2 text-sm font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
                            </label>
                            <input
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        const imageFile = e.target.files[0]; setShowName(imageFile);
                                    }
                                }} className="hidden" type="file" name="" id="type2-1"
                            />
                        </div>
                        <button className="rounded-md bg-[#F4B552] px-8 py-2 text-white transition-colors hover:bg-black ">Submit</button>
                    </form>
                    <p className="text-center text-sm text-zinc-700">
                        Don&apos;t have an account?
                        <Link className="text-blue-500 font-bold" to={'/login'}>
                        Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;