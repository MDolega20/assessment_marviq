import React from 'react'; // , { useState }
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import PropTypes from 'prop-types';

const TypesItem = (props) => {
    const {range} = props,
     {name, image, options} = props.dataItem;

    let optionsSelected;

    switch (range) {
        case "detail":
            optionsSelected = options.detail;
            break;
        case "mass":
            optionsSelected = options.mass;
            break;
    
        default:
            break;
    }

    return <div className="home_tree_content_item tree_content_item">
        <div className="home_tree_content_item_image tree_content_item_image">
            <LazyLoadImage 
                src={image} alt={`tree_${name}`}
            />
        </div>
        <div className="home_tree_content_item_data tree_content_item_data">
            <div className="home_tree_content_item_data_name tree_content_item_data_name">
                <h3>{name}</h3>
            </div>
            <div className="home_tree_content_item_data_prices tree_content_item_data_prices">
                {optionsSelected.harvest.length > 0 ? <><h4>{name[name.length - 1] === "y"? "Cięty" : "Cięta"}</h4>
                <ul>
                    {optionsSelected.harvest.map((el,i)=>{
                        if(el.min !== null || el.max !== null)
                            return <li>{`${el.min !== null ? `od ${el.min}cm` : ""} ${el.max !== null ? `do ${el.max}cm` : ""} - ${el.price !== null ? `${el.price}pln` : "brak danych"}`}</li>;
                        else
                            return <li>Brak danych</li>;
                    })}
                </ul></> : ""}
                {optionsSelected.pot.length > 0 ? <><h4>{name[name.length - 1] === "y"? "Doniczkowy" : "Doniczkowa"}</h4><ul>
                    {optionsSelected.pot.map((el,i)=>{
                        if(el.min !== null || el.max !== null)
                            return <li>{`${el.min !== null ? `od ${el.min}cm` : ""} ${el.max !== null ? `do ${el.max}cm` : ""} - ${el.price !== null ? `${el.price}pln` : "brak danych"}`}</li>;
                        else
                            return <li>Brak danych</li>;
                    })}
                </ul></> : ""}
            </div>
        </div>
    </div>;
},
Types = (props) => {
    const {treesData, range} = props;
    let date = new Date();
    const tmp = treesData.map((dataItem, i) => {
        return <TypesItem dataItem={dataItem} key={`key_adgfasegbsrbwrs_${i}_${date.getTime()}`} range={range} />;
    });
    return <>{tmp}</>;
}

export default Types;
