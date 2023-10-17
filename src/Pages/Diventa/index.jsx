import { useLocation } from 'react-router-dom';
import CADMenu from 'Components/CADMenu';

export default function Contatti() {
    const animationChoice = {
        '/': 'shrink',
        '/Comunica': 'shrinked',
        '/Amplifica': 'reverseMiniShrink',
        '/Diventa': 'shrinked',
        'null': 'shrinked'
    };

    const { state } = useLocation();

    return (
        <div id='Diventa-container' className='boxed'>
            <CADMenu animation={animationChoice[state]} cannotClick='diventa' />
        </div>
    );
}