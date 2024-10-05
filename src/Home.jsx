// import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
  return <Landing />;
};

export default Home;

function Landing() {
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-[url('https://images.unsplash.com/photo-1523878288860-7ad281611901?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen bg-cover bg-center">
        <h1 className="text-center m-4 p-4 text-4xl font-bold">
          Welcome to My <span className="text-gray-500">Portfolio</span>
        </h1>
        <div className="">
          <img
            src="https://miro.medium.com/v2/resize:fit:595/1*yhB3bW3F8jiCXV-KOXQovQ.jpeg"
            alt="pict"
            className="w-32 h-32 object-cover rounded-full "
          />
        </div>
        <div className="bg-blue-500 my-4 p-2 rounded-md text-white hover:bg-blue-700 cursor-pointer">
          <Link to="/noteject">See other thing</Link>
        </div>
      </div>
    </>
  );
}
