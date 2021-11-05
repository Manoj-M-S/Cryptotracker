import React, { useEffect, useState } from 'react'

const Recentlyadded = () => {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-ranker.herokuapp.com/api/recentlyadded`)
          .then((res) => res.json())
          .then((data) => {
    
            setPics(data.result);
          });
      }, []);

    return (
        pics.length > 0 ? (
          pics.map((item) => {
            return (   
              <div key={item.rank}>
               
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4 card">
                    
                <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>Rank : </b> {item.rank}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>Name :</b> {item.name}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                      <b>Price :</b>   {item.price}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>Added :</b>  {item.added}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>1 Day Change : </b> {item.onedaychange}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>1 Hour Change : </b> {item.onehourchange}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>Market Cap :  </b>{item.marketCap}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>Volume :</b>  {item.volume}
                    </h6>
                </div>
                    
                <div className="col-4">
                    
                </div>
                </div>
                </div>
            );
          })
        ) : (
            <div className="loading" >
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FI6kN-6X7nhAAAAAj%2Floading-buffering.gif&f=1&nofb=1" alt="Loading.." width="100px" height="100px" />
         </div>
        )
    )

}

export default Recentlyadded