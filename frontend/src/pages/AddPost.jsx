import { useSelector } from "react-redux";
import { Container, Theme } from "@radix-ui/themes";
import Header from "../components/Header";
import CreatePost from "../components/CreatePost/CreatePost";

const AddPost = () => {
  const theme = useSelector((state) => state.theme.color);

  return (
    <Theme accentColor="indigo" grayColor="sand" appearance={theme}>
      <Container size={3} px={{ initial: "1", sm: "6" }}>
        <Header />
        <CreatePost data={{ title: "", text: "", tags: [], imageUrl: "" }} />;
      </Container>
    </Theme>
  );
};

export default AddPost;
