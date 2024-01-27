import "./App.css";
import Chat from "./Chat";
import LoginModal from "./LoginModal";
import PeopleList from "./PeopleList";

function App() {
  return (
    <>
      <LoginModal />
      <div className='container'>
        <div className='row clearfix'>
          <div className='col-lg-12'>
            <div className='card chat-app'>
              {/* List starts here */}
              <PeopleList />
              {/* List ends here */}

              {/* Chat starts here */}
              <Chat />
              {/* Chat starts here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
