/** @format */

import React from 'react';
import { Categories, SortPopup, PizzaItem } from '../container/index';

function Home({ items }) {


	return (
		<div className='container'>
			<div className='filter-box'>
				<Categories
					items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
					onClick={name => console.log(name)}
				/>
				<SortPopup
					items={[
						{ name: 'популярности', type: 'popular' },
						{ name: 'цене', type: 'price' },
						{ name: 'алфавиту', type: 'alphabet' },
					]}
				/>
			</div>
			<div className='container'>
				<div className='content'>
					<h2 className='title'>Все пиццы</h2>
					<div className='pizza-box'>
						{items && items.map(obj => <PizzaItem key={obj.id} {...obj} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
