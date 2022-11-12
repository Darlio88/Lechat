


//components
import ChatContainer from '../../components/ChatContainer'
import Navbar from '../../components/Navbar'
import ChatArea from '../../components/ChatArea'

//styles
import { AppContainer } from './styles';

function App() {
  return (
   <AppContainer >
      <Navbar />
      <ChatContainer />
      <ChatArea />
   </AppContainer>
  );
}

export default App;