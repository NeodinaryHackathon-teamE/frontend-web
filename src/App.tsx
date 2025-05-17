import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import GoogleMap from "@/components/Map/GoogleMap";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GoogleMap />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* 필요 시 더 추가 가능 */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
