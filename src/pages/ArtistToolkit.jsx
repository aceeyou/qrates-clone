import { useState } from "react";

function ArtistToolkit() {
  const [currHover, setCurrHover] = useState(0);
  const arr = [
    "https://images.unsplash.com/photo-1590378026065-4ceb53c3de37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBlZGl0aW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1488610675821-b5776c22e019?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1525522819526-d571040e1607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1682326302530-f620c30725ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBlZGl0aW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1525869811964-53594bfcb4b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG11c2ljJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1674655563777-64808fd03be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
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
        ARTIST TOOLKIT
      </p>
      <article>
        <h1 className="sr-only">For Fans Discover Menu</h1>
        <ul className="flex-col leading-[1.15] mt-[50px] mb-[70px] desktop:leading-[.9] desktop:mt-5 desktop:mb-[220px]">
          <li
            onMouseOver={() => setCurrHover(1)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2rem] desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Vinyl Knowledge
          </li>
          <li
            onMouseOver={() => setCurrHover(2)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2rem] tracking-tighter desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Distribution and Promotion
          </li>
          <li
            onMouseOver={() => setCurrHover(3)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2rem] desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Mixing and Mastering
          </li>
          <li
            onMouseOver={() => setCurrHover(4)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2rem] desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Inspiration
          </li>
          <li
            onMouseOver={() => setCurrHover(5)}
            onMouseOut={() => setCurrHover(0)}
            className="text-[2.3rem] desktop:text-[4rem] w-max text-white font-extrabold hover:underline underline-offset-4 decoration-4"
          >
            Qrates Tips
          </li>
        </ul>

        <a href="#" className="text-white font-semibold text-xl">
          The latest from the Artist Toolkit ➜
        </a>
      </article>
    </section>
  );
}

export default ArtistToolkit;
