import "./App.scss";
import Home from "./pages/Home";
import "./index.scss";
import { Container } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Container size={3} px={"6"}>
        <Home />
      </Container>
      {/*<FullPost />*/}
      {/*<AddPost />*/}
      {/*<Login />*/}
      {/*<Registration />*/}
      {/* </Container> */}
    </>
  );
}

export default App;
