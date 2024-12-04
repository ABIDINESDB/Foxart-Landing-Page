import { logoApp } from "../assets/index";
import { Container } from "./container";
import ElipseBlueBlur from "./theme/header";
import Button from "./ui/button";

export default function Header() {
  return (
    <div className="border-b border-stroke-1">
      <Container className={"relative bg-n-9"}>
        <div className=" relative z-10 flex items-center flex-row justify-between py-4 lg:py-6">
          <img src={logoApp} alt="logo" width={104} height={32} />
          <Button theme="primary">Login</Button>
        </div>
        <ElipseBlueBlur />
      </Container>
    </div>
  );
}
