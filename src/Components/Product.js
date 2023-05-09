import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
export default function Product(props) {
    let badgeText="SOLD OUT"
    var code=require(`../Images/${props.item.coverImg}`)
    var productlink=`/product/${props.item.id}`
    
    return (
        <Link className="no-decoration"to={productlink}>
            <div className="product">
                {!(props.item.stock) && <div className="product--badge">{badgeText}</div>}
                <img src={code} className="product--image" />
                <p className="product--title">{props.item.title}</p>
                <p className="product--price"><span className="bold">${props.item.price}</span></p>
                <div className="product--stats">
                    <StarIcon className="product--star" />
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount})</span>
                </div>
            </div>
        </Link>
    )
}
