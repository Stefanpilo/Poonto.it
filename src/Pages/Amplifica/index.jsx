import { useLocation } from "react-router-dom";
import CADMenu from "Components/CADMenu";

export default function Amplifica() {
    const animationChoice = {
        '/': 'AmplificaShrink',
        '/Comunica': 'miniShrink',
        '/Amplifica': 'miniShrink',
        '/Diventa': 'miniShrink',
        'null': 'miniShrink'
    };

    const { state } = useLocation();

    return (
        <div id='Amplifica-container' className='boxed'>
            <CADMenu animation={animationChoice[state] || 'miniShrink'} cannotClick='amplifica' />
        </div>
    );
}