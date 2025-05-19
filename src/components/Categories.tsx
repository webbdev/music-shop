import { motion } from "framer-motion";

const instrumentCategories = [
	{
		title: "Этнические струнные",
		description: "балалайка, домра, мандолина, банджо, лира, гусли и др."
	},
	{
		title: "Смычковые",
		description: "скрипки, виолончель"
	},
	{
		title: "Клавишные",
		description: "цифровые пианино и синтезаторы"
	},
	{
		title: "Духовые",
		description: "губные гармошки, блокфлейты, свирели, дудук, саксофон, кларнет, трости к ним и т.д."
	},
	{
		title: "Ударные",
		description: "цифровые барабаны, детские барабаны, дарбуки, барабанные палочки и т.п."
	}
];

const Categories = () => {
	return (
		
		<div className="category-cards">
			{instrumentCategories.map((cat, index) => (
				<motion.div 
					className="category-card" 
					key={index}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<p>
						<strong>{cat.title}: </strong> 
						{cat.description}
					</p>
				</motion.div>
			))}
		</div>
	);
};

export default Categories;