import React, { useState } from "react";

let auxList = [];

const List = () => {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [total, setTotal] = useState(0);

	const renderList = (item, i) => {
		return (
			<li className="list-group-item" key={i}>
				{item.val}
				<button
					className="btn btn-danger float-end"
					onClick={(e) => {
						const newList = auxList.filter((i) => i.id != item.id);

						auxList = newList;
						setList(auxList);
						setTotal(auxList.length);
					}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-x-lg"
						viewBox="0 0 16 16">
						<path
							fillRule="evenodd"
							d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
						/>
						<path
							fillRule="evenodd"
							d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
						/>
					</svg>
				</button>
			</li>
		);
	};

	return (
		<div className="mt-5 d-flex justify-content-center align-items-center">
			<div className="text-center" style={{ width: "50%" }}>
				<h1>Todo List</h1>
				<h3>{`Number of elements: ${total}`}</h3>
				<ul className="list-group">
					<li className="list-group-item">
						<input
							type="text"
							placeholder="Press enter to add item"
							style={{ width: "60%" }}
							onChange={(e) => {
								setValue(e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key == "Enter" && value != "") {
									auxList.push({
										id: auxList.length - 1,
										val: value,
									});
									setList(auxList);
									setValue("");
									e.target.value = "";
									setTotal(auxList.length);
								}
							}}
						/>
					</li>

					{auxList.map(renderList)}
				</ul>
			</div>
		</div>
	);
};

export default List;
