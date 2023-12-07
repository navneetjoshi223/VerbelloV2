import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import Home from './Components/Home/Home';
import QuizQuestions from './Components/Quiz/QuizQuestions';
import questions from './questions';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';





const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          
          <Route path="/quiz" element={<QuizQuestions questions={questions} />} />
          {/* <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/profile" element={<Profile />} /> */}
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} /> 
                      {/* Add a wildcard route to redirect to the home page for unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
