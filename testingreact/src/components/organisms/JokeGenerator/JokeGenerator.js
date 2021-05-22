import * as React from 'react';
import Joke from '../../atoms/Joke/Joke';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

export default class JokeGenerator extends React.Component {
    state = {
      joke: null,
      loading: false
    };
  
    loadJoke = async () => {
        this.setState({ loading: true });
      
        const { data: { value: { joke } } } = await axios.get("https://api.icndb.com/jokes/random");
      
        this.setState({ loading: false, joke });
      };
  
    render() {
     const { joke, loading } = this.state;
  
     return (
        <Container>
            <React.Fragment>
            {!joke && !loading && <div>Brak suchara</div>}
            {loading && <div>Ładuję...</div>}
            {joke && !loading && <Joke text={joke} />}
            <button
                onClick={this.loadJoke}
                type="button"
                data-testid="laduj-suchara"
            >
                Załaduj losowy kawał
            </button>
            </React.Fragment>
        </Container>
      );
    }
  }