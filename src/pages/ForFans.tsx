import React, { useEffect, useState } from "react";

function ForFans() {
  const [currHover, setCurrHover] = useState(0);
  const arr = [
    "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541667558913-5510fb3c7bd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607443360335-d4292828a636?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1597169428801-7c1adf2623bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdpbmd8ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <section
      className="px-8 pt-12 pb-9 bg-cover bg-center desktop:px-[4rem]"
      style={{
        backgroundImage: `url('${arr[currHover]}')`,
        transition: "background ease-out 50ms",
      }}
    >
      <p className="inline-block text-white font-semibold border-[3px] border-white px-3 py-1">
        FOR FANS
      </p>
      <article>
        <h1 className="sr-only">For Fans Discover Menu</h1>
        <ul className="flex-col leading-[1.15] mt-[50px] mb-[70px] desktop:leading-[.9] desktop:mt-5 desktop:mb-[220px]">
          <li
            onMouseOver={() => setCurrHover(1)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2.3rem] desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Records
          </li>
          <li
            onMouseOver={() => setCurrHover(2)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2.3rem] desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Cassettes
          </li>
          <li
            onMouseOver={() => setCurrHover(3)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2.3rem] desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Stories
          </li>
          <li
            onMouseOver={() => setCurrHover(4)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2.3rem] desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Qrates Currated
          </li>
        </ul>

        <a href="#" className="text-white font-semibold text-[1.15rem]">
          The latest from the Qrates Community ➜
        </a>
      </article>
    </section>
  );
}

export default ForFans;
