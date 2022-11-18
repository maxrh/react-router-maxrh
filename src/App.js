import Navigation from './Templates/Navigation';
import Header from './Templates/Header';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header>

                <Navigation />

            </Header>

            <section className='main'>

                <Outlet />

            </section>

        </div>
    );
}

export default App;
