import React from 'react'

const Coin = ({name, rank, image, symbol, price, max, min, priceChange, marketCap}) => {
    return ( 
  
  <tbody>
    <tr>
      <th scope="row ">{rank}</th>
      <td>
        <div className="row asd">
            <div className="col-3 asd"><img className="img-fluid  bg-transparent " src={image} alt="" /></div> 
            <div className="col-6 asd">{name}</div> 
        </div> 
      </td>
      <td colspan="2">{symbol}</td>
      <td>$ {price.toFixed(2)}</td>

      {priceChange < 0 ? (
          <td><p  className="text-danger asd">{priceChange.toFixed(2)}%</p></td>
          ):(<td><p  className="text-success asd">{priceChange.toFixed(2)}%</p></td>) 
        }
      
      <td>$ {max.toFixed(2)}</td>
      <td>$ {min.toFixed(2)}</td>
      <td>${marketCap.toLocaleString()}</td>
      
    </tr>   
  </tbody>
      
    )
}

export default Coin
