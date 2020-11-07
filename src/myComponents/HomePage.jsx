import React from 'react';
import '../css/css/index_page_css.css';
import '../css/css/homepage_sliders.css';

const HomePage = () => {
    return (
        <>
            <br />
            <div className="im-scrollbar-and-news-container">
                <div className="main-scrollbar">
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                </div>
                <div className="latest-News">
                    <div className="news-1">
                        <div style={{ backgroundColor: 'lightgreen', padding: '0.71rem 1.2rem ' }}> <h2> News 1 </h2> </div>
                        <div style={{ padding: '0.71rem 1.2rem ' }}>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                        </div>

                    </div>
                    <div className="news-1">
                        <div style={{ backgroundColor: 'lightgreen', padding: '0.71rem 1.2rem ' }}> <h2> News 2 </h2> </div>
                        <div style={{ padding: '0.71rem 1.2rem ' }}>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                        </div>
                    </div>
                    <div className="news-1">
                        <div style={{ backgroundColor: 'lightgreen', padding: '0.71rem 1.2rem ' }}> <h2> News 3 </h2> </div>
                        <div style={{ padding: '0.71rem 1.2rem ' }}>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                            <h3> Hello World </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default HomePage;