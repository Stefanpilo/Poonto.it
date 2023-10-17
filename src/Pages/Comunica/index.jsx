import { useLocation } from 'react-router-dom';
import './Comunica.css'
import CADMenu from 'Components/CADMenu';

export default function Comunica() {
    const animationChoice = {
        '/': 'shrink',
        '/Comunica': 'shrinked',
        '/Amplifica': 'reverseMiniShrink',
        '/Diventa': 'shrinked',
        'null': 'shrink'
    };

    const { state } = useLocation();

    return (
        <div id='Comunica-container' className='boxed'>
            <CADMenu animation={animationChoice[state] || 'shrink'} cannotClick='comunica' />
        </div>
    )
}