import Main from '../../pages/main/main';

type AppPageProps = {
  resultCount: number;
}

function App({ resultCount }: AppPageProps): JSX.Element {
  return (
    <Main resultCount={resultCount} />
  );
}


export default App;
