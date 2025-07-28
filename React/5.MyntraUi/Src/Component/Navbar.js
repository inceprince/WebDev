function Header() {
  return (
    <div className="heading">
      <img className="imges" src="https://images.indianexpress.com/2021/01/myntra.png"   />
      <div className="options">
        <button className="bttn">Men</button>
        <button className="bttn">Kids</button>
        <button className="bttn">Home and Living</button>
        <button className="bttn">Beauty</button>
        <button className="bttn">Studio</button>
      </div>
      <input className="search-bar" type="text" placeholder="Search for products brands and more" />
      <div className="profile">
        <button className="bttn1">Profile</button>
        <button className="bttn1 ">Wishlist</button>
        <button className="bttn1">Bag</button>
      </div>
    </div>
  );
}

export default Header;