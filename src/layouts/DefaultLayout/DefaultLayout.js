import Header from '../Header';
import SideBar from '../SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <a href="#">
                    <span>Link ảnh</span>
                </a>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
