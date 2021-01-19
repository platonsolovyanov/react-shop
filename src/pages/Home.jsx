import React from 'react'
import { Categories, Content, SortPopup } from "../container/index";

function Home() {
    return (
        <div>
            <div className='container'>
				<div className='filter-box'>
					<Categories 
					items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
					onClick={(name)=> console.log(name)}
					/>
					<SortPopup items={['популярности', 'цене', 'алфавиту']}/>
				</div>
		</div>
		<div className='container'>
				<Content />
		</div>
        </div>            
    )
}

export default Home
