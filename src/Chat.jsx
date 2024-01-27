import RecievedMessage from "./components/RecievedMessage";
import SentMessage from "./components/SentMessage";

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-header clearfix'>
        <div className='row'>
          <div className='col-lg-6'>
            <a
              href='javascript:void(0);'
              data-toggle='modal'
              data-target='#view_info'
            >
              <img
                src='https://bootdey.com/img/Content/avatar/avatar2.png'
                alt='avatar'
              />
            </a>
            <div className='chat-about'>
              <h6 className='m-b-0'>Aiden Chavez</h6>
              <small>Last seen: 2 hours ago</small>
            </div>
          </div>
        </div>
      </div>
      <div className='chat-history'>
        <ul className='m-b-0'>
          <SentMessage />

          <RecievedMessage />
        </ul>
      </div>
      <div className='chat-message clearfix'>
        <div className='input-group mb-0'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fa fa-send' />
            </span>
          </div>
          <input
            type='text'
            className='form-control'
            placeholder='Enter text here...'
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
