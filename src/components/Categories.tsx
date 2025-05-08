import { motion } from "framer-motion";

const instrumentCategories = [
	{
		title: "Струнные",
		description: ['Гитары, Укулеле', 'Домры, Балалайки, Гусли', 'и другие']
	},
	{
		title: "Смычковые",
		description: ['Скрипки', 'Виолончели']
	},
	{
		title: "Клавишные",
		description: ['Цифровые пианино', 'Синтезаторы']
	},
	{
		title: "Духовые",
		description: ['Саксофоны, Блокфлейты, Кларнеты', 'Дудуки, Свирели, Губные гармошки', 'Трости к ним и т.д.']
	},
	{
		title: "Ударные",
		description: ['Электронные барабаны', 'Детские установки, Дарбуки', 'Палочки и т.п.']
	},
	{
		title: "Этнические",
		description: ['Калимбы, Глюкофоны', 'и уникальные народные инструменты']
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
					<h4>{cat.title}</h4>
					
					<ul>
						{cat.description.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
					
				</motion.div>
			))}
		</div>
	);
};

export default Categories;