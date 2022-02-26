import './App.css';
import Auth from './Components/Auth/Auth';
import Register from "./Components/Auth/Register"
import HomePage from './Components/HomePage';
import MyReceipts from './Components/Pages/MyReceipts';
import StampReceipts from './Components/Pages/StampReceipts';
import UploadExamPass from './Components/Pages/UploadExamPass';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route exact path='/' element={<Auth />} >
              </Route>

              <Route exact path='/register' element={<Register /> }>
              </Route>
              <Route exact path='/home' element={<HomePage /> }>
              </Route>

              <Route exact path='/upload-exam-pass' element={<UploadExamPass /> }>
              </Route>


              <Route exact path='/stamp-receipts' element={<StampReceipts /> }>
              </Route>

              <Route exact path='/my-receipts' element={<MyReceipts /> }>
              </Route>

            </Routes>
      </Router>

    {/* <MyReceipts /> 
    
    <StampReceipts /> */}
    ...
      </div>
  );
}

export default App;
