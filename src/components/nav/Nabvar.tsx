export default function Navbar() {
    return (
        <>
            <div className="flex w-4/5 m-auto">
                <div className="mt-6 flex justify-between w-full">
                    <div>
                        <h1>Code by Deb</h1>
                    </div>
                    <div className="w-52 sm:block hidden">
                        <div className="flex justify-between">
                            <div>
                                <h1>Work</h1>
                            </div>
                            <div>
                                <h1>About</h1>
                            </div>
                            <div>
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
