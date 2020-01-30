import React, { Fragment, Component } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.13" 
                    title="Tutorial React JS - Bagian 1" 
                    desc="2x ditonton. 2 hari yang lalu"
                />
                <YoutubeComp 
                    time="4.22" 
                    title="Tutorial React JS - Bagian 2" 
                    desc="200x ditonton. 2 hari yang lalu"
                />
                <YoutubeComp 
                    time="5.07" 
                    title="Tutorial React JS - Bagian 3" 
                    desc="5k ditonton. 2 hari yang lalu"
                />
                <YoutubeComp 
                    time="7.07" 
                    title="Tutorial React JS - Bagian 3" 
                    desc="20k ditonton. 2 hari yang lalu"
                />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;