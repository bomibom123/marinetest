import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lending from './Lending';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test7 from './Test7';
import Result from './Result';
import Result2 from './Result2';
import Result3 from './Result3';

import ScrollToTop from './ScrollToTop';

function DefaultRouter() {
  return (
    <Router basename="/MarineCharacterTest">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Lending />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Test2" element={<Test2 />} />
        <Route path="/Test3" element={<Test3 />} />
        <Route path="/Test4" element={<Test4 />} />
        <Route path="/Test5" element={<Test5 />} />
        <Route path="/Test7" element={<Test7 />} />

        <Route path="/Result" element={<Result />} />
        <Route path="/Result2" element={<Result2 />} />
        <Route path="/Result3" element={<Result3 />} />
      </Routes>
    </Router>
  );
}

export default DefaultRouter;
