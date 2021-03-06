import { useEffect, useReducer } from 'react';
import { optionsReducer, initialOptions } from '../utils/clockOptionsReducer';
import { Header, FullscreenButton, Gradient, Clock, Menu, AnimateHeaderContainer } from '../components';

export default function IndexPage() {
    const [options, dispatch] = useReducer(optionsReducer, initialOptions);

    useEffect(() => {
        console.log('Hey there.');
        console.log('https://github.com/FestiveAkp/clock');
    }, []);

    return (
        <AnimateHeaderContainer>
            <Gradient />
            <Header title="Gradients Clock">
                <FullscreenButton />
                <Menu options={options} dispatch={dispatch} />
            </Header>
            <Clock options={options} />
        </AnimateHeaderContainer>
    );
}
