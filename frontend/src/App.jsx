import "./App.scss";
import "./index.scss";
import { Container } from "@radix-ui/themes";
import Home from "./pages/Home";
import FullPost from "./pages/FullPost";
import Header from "./components/Header";
import AddPost from "./pages/AddPost";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <Container size={3} px={"6"}>
        <Header />
        {/* <Home /> */}
        <FullPost />
        {/* <AddPost /> */}
        {/* <Login /> */}
        {/* <Registration /> */}
      </Container>
    </>
  );
}

export default App;
