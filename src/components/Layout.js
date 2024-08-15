import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="h-screen flex justify-center text-gray-300 bg-gray-950 ">
            <div className="mx-auto mt-8 mx-2">
                <h1 className="text-3xl text-emerald-600 font-bold text-center">
                    Pokemon Top Trumps
                </h1>
                <Outlet />
            </div>
        </div>
    );
}