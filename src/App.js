import Header from "./common/header";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/index';
import LoadableComponent from './pages/detail/loadable';  // 添加
import Login from './pages/login';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<LoadableComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;