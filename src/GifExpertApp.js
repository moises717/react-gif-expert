import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
	const [categories, setCategories] = useState(["One Punch"]);

	return (
		<>
			<h2>GifExperApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			{categories.map((cat) => (
				<GifGrid key={cat} category={cat} />
			))}
		</>
	);
}
