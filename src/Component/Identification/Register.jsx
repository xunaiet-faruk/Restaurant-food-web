import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/Provider/AuthProbider";
import Swal from "sweetalert2";


const Register = () => {
    const [showName, setShowName] = useState({});
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        // const image =form.image.value;
        const Allinfo = { name, email, password }
        createUser(email, password)
            .then(result => {
                const Registeruser = result.user;
                console.log(Registeruser);
                if(result.user){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Registation has been Success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
             .catch((error) => {
                            console.error("Login Error:", error.message);
                            Swal.fire({
                                title: "Something Wrong ",
                                icon: "warning",
                                draggable: true
                            });
                        });
    }

    return (
        <div>
            <div className="pt-[200px]">
                <form onSubmit={handleRegister}>
                    <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 ">
                        <h1 className="text-3xl font-semibold tracking-tight">Sign Up</h1>

                        <div action="#" className="space-y-6">
                            <div className="space-y-2 text-sm">
                                <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                    Username
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                    id="username"
                                    placeholder="Enter username"
                                    name="name"
                                    type="text"
                                    required
                                />
                            </div>

                            <div className="space-y-2 text-sm">
                                <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                    email
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                    id="email"
                                    placeholder="Enter email"
                                    name="email"
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
                                    }} className="hidden" type="file" name="image" id="type2-1"
                                />
                            </div>
                            <button className="rounded-md bg-[#F4B552] px-8 py-2 text-white transition-colors hover:bg-black ">Submit</button>
                        </div>
                        <p className="text-center text-sm text-zinc-700">
                            Don&apos;t have an account?
                            <Link type="Submit" className="text-blue-500 font-bold" to={'/login'}>
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;