import JokeGenerator from '../../components/organisms/JokeGenerator/JokeGenerator';
import Navbar from '../../components/organisms/Navbar/Navbar';
import * as React from "react";
export class JokeGeneratorPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <JokeGenerator></JokeGenerator>
            </div>
        );
    }
}
export default JokeGeneratorPage;

