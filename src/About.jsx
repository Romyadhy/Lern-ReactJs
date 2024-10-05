import Gallery from "./Galery";

// import React from 'react';


function Image({ person, size }) {
  return (
    <img
      src="https://i.imgur.com/1bX5QH6.jpeg"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

const About = () => {
  return (
    <section className="min-h-screen">
      <div className="font-bold text-4xl text-gray-900 text-center m-4 p-4 cursor-pointer">
        <h1>
          About <span className="text-green-500">Me</span>
        </h1>
      </div>
      <div>
        <Image
          size={300}
          person={{
            name: "nenek",
          }}
        />
      </div>
      <div className="flex item-center justify-center">
        <Gallery />
      </div>
    </section>
  );
};

export default About;
