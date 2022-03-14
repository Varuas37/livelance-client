/* This example requires Tailwind CSS v2.0+ */
import Chattile from './chattile'

function Messenger() {

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
            <div class="h-screen overflow-hidden">
                <div className="h-full flex overflow-hidden">
                    {/* Static sidebar for desktop */}
                    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                        <div className="flex-1 relative z-0 flex overflow-hidden">
                            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                                {/* Start main area*/}
                                <div className="absolute h-screen inset-0 py-6 px-4 sm:px-6 lg:px-8">


                                    {/* ACTUAL CONVERSATION GOES HERE */}
                                    {/* It's just to check the scrolling works. You have have your own kinda input like thing here.*/}
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />
                                    <Chattile />

                                </div>
                                {/* End main area */}
                            </main>
                            <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto">
                                {/* Start secondary column (hidden on smaller screens) */}
                                <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                                    {/* CHAT TITLE GOES HERE.  */}
                                    <li key='saurav.panthee@gmail.com' className="col-span-1 h-screen w-full bg-white rounded-lg divide-y divide-gray-200">
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                        <Chattile />
                                    </li>
                                </div>
                                {/* End secondary column */}

                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Messenger;