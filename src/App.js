import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import Viewer from "./pages/Viewer";
import FakeBoards from "./pages/FakeBoards";
// import AddBoard from "./pages/AddBoard";
import BoardSearch from "./pages/BoardSearch";

function UserGamesRoute() {
    const { userName } = useParams();
    return <Viewer userName={userName} />;
}

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-950 text-white">
                <MenuBar />
                <Routes>
                    <Route path="/bingo-board-repo" element={<Viewer />} />
                    <Route path="/bingo-board-repo/user/:userName" element={<UserGamesRoute />} />
                    <Route path="/bingo-board-repo/fake-boards" element={<FakeBoards />} />
                    {/* <Route path="/bingo-board-repo/add-board" element={<AddBoard />} /> */}
                    <Route path="/bingo-board-repo/board-search" element={<BoardSearch />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
