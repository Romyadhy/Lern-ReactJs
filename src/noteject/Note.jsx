import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { useActionState, useState } from "react";

function NotTitle({title, body}) {
    return (
        <>
            <CreateTitle title={title} />
            <CreateBody body={body}/>
        </>
    );
}

function CreateTitle({title}) {
    return <h1 className="font-bold text-center text-5xl m-4 p-2">{title}</h1>
}

function CreateBody({body}) {
    return (
        <div className="text-center m-2">
            <article>
                <p className="italic">{body}</p>
            </article>
        </div>
    );
    
}

function LernHook() {
    return (
        <>
            <div className=" ml-4 p-2">
                <h1 className="font-semibold">1. USE ACTION STATE</h1>
                {/* take the function here */}
            </div>
        </>
    );
}

function useActionState(action, initialState) {
    const [message, setMessage] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const result = action(message, formData);
        setMessage(result);
    };
    return [message, handleSubmit];
}

function AddtoCardForm({ itemID, itemTitle }) {
    const [message, formAction] = useActionState(addToCart, null);
    return (
    <div className="my-6 mx-4">
      <form className="border-2" onSubmit={formAction}>
        <h2 className="font-bold text-2xl">{itemTitle}</h2>
        <input type="hidden" name="itemID" value={itemID} />
        <button className="bg-blue-500 p-2 rounded-lg text-white hover:bg-sky-700" type="submit">Add to cart</button>
        {message}
      </form>
    </div>
    );
  }

function addToCart(prevState, queryData) {
    const itemID = queryData.get('itemID');
    if (itemID === "1") {
      return "Added to cart";
    } else {
      return "Couldn't add to cart: the item is sold out.";
    }
  }

export default function Note() {
    return (
        <>
        <NotTitle title="HOOKS" body="This is the 1 segment that u must lern in react js" />
        <LernHook />
        <AddtoCardForm itemID="1" itemTitle="Birjon" />
        <AddtoCardForm itemID="2" itemTitle="Birjon" />
        <Link to="/tryprops">What's again??</Link>
        </>
    );
}