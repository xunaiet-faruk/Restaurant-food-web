

const Register = () => {
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
                        <button className="rounded-md bg-[#F4B552] px-4 py-2 text-white transition-colors hover:bg-black ">Submit</button>
                    </form>
                    <p className="text-center text-sm text-zinc-700">
                        Don&apos;t have an account?
                        <a href="#" className="font-semibold underline">
                            Signup
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;