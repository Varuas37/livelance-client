import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../repository/firebase";
const ImageHandler = ({ props }) => {
	const imageLink = props.columnName ? props.columnName : "imagelink";
	const [progress, setProgress] = useState(0);
	const [fileName, setFileName] = useState("");

	const formHandler = async (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		const url = URL.createObjectURL(file);
		
		uploadFiles(file);
	};

	const uploadFiles = (file) => {
		//
		if (!file) return;

		var today = new Date();
		var date =
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate();
		var time =
			today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date + " " + time;

		setFileName(file.name);
		const insideFolder = file.name + " " + dateTime;
		const storageRef = ref(storage, `chiaupdate/${insideFolder}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(prog);
			},
			(error) => console.log(error),
			async () => {
				return await getDownloadURL(uploadTask.snapshot.ref).then(
					(downloadURL) => {
						props.setSectionMediaLink({
							...props.sectionMediaValue,
							[imageLink]: downloadURL,
						});
					}
				);
			}
		);
	};

	return (
		<>
			{props.sectionMediaTitle && (
				<div className="media-part">
					<div>
						<h3 className="image-link-part">
							<br />
							<span>
								<img
									src={props.sectionMediaValue[props.columnName]}
									alt=""
									style={{ width: "128px", height: "128px" }}
								/>
							</span>
						</h3>
						<br />
						<label htmlFor="picture">{props.sectionMediaTitle}</label>
						<br />
						<input
							type="file"
							className="textarea"
							id="picture"
							onChange={formHandler}
						/>
					</div>
					<h2>
						Uploading done {progress}% of file:{" "}
						<span style={{ color: "blue" }}>{fileName}</span>
					</h2>

					<br />
				</div>
			)}
		</>
	);
};

export default ImageHandler;
