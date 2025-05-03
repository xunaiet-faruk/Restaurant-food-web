import { Link } from "react-router-dom";


const Login = () => {
    const hadlesubmit =e=>{
        e.preventDefault();
        const form =e.target
        const Name =form.Name.value; 
        const password =form.password.value;
        console.log(Name,password);
    }
    return (
        <div className="pt-[200px]">
            <form onSubmit={hadlesubmit}>

                <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 ">
                    <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>

                    <div className="space-y-6">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="Name" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="Name"
                                placeholder="Enter Name"
                                name="Name"
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
                    </div>
                    <p className="text-center text-sm text-zinc-700">
                        Don&apos;t have an account?
                        <a href="#" className="font-semibold underline">
                            <Link type="Submit" className="text-blue-500 font-bold" to={'/signup'}>
                                Signup</Link>
                        </a>
                    </p>
                </div>

            </form>
        </div>
    );
};

export default Login;