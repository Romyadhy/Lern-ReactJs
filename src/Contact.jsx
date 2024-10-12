import Student from "./props/Student";
// import React from 'react';

const Contack = () => {
  return (
    <section className="min-h-screen">
      <div className="font-bold text-4xl text-gray-900 text-center m-4 p-4 cursor-pointer">
        <h1 className="">Contact <span className="text-green-500">Me</span></h1>
      </div>
      <Student name="Hattori" age={20} isStudent={true} />
      <Student name="Mordex" age={20} isStudent={false} />
      <Student name="WhuShang" age={20} isStudent={false} />
      <Student name="Yimuko" age={20} isStudent={true} />
      <Student name="broo" age={0}/>
      <Student name="gojo"/>
    </section>
    
  );
};

export default Contack;
