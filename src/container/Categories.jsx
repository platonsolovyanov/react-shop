import React from "react"
function Categories({items, onClick}){    
    const [activeItem, setActiveItem] = React.useState(null)        

    const onSelectItem = (index) => {
        setActiveItem(index)        
    }


    return(
        <div className="categories ">            
                <ul className="categories__ul">
                    <li className={`categories__li-btn btn ${activeItem === null ? "active" : ''}`} onClick={() => (onSelectItem(null))}>Все</li>
                    {items && items.map((itemName, index) => (
                         <li  
                         className={`categories__li-btn btn ${activeItem === index ? "active" : ''}`}
                         onClick={()=> onSelectItem(index)} 
                         key={`${itemName}_${index}`}>{itemName}</li>
                    ))}
                </ul>            
        </div>
        
    )
}

// class Categories extends React.Component {

//     state = {
//         activeItem: null, 
//     }

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         })        
//     }

//     render(){
//         const {items, onClick} = this.props
//         console.log(this)
//         return(
//             <div className="categories ">
//                 <ul className="categories__ul">
//                     <li className="categories__li-btn btn active">Все</li>
//                     {items.map((itemName, index) => (
//                          <li  
//                          className={`categories__li-btn btn ${this.state.activeItem === index ? "active" : ''}`}
//                          onClick={() => this.onSelectItem(index)} 
//                          key={`${itemName}_${index}`}>{itemName}</li>
//                     ))}
//                 </ul>            
//             </div>
//         )
//     }
// }

export default Categories;
