class App extends React.Component {
          
          render() {
                    return (
                              <div id='app'>
                                        <div id='sidebar' class='sections'>
                                                  <p>DashBoard</p>
                                                  <p>Reviews</p>
                                                  <p>Widget</p>
                                                  <p>Customer</p>
                                                  <p>Online Analysis</p>
                                                  <p>Setings</p>
                                        </div>
                                        <div id='review' class='sections'>
                                                  <h3>Reviews:</h3>
                                                  <p>1281</p>
                                        </div>
                                        <div id='avgRate' class='sections'>
                                                  <h3>Average Rating:</h3>
                                                  <p>4.6</p>   
                                        </div>
                                        <div id='sentiAnalyze' class='sections'>
                                                  <h3>Sentiment Analysis:</h3>
                                                  <p>960</p>
                                                  <p>122</p>
                                                  <p>312</p>
                                        </div>
                                        <div id='visitors' class='sections'>
                                                  <h3>Website Visitors:</h3>
                                                  <p>821</p> 
                                                  <div style={{width: "500px", height:"100px"}}id='inside-div'></div>
                                        </div>
                              </div>
                    )
          }
}

ReactDOM.render(<App />, document.getElementById('container'));
