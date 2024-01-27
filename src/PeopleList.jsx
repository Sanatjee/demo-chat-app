import People from "./components/People";

const PeopleList = () => {
  return (
    <>
      <div id='plist' className='people-list'>
        <div className='input-group search-bar'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fa fa-search' />
            </span>
          </div>
          <input type='text' className='form-control' placeholder='Search...' />
        </div>
        <ul className='list-unstyled chat-list mt-2 mb-0'>
          <People />
        </ul>
      </div>
    </>
  );
};

export default PeopleList;
