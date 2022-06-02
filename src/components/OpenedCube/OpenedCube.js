import CubeFace from "../CubeFace/CubeFace";
import "./OpenedCube.css"

export default function OpenedCube ({cube}){
    const elementFaces = [];
    for (let f = 0; f < cube.length; f++) {
        elementFaces.push(<CubeFace squares={cube[f]} face={f}/>)
    }
    return (<div className="opened-cube">{elementFaces}</div>);
}