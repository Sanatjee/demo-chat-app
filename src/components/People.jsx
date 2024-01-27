const People = () => {
  return (
    <li className='clearfix'>
      <img
        src='https://bootdey.com/img/Content/avatar/avatar1.png'
        alt='avatar'
      />
      <div className='about'>
        <div className='name'>Vincents Porter</div>
        <div className='status'>
          <i className='fa fa-circle offline' /> left 7 mins ago
        </div>
      </div>
    </li>
  );
};

export default People;
