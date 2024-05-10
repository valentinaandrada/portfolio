import './Header.css';

const Header = () => {
  return (
    <>
      <div className="container header" id='header'>
        {/* <div className='header-language'>
          <button className='language-btn'>EN</button>/
          <button className='language-btn'>ES</button>
        </div> */}
        <h3 className='title'>valentina andrada</h3>
        <h1 className='title header-title'>junior <br/>front end<br/> developer</h1>
        <p className='header-intro'>Developer based in Barcelona, aim to <br/> desing and develop great web applications</p>
        <div className='line'></div>
      </div>
    </>
  )
}

export default Header
