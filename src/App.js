import memoji from './memoji.png'
import github from './github.svg'
import npm from './npm.svg'
import linkedin from './linkedin.svg'
import TitleScroller from './TitleScroller';
import './App.css';

const mainText = "I'm a Front End Developer that after a hard start with AngularJS 1.1 ๐ fell in love with React ๐ฅฐ"
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, I'm Simone ๐</p>
        <img className='App-main-image' src={memoji} alt='cartoonized Simone'></img>
      </header>

      <main className='App-body'>

        <p>{mainText}</p>

        <div className='App-digital-me'>
          <p> Digital me โคต๏ธ</p>
          <div className='App-links'>
            <a href="https://github.com/mariotsi" target="_blank" rel="noreferrer">  <img alt="GitHub Logo" src={github}></img> </a>
            <a href="https://www.npmjs.com/~mariotsi" target="_blank" rel="noreferrer">  <img alt="NPM Logo" src={npm}></img> </a>
            <a href="https://www.linkedin.com/in/simone-mariotti-6170a9a1/" target="_blank" rel="noreferrer">  <img alt="LinkedIn Logo" src={linkedin}></img> </a>
          </div>
        </div>
      </main>
      <TitleScroller text={mainText} />
    </div>
  );
}

export default App;
