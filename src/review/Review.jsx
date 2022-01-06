import React, { useState } from 'react'
import Details from "./Details"
import "../index.css"

const Review = () => {

    const [index, setIndex] = useState(0);

    const { name, image } = Details[index];


    console.log(name);
    const next = () => {
        let rand = Details.length - 1;
        console.log("rand", rand)
        if (index < rand) {
            setIndex(index + 1)
            console.log(Details.length)
            console.log(index)
        }
        else {
            setIndex(0);
        }


    }
    const prev = () => {
        let rand = Details.length - 1;
        console.log("rand", rand)
        if (index > 0) {
            setIndex(index - 1);
        }
        else {
            setIndex(rand);

        }

    }

    return (
        <div className="container1">

            <h1>review page</h1>
            <div className="cont">
                <div className="pic img">
                    <img src={image} alt="" />
                    <h4>{name}</h4>

                </div>
                <div className="btn">
                    <button onClick={next} className="btn">Next</button>
                    <button onClick={prev} className="btn">Prev</button>

                </div>

            </div>


        </div>
    )
}

export default Review;
