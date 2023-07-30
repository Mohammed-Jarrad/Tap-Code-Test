const data = [
	{
		id: 1,
		title: "Stranger Scrims",
		duration: 40,
		tags: ["supernatural", "horror", "drama"],
	},
	{
		id: 2,
		title: "The Scrim of the Dragon",
		duration: 60,
		tags: ["drama", "fantasy"],
	},
	{
		id: 3,
		title: "Scrim Hunters",
		duration: 22,
		tags: ["reality", "home improvement"],
	},
	{
		id: 4,
		title: "This Old Scrim",
		duration: 30,
		tags: ["reality", "home improvement"],
	},
	{
		id: 5,
		title: "What We Do in the Scrim",
		duration: 55,
		tags: ["drama", "comedy", "supernatural"],
	},
	{
		id: 6,
		title: "The Scrimdalorian",
		duration: 58,
		tags: ["fantasy", "sci-fi", "adventure"],
	},
]

function getUniqueTags(data) {
	// !First Solution
	// const uniqueTags = []
	// data.forEach(item => {
	// 	const tags = item.tags
	// 	for (let i = 0; i < tags.length; i++) {
	// 		const tag = tags[i]
	// 		const isExist = uniqueTags.find(ele => ele == tag)
	// 		if (isExist) {
	// 			continue
	// 		} else {
	// 			uniqueTags.push(tag)
	// 		}
	// 	}
	// })
	// return uniqueTags

	// !Second Solution
	// const tagss = []
	// data.forEach(i => {
	// 	i.tags.forEach(tag => tagss.push(tag))
	// })
	// console.log(tagss)
	// const uniqueTags = [...new Set(tagss)]
	// return uniqueTags

	// !Third Solution
	const set = new Set()
	data.forEach(item => {
		const tags = item.tags
		tags.forEach(t => {
			set.add(t)
		})
	})
	return [...set]
}

console.log(getUniqueTags(data))
