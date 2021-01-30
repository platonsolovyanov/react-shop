import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaItem } from '../container/index';
import { setCategory } from '../store/actions/filterAction';

const categoryName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items)

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index))
	}, [])

	return (
		<div className='container'>
			<div className='filter-box'>
				<Categories
					items={categoryName}
					onClickItem={onSelectCategory}
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
