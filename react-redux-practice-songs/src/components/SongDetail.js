import React from 'react'
import {connect} from 'react-redux';

const SongDetail = ({mySelectedsong}) => {
    if(!mySelectedsong){
        return <div>
            Select a Song.
        </div>;
    }
  return (
    <div>
        <h3>Details for:</h3>
     <p>Title: {mySelectedsong.title}
     </p>
     <p>
         Duration: {mySelectedsong.duration} 
     </p> 
    </div>
  );
}
const mapStateToProps = (state) => {
    return { mySelectedsong: state.selectedSong }
};
export default connect(mapStateToProps)(SongDetail);
