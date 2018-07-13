import React, { Component } from 'react';
import './LineUp.css';
import Favorites from '../Favorites/Favorites';
import localForage from "localforage"
import {
  Button,
  Header,
  List,
  Segment,
  Divider,
  Icon
} from 'semantic-ui-react';

const lineUpItems = [
  {"day": "Freitag", "time": "16:00", "stage": "Panama Stage", "artist": "Animale", "url": "https://soundcloud.com/planetanimale"},
  {"day": "Freitag", "time": "16:45", "stage": "Panama Stage", "artist": "Aka Aka", "url" : "https://open.spotify.com/artist/64fjAjykuM8Oc3Bqup4g72?si=eHZzVcj6RBywEv9lWznu4w"},
  {"day": "Freitag", "time": "18:15", "stage": "Panama Stage", "artist": "Zonderling", "url": "https://open.spotify.com/artist/0bMKf3lIYR9GaNTdFKkTOr?si=uK2GZmcdQwWNS7aG1ST7ng"},
  {"day": "Freitag", "time": "19:15", "stage": "Panama Stage", "artist": "Lost Frequencies", "url" : "https://open.spotify.com/artist/7f5Zgnp2spUuuzKplmRkt7?si=4LCsNwT5SjaTcOdlswqpFQ"},
  {"day": "Freitag", "time": "20:30", "stage": "Panama Stage", "artist": "Oliver Heldens", "url": "https://open.spotify.com/artist/5nki7yRhxgM509M5ADlN1p?si=fkgf2nlIQBi2q8p3bSmnzg"},
  {"day": "Freitag", "time": "22:00", "stage": "Panama Stage", "artist": "Plastik Funk", "url": "https://open.spotify.com/artist/7wmCy21VjfmbP8DznMJe8v?si=CEEQNOwVSXW7Uk-sjGBvaQ"},
  {"day": "Freitag", "time": "16:00", "stage": "Baumann Container Stage", "artist": "Chloe Cree", "url": "https://soundcloud.com/chloecree"},
  {"day": "Freitag", "time": "17:00", "stage": "Baumann Container Stage", "artist": "ASK:ME", "url": "https://open.spotify.com/artist/39vA0tgkcBq6RYH8Nn4CzU?si=s-Dla8FxSGuHK0Yxdyq1pQ"},
  {"day": "Freitag", "time": "18:30", "stage": "Baumann Container Stage", "artist": "Anna", "url": "https://soundcloud.com/dj_anna"},
  {"day": "Freitag", "time": "20:15", "stage": "Baumann Container Stage", "artist": "Charlotte de Witte", "url": "https://open.spotify.com/artist/1lJhME1ZpzsEa5M0wW6Mso?si=LCrsH73cQAeUiyOxOdTi1g"},
  {"day": "Freitag", "time": "22:00", "stage": "Baumann Container Stage", "artist": "Len Faki", "url": "https://open.spotify.com/artist/3fI3Z6NnYoeSQjcqPQDbM4?si=_1bhFNNnQfW4JUEuS5xrYA"},
  {"day": "Freitag", "time": "15:30", "stage": "Umbrella Stage", "artist": "Greylight", "url": "https://soundcloud.com/greylightmusic"},
  {"day": "Freitag", "time": "16:30", "stage": "Umbrella Stage", "artist": "GNTN", "url": "https://open.spotify.com/artist/6guwuHIjpVnmvaBjzertzu?si=BCp1P_wpTWWmLwTFYamzgw"},
  {"day": "Freitag", "time": "18:00", "stage": "Umbrella Stage", "artist": "Hidden Empire", "url": "https://open.spotify.com/artist/44Ga1YqZthFOzZSTHiNWkC?si=ijyEgytTSsizlRwmOyWf9g"},
  {"day": "Freitag", "time": "20:00", "stage": "Umbrella Stage", "artist": "Oliver Koletzki", "url": "https://open.spotify.com/artist/1WjBIvYAnZTkTh5UiZNwlR?si=m6bKeB17TcOJWvGTcn0l0g"},
  {"day": "Freitag", "time": "22:00", "stage": "Umbrella Stage", "artist": "Reiner Zonneveld", "url": "https://open.spotify.com/artist/21A7bhIL1m6CNZn8y57PIZ?si=dO875FQfRJWJ-QZ7_cQf5Q"},
  {"day": "Freitag", "time": "15:30", "stage": "Sparkassen Bretterbude", "artist": "Elektrodrei", "url": "https://open.spotify.com/artist/03Z2fNVhxdoe53lBe1BTUO?si=WdMZJrvZRcGs7E7AOes6GQ"},
  {"day": "Freitag", "time": "16:30", "stage": "Sparkassen Bretterbude", "artist": "Markus Schneider", "url": "https://soundcloud.com/acidfonic_markus_schneider"},
  {"day": "Freitag", "time": "18:00", "stage": "Sparkassen Bretterbude", "artist": "Ben Dust", "url": "https://open.spotify.com/artist/4smTLJEoRPULdc4QuG7JGo?si=Z-L5um0XS46-acuJIUhSAw"},
  {"day": "Freitag", "time": "19:30", "stage": "Sparkassen Bretterbude", "artist": "Kerstin Eden", "url": "https://open.spotify.com/artist/3RgxaQ5pM2rSHPu9KqMJ9r?si=BLgQEW-YS1KRMinChK_BnA"},
  {"day": "Freitag", "time": "21:30", "stage": "Sparkassen Bretterbude", "artist": "Pappenheimer", "url": "https://open.spotify.com/artist/46g2NeMi2Pq1yRP3CHnov8?si=ZIZoBP3jQr-sCYfabj4bvw"},
  {"day": "Freitag", "time": "16:00", "stage": "Jägermeister Stage", "artist": "Lorenzo", "url": null},
  {"day": "Freitag", "time": "17:00", "stage": "Jägermeister Stage", "artist": "Stephane Quatre", "url": "https://soundcloud.com/super_groove"},
  {"day": "Freitag", "time": "18:00", "stage": "Jägermeister Stage", "artist": "Gerome", "url": null},
  {"day": "Freitag", "time": "19:00", "stage": "Jägermeister Stage", "artist": "Carsten Halm", "url": "https://soundcloud.com/carsten-halm"},
  {"day": "Freitag", "time": "20:00", "stage": "Jägermeister Stage", "artist": "Bedrud", "url": "https://soundcloud.com/mohammad-ali-bedrud"},
  {"day": "Freitag", "time": "21:00", "stage": "Jägermeister Stage", "artist": "Roben Gardemann", "url": "https://soundcloud.com/willi2207"},
  {"day": "Samstag", "time": "12:30", "stage": "Panama Stage", "artist": "Alex Hövelmann", "url": "https://soundcloud.com/alexhvlmnn"},
  {"day": "Samstag", "time": "13:30", "stage": "Panama Stage", "artist": "Lenex", "url": null},
  {"day": "Samstag", "time": "14:30", "stage": "Panama Stage", "artist": "Klangtherapeuten", "url": "https://open.spotify.com/artist/0QcOjrywD2cdYAZfbmeVCe?si=9NKTKL99RJqESHEX0eETNw"},
  {"day": "Samstag", "time": "15:15", "stage": "Panama Stage", "artist": "Freiboitar", "url": "https://open.spotify.com/artist/1HcMKF2zXr12XNvN95DKvA?si=zNjv05icQTGZdFaY2DuIsg"},
  {"day": "Samstag", "time": "16:00", "stage": "Panama Stage", "artist": "Querbeat", "url": "https://open.spotify.com/artist/3bUA5ltyxKcuYe5G2U0GA4?si=yfCrqlt9TamaLnfHqQlfEQ"},
  {"day": "Samstag", "time": "17:00", "stage": "Panama Stage", "artist": "Gestört aber GeiL", "url": "https://open.spotify.com/artist/7KAGJwWQQui8b0uqwXRkSr?si=2c0WgJutRtKOsLCi7WcZng"},
  {"day": "Samstag", "time": "18:15", "stage": "Panama Stage", "artist": "257ers", "url": "https://open.spotify.com/artist/6ihLfpY3cmdGyWEnItn30w?si=tl2rAeYDQQekQ5joiCnNhA"},
  {"day": "Samstag", "time": "19:30", "stage": "Panama Stage", "artist": "Lucas & Steve", "url": "https://open.spotify.com/artist/5wwneIFdawNgQ7GvKK29Z3?si=EPxEw6PDTKOtZOO0btInBA"},
  {"day": "Samstag", "time": "20:45", "stage": "Panama Stage", "artist": "Curbi", "url": "https://open.spotify.com/artist/2XiiUuK68XNdHaHOAF5hnT?si=l1uS0Lk8T1aU7W46v7eEcA"},
  {"day": "Samstag", "time": "22:00", "stage": "Panama Stage", "artist": "Dekon", "url": "https://soundcloud.com/dekonmusic"},
  {"day": "Samstag", "time": "12:00", "stage": "Baumann Container Stage", "artist": "Adriano Rosso", "url": "https://open.spotify.com/artist/4AgVkZsWHJLJ7bqbpm4m7A?si=O5iX916KQbWc52qP9hwsLg"},
  {"day": "Samstag", "time": "13:00", "stage": "Baumann Container Stage", "artist": "HRRSN", "url": "https://open.spotify.com/artist/72Lkv89Fq0MhehW7lNahXN?si=fICMncKZSD6glPh2pzr7PA"},
  {"day": "Samstag", "time": "14:30", "stage": "Baumann Container Stage", "artist": "Rey & Kjavik", "url": "https://open.spotify.com/artist/0R7kz98b2zjiuU3AffoeYz?si=0mNGQFOLTba46TUxPuLD-w"},
  {"day": "Samstag", "time": "16:00", "stage": "Baumann Container Stage", "artist": "Schlepp Geist", "url": "https://open.spotify.com/artist/3QrUgT4R2242O2mqHUeI95?si=_hPobBcZRBKZAFiJDT4eLQ"},
  {"day": "Samstag", "time": "17:00", "stage": "Baumann Container Stage", "artist": "Felix Kröcher", "url": "https://open.spotify.com/artist/6lDsCwKwjMQAmR2ueIGUGJ?si=_Itz74OeQ9q2LIIPeVfs9Q"},
  {"day": "Samstag", "time": "18:30", "stage": "Baumann Container Stage", "artist": "Oliver Huntemann", "url": "https://open.spotify.com/artist/0NBGssQpgDczTsVEp4pCbR?si=eTiGZJhLTfi3KlHV7DMhpw"},
  {"day": "Samstag", "time": "20:00", "stage": "Baumann Container Stage", "artist": "Pan-Pot", "url": "https://open.spotify.com/artist/6OQOvP7RAdmAKVXXQqD0Se?si=kIHGUA0CTfeYsOVbiPOypQ"},
  {"day": "Samstag", "time": "22:00", "stage": "Baumann Container Stage", "artist": "Ben Klock", "url": "https://open.spotify.com/artist/1vJHfCreWAS46V8RZ67ojo?si=OKGy-i_ORTyjVe3X_ki92A"},
  {"day": "Samstag", "time": "12:30", "stage": "Umbrella Stage", "artist": "Hondo", "url": null},
  {"day": "Samstag", "time": "13:30", "stage": "Umbrella Stage", "artist": "Arado", "url": "https://open.spotify.com/artist/1RC5ZOxe62bcUrpR50xcQV?si=VCeAa5RdSAii8IUrXALJ-w"},
  {"day": "Samstag", "time": "15:00", "stage": "Umbrella Stage", "artist": "Junge Junge", "url": "https://open.spotify.com/artist/721T2PETMLaAkijbYu05VD?si=fGRM45DLSn2jbOD0pxkSHg"},
  {"day": "Samstag", "time": "16:30", "stage": "Umbrella Stage", "artist": "Sarazar", "url": "https://open.spotify.com/artist/7fXsYMwApwATorXlTt95LD?si=jMaxi2bLQLaSz2nRW80n7g"},
  {"day": "Samstag", "time": "17:30", "stage": "Umbrella Stage", "artist": "Björn Grimm", "url": "https://soundcloud.com/bjoerngrimm"},
  {"day": "Samstag", "time": "18:30", "stage": "Umbrella Stage", "artist": "Bebetta", "url": "https://open.spotify.com/artist/1UGUF4voyBXt5wXrLjvS5s?si=Lt3_W4dOTraX31QJhbwNEw"},
  {"day": "Samstag", "time": "20:30", "stage": "Umbrella Stage", "artist": "Format:B", "url": "https://open.spotify.com/artist/5Am25tT39BPzreHngMkuux?si=-6YsIkjjSWu6UDd4d_r5Mw"},
  {"day": "Samstag", "time": "22:00", "stage": "Umbrella Stage", "artist": "Claptone", "url": "https://open.spotify.com/artist/4mncDFjVLUa3s025Tct3Ry?si=3un85XaRTU-BqGcFRf7rqA"},
  {"day": "Samstag", "time": "13:00", "stage": "Sparkassen Bretterbude", "artist": "Schön im Wald", "url": "https://soundcloud.com/schoenimwald_music"},
  {"day": "Samstag", "time": "15:00", "stage": "Sparkassen Bretterbude", "artist": "Nicone", "url": "https://open.spotify.com/artist/70s3JhU9Ai0cIowagibjNI?si=NCMe2OYeSZise5FymdCnjg"},
  {"day": "Samstag", "time": "16:30", "stage": "Sparkassen Bretterbude", "artist": "Dirty Doering", "url": "https://open.spotify.com/artist/4N6XVXvfjBPNFCdS56TCea?si=jcs-biOORWGwPQyUGjxYBQ"},
  {"day": "Samstag", "time": "18:00", "stage": "Sparkassen Bretterbude", "artist": "Lexer", "url": "https://open.spotify.com/artist/2vDXLZ9mI3CdTPPIzFUKlY?si=SiEwIyMdSXyIIMIl8itPWg"},
  {"day": "Samstag", "time": "19:30", "stage": "Sparkassen Bretterbude", "artist": "Kollektiv Ost", "url": "https://open.spotify.com/artist/3G5wjUV0bhx9pIIUrGUabR?si=xjaGf7ZwTTuMzLYuCAhnLQ"},
  {"day": "Samstag", "time": "21:30", "stage": "Sparkassen Bretterbude", "artist": "Hillmann & Neufang", "url": "https://open.spotify.com/artist/3DgNWwUb1CC1Tk6bMD21pY?si=HEStpLSdSXiJVhzvGv1Tnw"},
  {"day": "Samstag", "time": "12:00", "stage": "Jägermeister Stage", "artist": "DOMPI", "url": "https://soundcloud.com/dompi-music"},
  {"day": "Samstag", "time": "13:00", "stage": "Jägermeister Stage", "artist": "Main", "url": null},
  {"day": "Samstag", "time": "14:00", "stage": "Jägermeister Stage", "artist": "Teilzeitegoist", "url": "https://soundcloud.com/teilzeitegoist"},
  {"day": "Samstag", "time": "15:00", "stage": "Jägermeister Stage", "artist": "AvoCado", "url": "https://soundcloud.com/avocadoofficial"},
  {"day": "Samstag", "time": "16:00", "stage": "Jägermeister Stage", "artist": "Azab & Wendel", "url": "https://soundcloud.com/azabwendel"},
  {"day": "Samstag", "time": "17:00", "stage": "Jägermeister Stage", "artist": "Sebastian Jaensch", "url": "https://soundcloud.com/sebastian-jaensch"},
  {"day": "Samstag", "time": "18:00", "stage": "Jägermeister Stage", "artist": "Mike Luxen", "url": null},
  {"day": "Samstag", "time": "19:00", "stage": "Jägermeister Stage", "artist": "Verfürth & Wesen", "url": "https://soundcloud.com/markuswesen"},
  {"day": "Samstag", "time": "20:00", "stage": "Jägermeister Stage", "artist": "Toni Palermo & Ben Cisco", "url": "https://soundcloud.com/toni-palermo"},
  {"day": "Samstag", "time": "21:00", "stage": "Jägermeister Stage", "artist": "SupermArco b2b mit Sead", "url": null}
]

