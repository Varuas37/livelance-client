import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
	ChevronDownIcon,
	FilterIcon,
	MinusSmIcon,
	PlusSmIcon,
	ViewGridIcon,
} from "@heroicons/react/solid";
import CategoryGrid from "../../components/core/CategoryGrid";
import { Link, useParams } from "react-router-dom";

const sortOptions = [
	{ name: "Pay: Low to High", href: "/home/sort/paylowtohigh", current: false },
	{ name: "Pay: High to Low", href: "/home/sort/payhightolow", current: false },
	{
		name: "Duration: Ascending",
		href: "/home/sort/durationascending",
		current: false,
	},
	{
		name: "Duration: Descending",
		href: "/home/sort/durationdescending",
		current: false,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const SortOptions = () => {
	const { sortterm } = useParams();
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	const sortNameMapping = {
		paylowtohigh: "Pay: Low to High",
		payhightolow: "Pay: High to Low",
		durationascending: "Duration: Ascending",
		durationdescending: "Duration: Descending",
	};

	return (
		<>
			<div className="relative items-baseline grid justify-items-end p-2 pt-5 pb-6 ">
				<div className="flex">
					<Menu as="div" className="relative inline-block text-left ">
						<div>
							<Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 ml-64">
								{sortterm ? sortNameMapping[sortterm] : "Arrange"}
								<ChevronDownIcon
									className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
									aria-hidden="true"
								/>
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									{sortOptions.map((option) => (
										<Menu.Item key={option.name}>
											{({ active }) => (
												<Link
													to={option.href}
													className={classNames(
														option.current
															? "font-medium text-gray-900"
															: "text-gray-500",
														active ? "bg-gray-100" : "",
														"block px-4 py-2 text-sm"
													)}
												>
													{option.name}
												</Link>
											)}
										</Menu.Item>
									))}
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
					{/* Keep this if you want to have list or grid view */}

					{/* <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View grid</span>
                                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                            </button> */}

					<button
						type="button"
						className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
						onClick={() => setMobileFiltersOpen(true)}
					>
						<span className="sr-only">Filters</span>
						<FilterIcon className="w-5 h-5" aria-hidden="true" />
					</button>
				</div>
			</div>
		</>
	);
};

export default SortOptions;
