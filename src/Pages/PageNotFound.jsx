import giorno from "./giorno.mp3";

export default function PageNotFound() {

    return (
        <>
            <h1>404CiccioNotFound</h1>
            <audio id="aud" src={giorno} autoPlay/>
        </>
    );
}