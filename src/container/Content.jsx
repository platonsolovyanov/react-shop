// import cheeseChiken from "../assets/img/cheese-chiken.png";
// import pizzaAsian  from "../assets/img/pizza-asian.png";
// import pizzaCheese  from "../assets/img/pizza-cheese.png";
// import pizzaCheeseburger  from "../assets/img/pizza-cheeseburger.png";

import {ContentPizzaItem} from "./";


 function Content() {
    return(
        <div className="content">
        <h2 className="title">Все пиццы</h2>
        <div className="pizza-box">

            <ContentPizzaItem/>
           
        </div>
    </div>

    )
}

export default Content;