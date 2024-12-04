import { Container } from "./container";
import { branding } from "../constants/index";

export default function Branding() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10">
        {branding.map((brand, idx) => (
          <div
            key={brand.id}
            className={`w-1/2 flex justify-center sm:w-1/4 md:w-1/4 lg:w-1/6 lg:p-1
              ${
                branding.length % 2 !== 0 && idx === branding.length - 1
                  ? "hidden lg:flex"
                  : ""
              }
              `}
          >
            <img src={brand.image} alt={brand.alt} width={180} height={96} />
          </div>
        ))}
      </div>
    </Container>
  );
}
