import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Map from "@/components/Map/Map";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Map />
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
