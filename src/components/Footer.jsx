import vkIcon from '../assets/img/vk-icon.svg';
import instIcon from '../assets/img/instagram-icon.svg';

function Footer() {
    return (
      <div className="footer">
        <div className="container">
            <div className="footer-content">
                <div>
                    <h2>Lucky Pizza</h2>
                    <p>Самая вкусная пицца от нас :)</p>
                    <ul className="socials">
                        <li><a href='https://dodopizza.ru/'><svg width="25" className="browser" data-name="Layer 1" id="Layer_1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"/><path d="M16,30a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V29A1,1,0,0,1,16,30Z"/><path d="M23,17a1,1,0,0,1-1-1c0-6.5-2.75-12-6-12a1,1,0,0,1,0-2c4.49,0,8,6.15,8,14A1,1,0,0,1,23,17Z"/><path d="M16,30a1,1,0,0,1,0-2c3.25,0,6-5.5,6-12a1,1,0,0,1,2,0C24,23.85,20.49,30,16,30Z"/><path d="M9,17a1,1,0,0,1-1-1C8,8.15,11.51,2,16,2a1,1,0,0,1,0,2c-3.25,0-6,5.5-6,12A1,1,0,0,1,9,17Z"/><path d="M16,30c-4.49,0-8-6.15-8-14a1,1,0,0,1,2,0c0,6.5,2.75,12,6,12a1,1,0,0,1,0,2Z"/><path d="M29,17H3a1,1,0,0,1,0-2H29a1,1,0,0,1,0,2Z"/><path d="M27,11H5A1,1,0,0,1,5,9H27a1,1,0,0,1,0,2Z"/><path d="M27,23H5a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z"/></svg></a></li>
                        <li><a href='https://vk.com/dodo'><img width="25" className="vk" src={vkIcon} alt="vk"/></a></li>
                        <li><a href='https://instagram.com'><img width="25" className="inst" src={instIcon} alt="instagram"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Footer;