/**
 * Npm import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */

/**
 * Code
 */
class Content extends React.Component {
  state = {
    data: null,
  }
  componentWillMount() {
    axios.get('http://panel.lshistories.eu/sumsun/')
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div id="content">
        <div id="discord">
          <iframe src="https://discordapp.com/widget?id=403273685622063105&theme=white" frameBorder="0" />
        </div>
        {data && (
          <div id="server">
            <a href="https://sa-mp.com/" target="_blank">
              <img src="./images/samp.gif" alt="" />
            </a>
            <div id="infos">
              <h3>{data.Hostname}</h3>
              <p>IP du serveur : serv.lshistories.eu</p>
              <p>Version SAMP : {data.version}</p>
              <p>Version Script : {data.Gamemode}</p>
              <p>Joueurs : {data.Players}/{data.MaxPlayers}</p>
            </div>
          </div>
        )}
        {!data && (
          <div id="server">
            <a href="https://sa-mp.com/" target="_blank">
              <img src="./images/samp.gif" alt="" />
            </a>
            <p>Chargement en cours</p>
          </div>
        )}
      </div>
    );
  }
}

/**
 * Export
 */
export default Content;
