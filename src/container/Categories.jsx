import React from "react"

const Categories = React.memo(function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }


    return (
        <div className="categories ">
            <ul className="categories__ul">
                <li className={`categories__li-btn btn ${activeItem === null ? "active" : ''}`} onClick={() => (onSelectItem(null))}>Все</li>
                {items && items.map((itemName, index) => (
                    <li
                        className={`categories__li-btn btn ${activeItem === index ? "active" : ''}`}
                        onClick={() => onSelectItem(index)}
                        key={`${itemName}_${index}`}>{itemName}</li>
                ))}
            </ul>
        </div>

    )
})

export default Categories;
