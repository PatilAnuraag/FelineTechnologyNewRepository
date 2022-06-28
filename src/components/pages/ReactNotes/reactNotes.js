import React from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import backgroundImg from "../../../images/bricks2.jpg";

export default function ReactNotes() {
    return(
        <div  style={{
            height: "100vh",
            padding: "0.5em",
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover"
          }}>
        <ReactStickyNotes containerWidth="100%" containerHeight="100%"/>
        </div>
    )
}