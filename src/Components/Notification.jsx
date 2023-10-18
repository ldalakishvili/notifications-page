import React, { useState } from "react";
import data from "../../data.json";

export default function Notification() {
	const [userData, setUserData] = useState(data);
	const markAsRead = () => {
		const updatedUserData = userData.map((item) => ({
			...item,
			read: true,
		}));
		setUserData(updatedUserData);
	};
	const handeSingleClick = (index) => {
		const updatedUserData = userData.map((item, i) => ({
			...item,
			read: i === index ? true : item.read,
		}));
		setUserData(updatedUserData);
	};

	return (
		<div className="bg-[#4961A80D]  w-[730px] pl-[33px] pr-[30px] pb-[18px] rounded-[15px] flex flex-col gap-[31px] max-[500px]:w-[375px]  max-[500px]:px-[16px]  max-[500px]:py-[24px]} ">
			<header className="flex justify-between items-center">
				<h1 className="text-24px font-extrabold">
					Notifications
					<span className="text-[16px] text-[white] bg-[#0A327B] px-[11px] py-[2.5px] rounded-[8px] ml-[11px]">
						{userData.filter((item) => !item.read).length}
					</span>
				</h1>
				<p
					onClick={markAsRead}
					className="text-[16px] font-medium  text-[#5E6778] cursor-pointer hover:text-[#0A327B] "
				>
					Mark all as read
				</p>
			</header>
			<div className="flex flex-col gap-[8px]">
				{userData.map((item, index) => {
					return (
						<div
							onClick={() => handeSingleClick(index)}
							key={index}
							className={`flex gap-[19px] py-[18px] pr-[32px] pl-[20px] rounded-[8px] ${
								item.read ? `bg-transparent` : `bg-[#DDE7EE]`
							} max-[500px]:gap-[13px] max-[500px]:py-[16px] max-[500px]:pr-[26px] max-[500px]:pl-[16px] `}
						>
							<img
								src={`./images/avatar-${item.author
									.replace(" ", "-")
									.toLowerCase()}.webp`}
								className="w-[45px] h-[45px] max-[500px]:w-[39px] max-[500px]:h-[39px] "
							/>

							<div>
								<div>
									<span className="text-[#1C202B] font-extrabold text-[16px] max-[500px]:text-[14px] cursor-pointer hover:text-[#0A327B]">
										{item.author}{" "}
									</span>{" "}
									<span className="text-[16px] max-[500px]:text-[14px] font-medium text-[#5E6778]">
										{item.type}{" "}
									</span>
									{item.content.includes(".webp") ? (
										<img src={item.content} className="w-[45px]" />
									) : item.content.startsWith("Hello,") ? (
										<div className="text-[#0A327B] font-extrabold bg-[#DDE7EE] text-[#5E6778] max-[500px]:text-[14px] font-medium p-[20px] rounded-[10px] cursor-pointer mt-[6px]">
											{item.content}
										</div>
									) : (
										<span
											className={`cursor-pointer ${
												item.type === "left the group" ||
												item.type === "has joined your group"
													? "text-[#0A327B] font-extrabold"
													: " text-[#5E6778] font-extrabold "
											} hover:text-[#0A327B]`}
										>
											{item.content}
										</span>
									)}
								</div>
								<p className="text-[16px] max-[500px]:text-[14px] font-medium text-[#939CAD]">
									{item.time}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
