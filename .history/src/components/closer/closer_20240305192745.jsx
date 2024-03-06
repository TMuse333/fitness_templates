
import React from "react";
import './closer.css'


const Closer = ({text,buttonText}) => {

    return (
        <section className="closer-container">
            {/* <div className="closer-contents"> */}


            <h2 className="title-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dicta recusandae mollitia nihil aperiam quaerat aut aliquam porro natus odit!
            </h2>
            <button>
                {buttonText}
            </button>
            {/* </div> */}
        </section>
    )
}

export default Closer