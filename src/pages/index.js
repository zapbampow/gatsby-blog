import React from 'react';

const MostRecent = (props) =>
    <div style={{ backgroundColor:'blue', color:'white', gridArea:'most-recent', height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
        <div style={{ margin:'0 0 1.8em 2.1em' }}>
            <h1 style={{ color:'white', fontWeight:'400', marginBottom:'.4em' }}>Article Title</h1>
            <div>
                <span style={{ marginRight:'1em', backgroundColor:'#0a396d', color:'#fff', padding:'.5em', fontSize:'.9em' }}>Category</span>
                <span style={{ fontSize:'.9em' }}>Date</span>
            </div>
        </div>
    </div>




export default (props) =>
    <div style={{display:'flex', justifyContent:'center', width:'100%', backgroundColor:'grey'}}>
        <div style={{ width:1140, height:450, display:'grid', gridTemplateColumns:'68% 32%', gridTemplateRows:'50% 50%', gridTemplateAreas:`"most-recent second-most-recent" "most-recent third-most-recent"` }}>
            <MostRecent />
            <div style={{ backgroundColor:'yellow', gridArea:'second-most-recent', height:'100%', width:'100%' }}></div>
            <div style={{ backgroundColor:'green', gridArea:'third-most-recent', height:'100%', width:'100%' }}></div>
        </div>
    </div>