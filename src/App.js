import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = '6160684a9ffe4c0e98799afc9b7a6136'
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
    
  }
  
  
  render() {



    return (
      <div>
          
          <Router>
  <Navbar />
  <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        transitionTime={400}
        onLoaderFinished={() => this.setProgress(0)}
       
       
       
      />
  <Routes>
    <Route path="/" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={8} country="us" category="general" />} />
    <Route path="/business" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={8} country="us" category="business" />} />
    <Route path="/entertainment" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={8} country="us" category="entertainment" />} />
    <Route path="/health" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={8} country="us" category="health" />} />
    <Route path="/science" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={8} country="us" category="science" />} />
    <Route path="/sports" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={8} country="us" category="sports" />} />
    <Route path="/technology" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={8} country="us" category="technology" />} />
  </Routes>
</Router>

        
      </div>
    )
  }
}

