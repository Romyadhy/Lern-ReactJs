import React from 'react';

function Avatar({ name, size = 100, img }) {
  return (
    <div className="card-content">
      <h1>{name}</h1>
      <img className="avatar" src={img} alt={name} width={size} height={size} />
    </div>
  );
}

function About({ aboName, desc }) {
  return (
    <>
      <h1>{aboName}</h1>
      <p>{desc}</p>
    </>
  );
}

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profiles() {
  return (
    <Card>
      <Avatar 
        name={"Photo"} 
        img={"https://i.imgur.com/OKS67lhm.jpg"} 
      />
      <About
        aboName={"About"}
        desc={
          "Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis."
        }
      />
    </Card>
  );
}
