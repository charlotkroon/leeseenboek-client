import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/login/action";
//step 1 import useState from react so i can use it

export default function BookSearchForm(props) {
  const dispatch = useDispatch();
  //lets do weird dispatch stuff

  const [keyword, set_keyword] = useState(""); //my first hook!
  //hooks zijn een soort van arrayding, waar het eerste item een let is die een waarde vasthoudtsearch
  //het twee item is een functie die wanneer ik die aanroep set_keyword("vaaaaaag") de waarde van het eerste
  //item veranderd in "vaaaag"
  //useState("");  // alles tussen de haakjes is beginwaarde "text" , [] , {}, {name: "Jeroen", age: 31}
  //Hooks are awesome!
  return (
    <div>
      <div>
        <h1>Books!</h1>
        <div>
          <form onSubmit={e => props.handleSearch(keyword)}>
            <label>
              <input
                type="text"
                name="search"
                placeholder="Search for your book here.."
                onChange={e => set_keyword(e.target.value)}
                value={keyword}
              />
            </label>
            <input type="submit" value="Search" />
            <button onClick={dispatch({ type: "LOGIN", payload: "Jeroen" })}>
              gelijk naar reducer
            </button>
            <button onClick={dispatch(login(keyword))}>click me</button>
          </form>
        </div>
      </div>
    </div>
  );
}
