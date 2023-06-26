import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../context/ExempleProvider';
import { PostsProvider } from '../../context/PostsProvider';
import './styles.css';

export function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div className="App">
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
export default App;
