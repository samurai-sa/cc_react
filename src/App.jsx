import { FooterBar } from "./components/FooterBar";
import { HeaderBar } from "./components/HeaderBar";
import { MainContents } from "./components/MainContents";

export const App = () => {
  return (
    <>
      <HeaderBar />
      <MainContents />
      <FooterBar />
    </>
  );
};