const tage = ["Freitag", "Samstag"];
const stages = ["Panama Stage", "Baumann Container Stage", "Umbrella Stage", "Sparkassen Bretterbude", "Jägermeister Stage"];

class LineUp extends Component {
  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
        day: "Freitag",
        stage: "Panama Stage",
        showFavorites: false,
        starredArtists: []
    };
  }

  componentDidMount = () => {
    localForage.getItem('panamaStarredArtists', (err, offlineStars) => {
      if (err === null && offlineStars !== null) {
        if (!this._favoritesAreEqual(offlineStars, this.state.starredArtists)) {
          this.setState({starredArtists: offlineStars})
        }
      }
    });
  }

  _setDay = (day) => this.setState({ "day": day, showFavorites: false })

  _setStage = (stage) => this.setState({ "stage": stage, showFavorites: false })

  _getLineUpItems = (day, stage) => lineUpItems.filter(lineUpItem => lineUpItem.day === day && lineUpItem.stage === stage);

  _getLineUpFilteredByArtists = (artists) => lineUpItems.filter(lineUpItem => artists.includes(lineUpItem.artist));

  _addStar = (artist) => this.setState(prevState => {
      const newStars = [...prevState.starredArtists, artist]
      localForage.setItem('panamaStarredArtists', newStars);
      return {starredArtists: newStars}
    }
  );

  _removeStar = (removedArtist) => this.setState(prevState => {
      const newStars = prevState.starredArtists.filter(artist => artist !== removedArtist)
      localForage.setItem('panamaStarredArtists', newStars);
      return {starredArtists: newStars}
    }
  );

  _favoritesAreEqual = (offline, online) => offline.length === online.length && online.every((element) => offline.includes(element))

  render() {
    return (
      <div className="App">
        <header>
          <Header as='h1'>Panama Line-Up 2018</Header>
          <Divider />
        </header>
        <main>
          <Button.Group widths='3'>
            {tage.map(tag => <Button key={tag} onClick={() => this._setDay(tag)} active={this.state.day === tag && !this.state.showFavorites} className="panama-button">{tag}</Button>)}
            <Button active={this.state.showFavorites} onClick={() => this.setState({ showFavorites: true })} className="panama-button">
              Favoriten
            </Button>
          </Button.Group>
          <Divider hidden />
          {!this.state.showFavorites ? 
          <Button.Group widths='2' vertical  className="stageButtons">
            {stages.map(stage => (
              <Button key={stage} onClick={() => this._setStage(stage)} active={this.state.stage === stage && !this.state.showFavorites} className="panama-button">
                {stage}
              </Button>
            ))}
          </Button.Group> : ""}
          <Segment>
            {this.state.showFavorites ? 
              <Favorites removeStarHandler={this._removeStar} items={this._getLineUpFilteredByArtists(this.state.starredArtists)} /> :
              <List divided relaxed verticalAlign='middle' size="large">
                {this._getLineUpItems(this.state.day, this.state.stage).map(timeSlot => (
                  <List.Item key={timeSlot.artist}>
                    <List.Content floated='right'>
                      <Button icon onClick={!this.state.starredArtists.includes(timeSlot.artist) ? 
                        () => this._addStar(timeSlot.artist) : 
                        () => this._removeStar(timeSlot.artist) }>
                        <Icon name={this.state.starredArtists.includes(timeSlot.artist) ? "star" : "star outline"} />
                      </Button>
                    </List.Content>
                    <List.Content><List.Header>{timeSlot.time} {timeSlot.url !== null ? <a href={timeSlot.url}>{timeSlot.artist}</a> : timeSlot.artist}</List.Header></List.Content>
                  </List.Item>)
                )}
              </List>
            }
          </Segment>
          <p>Indem du auf die Namen der Künstler klickst, gelangst du zu deren Soundcloud- oder Spotify-Seiten.</p>
        </main>
      </div>
    );
  }
}

export default LineUp;
