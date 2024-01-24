import Image from "next/image";
import Link from "next/link";
import React from "react";
import Metric from "./Metric";

const Card = () => {
	return (
		<div className="flex gap-5">
			<Metric imgUrl={"/assets/images/p1.jpg"} alt={"pic1"} title={"Random1"} />
			<Metric imgUrl={"/assets/images/p2.jpg"} alt={"pic2"} title={"Random2"} />
			<Metric imgUrl={"/assets/images/p3.jpg"} alt={"pic3"} title={"Random3"} />
			<Metric imgUrl={"/assets/images/p4.jpg"} alt={"pic4"} title={"Random4"} />
		</div>
	);
};

export default Card;
