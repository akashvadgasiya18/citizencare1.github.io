import React from "react";
import Typewriter from "typewriter-effect";
import "../Banner/Banner.css";

const Typewrittertext = () => {
  // const [active, setActive] = useState(false);
  return (
    <>
      <div className="main-container">
        <div className="type-writter-section">
          <h2> Hired Experts & </h2>
          <h2>Get Your Job Done</h2>

          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class="text-1">Hired Experts..</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">Do your work easily</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">Make life easy..</span>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>

        <div className="subtitle">
          <h3>Hired expert! And make your job done</h3>
        </div>

        {/* ---------------------- search bar--------------------------------------- */}

        {/* <div className="search-container">
                    <div className="search-bar">
                        <input type="text" placeholder='Search here...' className={active ? 'search-input active' : 'search-input'} />
                        <button className='search-btn' onClick={() => setActive(!active)}>
                            <i class="fa-solid fa-magnifying-glass" style={{ marginRight:'-5px'}}></i></button>
                    </div>
                </div > */}
      </div>
    </>
  );
};

export default Typewrittertext;
