/* This example requires Tailwind CSS v2.0+ */
import { InformationCircleIcon, SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export default function Banner({ alert, buttonText, link }) {
    return (
        <div className="bg-indigo-600 rounded-md">
            <div className="max-w-7xl mx-auto rounded-md py-8 px-8  sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-indigo-800">
                            <InformationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                        <p className="ml-3 font-medium text-white truncate">
                            <span className="md:hidden">Alert Box</span>
                            <span className="hidden md:inline">{alert}</span>
                        </p>
                    </div>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                        <Link
                            to={link}
                            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}