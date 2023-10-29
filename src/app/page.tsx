"use client";
import { useMyContext } from "../app/provider/statesProvider";
import introAudio from '../../public/intro.mp3'

function App() {
  const { isButtonClicked, setButtonClicked } = useMyContext();
  const handlerPlayWelcomeTrack = () => {
    const audio = new Audio(introAudio);
    audio.play();
    setButtonClicked(true);
  };

  return (
    <>
      <div className="container">
        <header></header>
        <main>
          <section className="card">
            <button onClick={handlerPlayWelcomeTrack}>
              {isButtonClicked ? (
                <p> sounds familiar, huh? </p>
              ) : (
                <p> Click it up!</p>
              )}
            </button>

            <p>
              <strong>Rule 1:</strong>
              <mark> Do not use any UI libraries. </mark> We want to learn how
              to build UIs from scratch.
            </p>
            <p>whatever I hate stylings I want to use Tailwind</p>
            <p>
              <strong>Rule 2:</strong> Feel free to add any features you want,
              but please make sure to{' '}
              <mark> build a branch and send a merge request.</mark>
            </p>
            <p>
              <strong>Rule 3:</strong> Add <mark> comments to your code</mark>{' '}
              so that other developers can understand your implementation.
            </p>
            <p>
              <strong>Rule 4:</strong> We are using
              <mark> React, Typescript, and Vite.</mark> Please make sure to use
              them.
            </p>
            <p>
              <strong>Rule 5:</strong> Remember, everyone starts from 0, please
              be kind and respectful.
            </p>
            <p>
              <strong>Rule 6:</strong> We welcome any errors and mistakes.
              Please do not hesitate to ask questions or
              <mark> raise an issue</mark>.
            </p>
          </section>
        </main>
        <footer>
          <section>
            <p className="read-the-docs">
              Dont know what to do? 1.create a new page to document the
              collaborators contributions! 2. Did you notice that the audio file
              can be played while it is already playing? Fix the bug!
            </p>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
