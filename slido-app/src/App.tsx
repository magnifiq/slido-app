import WelcomePage from './pages/WelcomePage/WelcomePage.tsx';

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  return (
    <div className="App">
      <WelcomePage queryParams={queryParams} />
    </div>
  );
}

export default App;
