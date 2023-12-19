import React from "react";

export default function Home(){
    return (
      <>
        <div className="container d-flex card">
          <form>
          <br/><br/>
            <label>Username</label>
            <input placeholder="enter User-name" type="text"></input><br/><br/>
            <label>Username</label>
            <input placeholder="enter User-name" type="text"></input>
            <br/><br/><br/>
            <input type="button" value="Login"></input>
            <input type="button" value="/Register"></input>
          </form>
        </div>
      </>
    );
}