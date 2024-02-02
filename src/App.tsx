import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./App.css";
export default function App(): React.JSX.Element {
  return (
    <div className="App">
      <main>
        <Profile />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
// const App: React.FC = (): JSX.Element => {
//   return <div className="App">hello world</div>;
// };
// export default App;
