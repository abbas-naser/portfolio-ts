import play from "./images/play.png";
import winner from "./images/winner.png";
import homeLoggedOut from "../Memories/images/home-logged-out.png";

export default function SnakesAndLadders() {
  return (
    <div className="snakes-and-ladders-container">
      <img className="project-main-image" src={play} alt="project screenshot" />
      <h2 className="project-title">Snakes & ladders</h2>
      <p className="first-p">
        As our first project in the Software Engineering Immersive Program with
        General Assebmly, we where asked to build a game using{" "}
        <span className="bold">JavaScript, HTML and CSS</span> in one week. The
        game that I chose to build was a game that mimics the known "Snakes and
        Ladders" game, with the ability to play aginst another person or against
        a computer.
      </p>
      {/* lessons learned */}
      <li className="project-subTitle">Playing the game</li>
      <p>
        To start playing, user has to choose to play aginst another person or
        against the computer, once that is done, the player to start playing
        will be chosen randomly, and he can start to roll a dice. Player has to
        get 6 from the dice, or try more than three times to start moving.
      </p>
      <br />
      <p>
        Each player has a specific color for his name and his current block on
        the game. Small colored circles were added to show the path that each
        player took while playing, the circles colors match each player color.
        Another detail is that in case both players are on the same block, then
        that block will be given a gredient with the colors of both players.
      </p>
      <br />
      <p>
        Once a player steps on a "Snake" or "Ladder" block, he will be moved to
        a block that is chosen randomly making sure that the new block has no
        "Snake" or "Ladder" on it, and that block will be chosen randomly every
        time.
      </p>
      <div className="project-image-container">
        <img src={winner} alt="project screenshot" />
      </div>
      <p>
        The player that finishes the game first is the winner of that round.
        Each game has three rounds, and the winner is the one who wins two times
        out of three. Also, there is an option to change the size of the grid
        after each round. The position of the "Snakes" and "Ladders" blocks will
        be chosen randomly each time a new game is started to make the game
        fresh every time, but making sure that there is no "Snake" and "Ladder"
        on the same block, also there are some rules for where those blocks can
        be inserted.
      </p>
      <br />
      <p>
        Animations and sound effects were added almost with every interaction to
        make the game live and more entertaining
      </p>

      {/* lessons learned */}
      <li className="project-subTitle">lessons learned</li>
      <p>
        One of the lessons that has been learned from this project was to think
        about the responsiveness of the website from the beggining. As my first
        project, I have not planned for the responsivness before starting, and
        after completing the game it was very hard to make it responsive,
        because lots of things has to be changed and that will effect the design
        and there was no time left, as the course was intense and we had to move
        to another subjects.
      </p>
      <br />
      <p className="bold">
        Play the game (Desktop only):{" "}
        <a
          href="https://abbas-naser.github.io/Snakes-and-Ladders/"
          target="_blank"
          rel="noreferrer"
        >
          Snakes & Ladders
        </a>
      </p>
      <br />
      <p className="highlighted-p">
        Overall, it was a very good challenge, lots of work and attention to
        details were put on it, and lots of lessons has been learned.
      </p>
      <br />
      <div className="go-up">
        <span>
          <a href="#projects">Go To Projects</a> | <a href="#top"> Top</a>
        </span>
      </div>
      {/* image is not shown, it is added here so it will be downloaded by the browser  */}
      <img src={homeLoggedOut} alt="hidden" style={{ display: "none" }} />
    </div>
  );
}
