// import CustomCarousel from "../../components/Custom Carousel";

import CustomCarousel from "@/app/components/Custom Carousel";

export default function About() {
  return (
    <main className="text-gray-200">
      <section className="flex" style={{ minHeight: "95dvh", backgroundImage: `url('/arcane-fusion-logo.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: "left" }}>
        <div className="flex-1 flex justify-center items-center flex-col text-white" style={{ backgroundColor: "rgba(0,0,0,0.95)" }}>
          <h1 className="text-5xl font-arcane">Who We Are?</h1>
          <p className="max-w-lg pseudo-partial-border">
            At Arcane Fusion, we are not just another gaming studio; we are a dynamic force, blending creativity and technology to craft immersive gaming experiences that transcend
            the ordinary. Our journey began with a simple yet ambitious idea – to fuse the arcane magic of storytelling with the cutting-edge technology of game development. We are
            not just making games; we are weaving digital spells that enchant and captivate players across the gaming realms.
          </p>
        </div>
        {/* <div className="flex-1 flex justify-center items-center">
          <svg className="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0.574,0.683 a0.355,0.372,0,0,1,-0.148,0 a0.245,0.256,0,0,0,0.054,0.135 c-0.066,0.077,-0.206,0.085,-0.285,0.013 c0.066,0.03,0.13,0.034,0.195,0.008 a0.325,0.34,0,0,1,-0.044,-0.117 A0.53,0.555,0,0,1,0.339,0.66 a0.02,0.021,0,0,0,-0.011,-0.019 C0.219,0.568,0.166,0.463,0.17,0.327 C0.176,0.166,0.298,0.025,0.45,0.004 c0.181,-0.026,0.341,0.094,0.375,0.282 c0.002,0.009,0.003,0.019,0.004,0.031 A0.373,0.391,0,0,0,0.64,0.279 l0,-0.004,0.092,-0.014 C0.715,0.192,0.638,0.099,0.524,0.09 C0.407,0.079,0.305,0.149,0.267,0.262 c-0.035,0.105,0.002,0.23,0.086,0.289 A0.353,0.369,0,0,1,0.43,0.415 a0.684,0.716,0,0,0,-0.071,-0.016 a0.643,0.673,0,0,0,-0.069,-0.001 c-0.029,-0.097,0.027,-0.224,0.132,-0.263 A0.243,0.255,0,0,0,0.338,0.238 C0.329,0.259,0.322,0.282,0.315,0.305 c0.029,0.003,0.056,0.003,0.081,0.01 a0.859,0.9,0,0,1,0.094,0.035 a0.021,0.022,0,0,0,0.021,0 c0.113,-0.062,0.227,-0.061,0.335,0.01 s0.16,0.177,0.155,0.31 C0.991,0.909,0.751,1,0.542,0.973 c-0.004,-0.002,-0.007,-0.004,-0.013,-0.007 A0.37,0.387,0,0,0,0.654,0.815 l0.004,0.002 L0.624,0.904 c0.066,0.021,0.184,-0.005,0.249,-0.107 A0.247,0.259,0,0,0,0.846,0.474 C0.767,0.388,0.646,0.378,0.575,0.417 c0.014,0.021,0.029,0.042,0.042,0.064 s0.021,0.046,0.032,0.07 A0.247,0.258,0,0,0,0.731,0.436 c0.108,0.028,0.172,0.152,0.155,0.24 c-0.009,-0.027,-0.018,-0.059,-0.031,-0.09 a0.206,0.215,0,0,0,-0.061,-0.079 c-0.008,0.013,-0.014,0.024,-0.022,0.036 A0.315,0.329,0,0,1,0.672,0.641 a0.021,0.022,0,0,0,-0.012,0.021 A0.33,0.346,0,0,1,0.005,0.711 C-0.016,0.575,0.029,0.464,0.131,0.378 a0.081,0.085,0,0,1,0.008,-0.005 c0.007,0.032,0.013,0.065,0.023,0.096 s0.025,0.059,0.036,0.09 l-0.053,-0.072 c-0.065,0.066,-0.08,0.195,-0.032,0.288 A0.246,0.258,0,0,0,0.384,0.905 C0.486,0.881,0.569,0.785,0.574,0.683 M0.431,0.593 a0.242,0.254,0,0,0,0.139,0 a0.245,0.256,0,0,0,-0.07,-0.126 A0.243,0.255,0,0,0,0.431,0.593"></path>
            </clipPath>
          </svg>
          <div className="clipped"></div>
        </div> */}
      </section>
      <section className="flex" style={{ minHeight: "90dvh", backgroundImage: `url('/arcane-fusion-logo.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: "right" }}>
        <div className="flex-1 flex justify-center items-center flex-col text-white" style={{ backgroundColor: "rgba(0,0,0,0.95)" }}>
          <h1 className="text-5xl font-arcane">Technologies We Use</h1>
          <p className="max-w-lg pseudo-partial-border">
            Arcane Fusion operates at the intersection of Unreal and Unity, wielding the combined might of these two formidable platforms. It&apos;s not just a choice; it&apos;s a
            fusion of power, much like combining two epic spells to create an unstoppable force. Our developers seamlessly navigate the realms of Unreal and Unity, harnessing the
            strengths of each to conjure gaming experiences that leave players spellbound.
          </p>
          <div className="my-24 mx-auto" style={{ maxWidth: "1440px" }}>
            <CustomCarousel />
          </div>
        </div>
        {/* <div className="flex-1 flex justify-center items-center">
          <svg className="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0.574,0.683 a0.355,0.372,0,0,1,-0.148,0 a0.245,0.256,0,0,0,0.054,0.135 c-0.066,0.077,-0.206,0.085,-0.285,0.013 c0.066,0.03,0.13,0.034,0.195,0.008 a0.325,0.34,0,0,1,-0.044,-0.117 A0.53,0.555,0,0,1,0.339,0.66 a0.02,0.021,0,0,0,-0.011,-0.019 C0.219,0.568,0.166,0.463,0.17,0.327 C0.176,0.166,0.298,0.025,0.45,0.004 c0.181,-0.026,0.341,0.094,0.375,0.282 c0.002,0.009,0.003,0.019,0.004,0.031 A0.373,0.391,0,0,0,0.64,0.279 l0,-0.004,0.092,-0.014 C0.715,0.192,0.638,0.099,0.524,0.09 C0.407,0.079,0.305,0.149,0.267,0.262 c-0.035,0.105,0.002,0.23,0.086,0.289 A0.353,0.369,0,0,1,0.43,0.415 a0.684,0.716,0,0,0,-0.071,-0.016 a0.643,0.673,0,0,0,-0.069,-0.001 c-0.029,-0.097,0.027,-0.224,0.132,-0.263 A0.243,0.255,0,0,0,0.338,0.238 C0.329,0.259,0.322,0.282,0.315,0.305 c0.029,0.003,0.056,0.003,0.081,0.01 a0.859,0.9,0,0,1,0.094,0.035 a0.021,0.022,0,0,0,0.021,0 c0.113,-0.062,0.227,-0.061,0.335,0.01 s0.16,0.177,0.155,0.31 C0.991,0.909,0.751,1,0.542,0.973 c-0.004,-0.002,-0.007,-0.004,-0.013,-0.007 A0.37,0.387,0,0,0,0.654,0.815 l0.004,0.002 L0.624,0.904 c0.066,0.021,0.184,-0.005,0.249,-0.107 A0.247,0.259,0,0,0,0.846,0.474 C0.767,0.388,0.646,0.378,0.575,0.417 c0.014,0.021,0.029,0.042,0.042,0.064 s0.021,0.046,0.032,0.07 A0.247,0.258,0,0,0,0.731,0.436 c0.108,0.028,0.172,0.152,0.155,0.24 c-0.009,-0.027,-0.018,-0.059,-0.031,-0.09 a0.206,0.215,0,0,0,-0.061,-0.079 c-0.008,0.013,-0.014,0.024,-0.022,0.036 A0.315,0.329,0,0,1,0.672,0.641 a0.021,0.022,0,0,0,-0.012,0.021 A0.33,0.346,0,0,1,0.005,0.711 C-0.016,0.575,0.029,0.464,0.131,0.378 a0.081,0.085,0,0,1,0.008,-0.005 c0.007,0.032,0.013,0.065,0.023,0.096 s0.025,0.059,0.036,0.09 l-0.053,-0.072 c-0.065,0.066,-0.08,0.195,-0.032,0.288 A0.246,0.258,0,0,0,0.384,0.905 C0.486,0.881,0.569,0.785,0.574,0.683 M0.431,0.593 a0.242,0.254,0,0,0,0.139,0 a0.245,0.256,0,0,0,-0.07,-0.126 A0.243,0.255,0,0,0,0.431,0.593"></path>
            </clipPath>
          </svg>
          <div className="clipped"></div>
        </div> */}
      </section>
      {/* <div className="my-20"></div> */}
      {/* Carousel Section */}
      {/* <section className="mx-auto" style={{ maxWidth: "1440px", height: "200px" }}>
        <CustomCarousel />
      </section> */}
    </main>
  );
}
