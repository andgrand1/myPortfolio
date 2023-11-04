import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <p>&copy; 2023 Granda</p>
      <div class="container">
        <div class="row">
        <div class="col">
      <a href='https://github.com/andgrand1'><img src="./images/25231.png" id='gitHub' class="w-50 h-50"></img></a>
      </div>
      <div class="col">
      <a href='https://www.linkedin.com/in/andy-g-b433b6297/'><img src='./images/linklogo.png' class="w-50 h-50"></img></a>
      </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;