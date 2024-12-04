import { uiInterface } from "../assets";
import { Container } from "./container";
import Grid from "./theme/Hero";
import Button from "./ui/button";

export default function Hero() {
  return (
    <div className="relative">
      <Container className="realative z-10 pt-10 lg:py-16 space-y-16">
        <div className=" text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">
          <h1 className="hero">
            Build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2 ">
              Modern
            </span>{" "}
            Saas for startup
          </h1>
          <p className="body-1 text-n-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            expedita rerum aliquid. Reprehenderit quasi voluptate quisquam odit
            itaque impedit dolor temporibus praesentium non fugit consequuntur,
            quo ducimus quos.
          </p>
          <Button theme="primary" href="/#pricing">
            Pricing and plans
          </Button>
        </div>
        <img src={uiInterface} alt="ui interface illustration" />
      </Container>
      <Grid />
    </div>
  );
}
