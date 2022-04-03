import React from "react";
import { MailIcon, PhoneIcon, PencilIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const ProfileBodyPart = ({ profile }) => {
	return (
		<div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
			<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
				{profile.accountType && (
					<div className="sm:col-span-1">
						<dt className="text-sm font-medium text-gray-500">Role</dt>
						<dd className="mt-1 text-sm text-gray-900">
							{profile.accountType}
						</dd>
					</div>
				)}
				{profile.gender && (
					<div className="sm:col-span-1">
						<dt className="text-sm font-medium text-gray-500">Gender</dt>
						<dd className="mt-1 text-sm text-gray-900">{profile.gender}</dd>
					</div>
				)}
				{profile.contactNumber && (
					<div className="sm:col-span-1">
						<dt className="text-sm font-medium text-gray-500">
							Contact Number
						</dt>
						<dd className="mt-1 text-sm text-gray-900">
							{profile.contactNumber}
						</dd>
					</div>
				)}
				{profile.categories.length > 0 && (
					<div className="sm:col-span-1">
						<dt className="text-sm font-medium text-gray-500">Categories</dt>
						<dd className="mt-1 text-sm text-gray-900">
							{profile.categories.map((each) => (
								<p key={each}>{each} </p>
							))}
						</dd>
					</div>
				)}
				{profile.subCategories.length > 0 && (
					<div className="sm:col-span-1">
						<dt className="text-sm font-medium text-gray-500">Sub-Categories</dt>
						<dd className="mt-1 text-sm text-gray-900">
							{profile.subCategories.map((each) => (
								<p key={each}>{each} </p>
							))}
						</dd>
					</div>
				)}
				{profile.skills && (
					<div className="sm:col-span-1">
						<dt className="text-sm font-medium text-gray-500">Skills</dt>
						<dd className="mt-1 text-sm text-gray-900">
							{profile.skills.map((eachSkill) => (
								<p key={eachSkill}>{eachSkill} </p>
							))}
						</dd>
					</div>
				)}
				{profile.about && (
					<div className="sm:col-span-2">
						<dt className="text-sm font-medium text-gray-500">About</dt>
						<dd
							className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
							dangerouslySetInnerHTML={{
								__html: profile.about && profile.about,
							}}
						/>
					</div>
				)}
			</dl>
		</div>
	);
};

export default ProfileBodyPart;
