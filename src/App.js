//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const number = 0;
  const [lionsScore, setLionsScore] = useState(number);

  console.log('this is useState', useState(0));
  console.log(lionsScore);
  console.log(setLionsScore);

  const [tigersScore, setTigersScore] = useState(number);

  console.log('this is useState', useState(0));
  console.log(tigersScore);
  console.log(setTigersScore);

  const [downs, setDowns] = useState(number);

  console.log('this is useState', useState(0));
  console.log(downs);
  console.log(setDowns);

  const [togo, setTogo] = useState(number);

  console.log('this is useState', useState(0));
  console.log(togo);
  console.log(setTogo);

  const [ballOn, setBallOn] = useState(number);

  console.log('this is useState', useState(0));
  console.log(ballOn);
  console.log(setBallOn);

  const [quarter, setQuarter] = useState(number);

  console.log('this is useState', useState(0));
  console.log(quarter);
  console.log(setQuarter);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow
          downsprop={downs}
          setdownsprop={setDowns}
          togoprop={togo}
          setTogoprop={setTogo}
          ballOnprop={ballOn}
          setBallOnprop={setBallOn}
          quarterprop={quarter}
          setQuarterprop={setQuarter}
        />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setLionsScore(lionsScore + 7)} className="homeButtons__touchdown">
            Home Touchdown
          </button>
          <button onClick={() => setLionsScore(lionsScore + 3)} className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="miscButtons">
          <button onClick={() => setDowns(downs + 1)} className="awayButtons__fieldGoal">
            Downs
          </button>
          <button onClick={() => setTogo(togo + 1)} className="awayButtons__fieldGoal">
            To Go
          </button>
          <button onClick={() => setBallOn(ballOn + 1)} className="awayButtons__fieldGoal">
            Ball On
          </button>
          <button onClick={() => setQuarter(quarter + 1)} className="awayButtons__fieldGoal">
            Quarter
          </button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setTigersScore(tigersScore + 7)} className="awayButtons__touchdown">
            Away Touchdown
          </button>
          <button onClick={() => setTigersScore(tigersScore + 3)} className="awayButtons__fieldGoal">
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
