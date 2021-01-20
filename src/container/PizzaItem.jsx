import React from 'react'
import { Button } from ".";
import cn from 'classnames';
import pt from 'prop-types';

function PizzaItem({ imageUrl, name, price, sizes, types }) {
    const availableTypes = ['тонкое', 'традиционное']
    const availableSizes = ['26', '30', '40']

    const [activeType, setActiveTypes] = React.useState(types[0])
    const [activeSize, setActiveSize] = React.useState(sizes[0])

    // console.log(activeSize)

    const onSelectType = (index) => {
        setActiveTypes(index)
    }

    const onSelectSize = (index) => {
        setActiveSize(index)
    }

    return (
        <div className="pizza-block">
            <img src={imageUrl} alt="" />
            <p>{name}</p>
            <div className="pizza-block__selector">
                <ul>
                    {
                        availableTypes && availableTypes.map((type, index) => (
                            <li
                                key={type}
                                onClick={() => onSelectType(index)}
                                className={cn({
                                    "active": activeType === index,
                                    "disabled": !types.includes(index)
                                })}

                            >
                                {type}
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        availableSizes.map((size, index) => {
                            return (
                                <li
                                    key={size}
                                    onClick={() => onSelectSize(index)}
                                    className={cn({
                                        active: activeSize === index,
                                        disabled: !sizes.includes(+size)
                                    })}
                                >
                                    {size} cм.
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block-price">от {price} ₽</div>
                <Button className="btn" outline>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#EB5A1E" />
                    </svg>

                    <span>Добавить</span>
                    <i>2</i>
                </Button>
            </div>
        </div>

    )
}

// console.log(PizzaItem.propTypes)

PizzaItem.propTypes = {
    name: pt.string.isRequired,
    imageUrl: pt.string.isRequired,
    price: pt.number.isRequired,
    sizes: pt.arrayOf(pt.number).isRequired,
    types: pt.arrayOf(pt.number).isRequired
}

PizzaItem.defaultProps = {
    name: 'Название пиццы',
    imageUrl: 'https://placehold.it/280x280/ffdf8c/000000',
    price: undefined,
    sizes: [],
    types: [],
}

export default PizzaItem;