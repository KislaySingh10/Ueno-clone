import React from 'react'
import {data} from "../data"
import Card from './Card'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Main() {
    const no=Math.floor(Math.random()*5);
    return (
        <>
            <div className="row">
                <div className="max-30rem">
                    <div className="featured">Featured Project</div>
                    <div className="slogan ">
                    {data[no].name}
                        <div className="second">{data[no].line}</div>
                    </div>
                    <div className=" button">More Projects</div>
                    <ArrowDropDownIcon />
                    
                </div>
                <div >
                    <div className="small">
                        <video  className="large" autoPlay muted>
                            <source src={data[no].video} type="video/mp4"></source>
                        </video>
                    </div>
                    
                <div className="dot"></div>
                    
                </div>
            </div>
            <div className="second third ">
                Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
            </div>

            <div className="vertical">
            </div>
            <div className="row">
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>

            <div className="row banner">
                <div className="col-1 ">
                    <h1>What's new?</h1>
                    <h1 className="second ">Our blog and news</h1>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"> Jan 6 Blog</div>
                        <h1 className="col-2 second">24,895 hours later</h1>
                        <div className="col-1"><NavigateNextIcon />Read more</div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-1"> Oct 19 News</div>
                        <h1 className="col-2 second">24,895 hours later</h1>
                        <div className="col-1"><NavigateNextIcon />Read more</div>
                    </div>
                    <hr></hr>
                    <div className="row ">
                        <div className="col-1"> Oct 12 News</div>
                        <h1 className="col-2 second">24,895 hours later</h1>
                        <div className="col-1"><NavigateNextIcon />Read more</div>
                    </div>
                </div>
            </div>

            <div id="videoBox" class="box">
                <video className="full-vid" autoPlay muted>
                    <source src="./videos/five.mp4" type="video/mp4"></source>
                </video>
            </div>
            <hr></hr>
        </>
    )
}

export default Main
