import { Link } from "lucide-react";
import React from "react";

function About() {
  return (
    <main className="bg-gray-800 min-w-[300px]">
      <div className="group:box-body relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl overflow-hidden md:col-span-2 text-white">
        <header className="relative z-20">
          <h4 className="flex items-center gap-2 font-display text-xl font-semibold md:text-2xl">
            Designed for the edge
            <span className="inline-flex translateY translate-y-1/4 text-emerald-400 opacity-0 transition group-hover:translateY group-hover:opacity-100">
              <Link
                target="_blank"
                className="group:link-new inline-flex cursor-pointer items-center transition gap-0.5 group-hover:text-emerald-400 group-hover:underline"
                href="/docs/redis/features/globaldatabase"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  fill="#34AC90"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  className="inline-flex shrink-0 ml-auto text-3xl opacity-100"
                  role="icon"
                >
                  <title>Global database features</title>
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </span>
          </h4>
          <p className="mt-2 opacity-40 md:mt-3">
            Tested and optimized for Vercel Edge, Cloudflare Workers and Fastly
            Edge.
          </p>
        </header>
        <div className="relative z-0 h-[320px]">
          <div className="absolute left-1/2 top-1/2 z-0 flex h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            {/* circle svg */}
            <svg
              className="absolute left-0 top-0 z-0"
              width="490"
              height="490"
              viewBox="0 0 490 490"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.6"
                cx="245"
                cy="245"
                r="47.5"
                stroke="#34AC90"
              ></circle>
              <circle
                opacity="0.4"
                cx="245"
                cy="245"
                r="96.5"
                stroke="#34AC90"
              ></circle>
              <circle
                opacity="0.35"
                cx="245"
                cy="245"
                r="146.5"
                stroke="#34AC90"
              ></circle>
              <circle
                opacity="0.3"
                cx="245"
                cy="245"
                r="195.5"
                stroke="#34AC90"
              ></circle>
              <circle
                opacity="0.27"
                cx="245"
                cy="245"
                r="244.5"
                stroke="#34AC90"
              ></circle>
            </svg>
            {/* center svg */}
            <svg
              width="81"
              height="83"
              viewBox="0 0 81 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_9_15"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="81"
                height="83"
              >
                <path d="M81 0H0V83H81V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_9_15)">
                <path
                  d="M3.68845 34.3007C9.74306 30.8981 13.1869 27.2355 19.8718 25.4954C21.3985 40.433 37.3378 59.6829 37.3378 59.6829C30.7762 56.7184 23.1381 63.1149 14.6717 56.4018C6.98155 50.3159 3.28559 36.5628 3.68845 34.3007Z"
                  fill="#700E17"
                />
                <path
                  d="M40.3074 33.5733C40.3074 33.5733 51.0316 49.058 81 62.5175C81 62.5175 66.7901 67.3018 57.0567 59.681C45.5617 50.6809 39.0699 67.1465 23.239 59.5217C0.378174 48.5087 8.23893 28.8813 40.3074 33.5733Z"
                  fill="#891723"
                />
                <path
                  d="M40.0848 34.3825C49.4358 33.4098 72.3287 54.5424 72.3287 54.5424C71.6641 54.473 59.0506 47.8609 43.6719 57.289C35.537 62.2722 26.0997 60.1925 20.176 56.031C1.36144 42.8125 10.1062 31.1267 40.0848 34.3825Z"
                  fill="#701829"
                />
                <path
                  d="M3.65895 34.2148C5.73383 29.4788 11.6774 27.5752 11.6774 27.5752C16.9172 23.4808 22.481 20.4597 26.1099 18.6945C16.7815 17.6798 11.6109 17.6315 7.21383 19.1871C16.6109 9.98352 32.938 0 32.938 0C32.938 0 27.2857 10.5223 32.938 23.7931C35.1985 29.0952 56.9355 48.4647 56.9355 48.4647C32.3453 47.6261 18.7035 43.7015 11.3834 40.1814C4.44695 36.8459 3.18206 33.871 3.65895 34.2148Z"
                  fill="#E63C35"
                />
                <path
                  d="M4.87931 20.5457C7.03574 20.2857 9.94101 19.6798 11.3835 20.9251C13.4685 22.7281 12.3276 27.5836 12.3276 27.5836C12.231 27.6591 3.8147e-06 25.2628 3.8147e-06 25.2628C3.11502 21.8916 4.87931 20.5457 4.87931 20.5457Z"
                  fill="#F6B52D"
                />
                <path
                  d="M27.9654 19.3339C23.239 21.0111 19.3831 22.0594 11.4333 29.0512C12.1028 20.2459 12.2804 21.5667 5.12392 20.5646C5.77353 19.7071 16.5047 11.5748 27.9654 19.3339Z"
                  fill="#231F20"
                />
                <path
                  d="M40.0848 33.3343C49.4358 32.3636 72.3287 54.5341 72.3287 54.5341C71.6641 54.4647 59.0506 46.8127 43.6719 56.2406C36.5401 60.6077 25.0971 58.4401 20.176 54.9826C1.36144 41.7748 10.1062 30.0889 40.0848 33.3343Z"
                  fill="#D22E2E"
                />
              </g>
            </svg>
            {/* inner shell */}
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[118px] rotate-[120deg]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-120deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 35 15"
                  fill="none"
                >
                  <path
                    fill="#F6821F"
                    d="m23.567 14.788.17-.587c.202-.698.127-1.343-.213-1.817-.312-.437-.832-.694-1.465-.724l-11.97-.151a.238.238 0 0 1-.189-.1.244.244 0 0 1-.027-.216.318.318 0 0 1 .278-.212l12.082-.153c1.433-.066 2.984-1.228 3.528-2.645l.689-1.8a.436.436 0 0 0 .018-.237A7.867 7.867 0 0 0 18.791 0a7.87 7.87 0 0 0-7.451 5.333A3.543 3.543 0 0 0 5.787 9.04a5.032 5.032 0 0 0-4.832 5.755.234.234 0 0 0 .23.201l22.1.003h.007a.292.292 0 0 0 .275-.212Z"
                  ></path>
                  <path
                    fill="#FBAD41"
                    d="M27.554 6.514c-.11 0-.221.003-.331.008a.185.185 0 0 0-.052.012.19.19 0 0 0-.12.127l-.471 1.624c-.203.698-.128 1.343.212 1.817.312.437.832.694 1.464.724l2.552.153a.232.232 0 0 1 .182.099.24.24 0 0 1 .027.217.318.318 0 0 1-.277.212l-2.652.153c-1.44.066-2.99 1.228-3.534 2.645l-.191.5a.141.141 0 0 0 .126.192h9.131a.242.242 0 0 0 .235-.176 6.541 6.541 0 0 0-6.301-8.307Z"
                  ></path>
                </svg>
              </span>
            </span>
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[118px] rotate-[240deg]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-240deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 35 16"
                  fill="none"
                >
                  <path
                    fill="#FF282D"
                    d="M23.227 3.152v8.275h2.486v-1.264h-.822V1.89h-1.664v1.26ZM1.642 10.163h.845V6.17h-.845V5.072l.845-.139V3.822c0-1.347.293-1.93 2.01-1.93.37 0 .81.054 1.195.123L5.464 3.37a3.105 3.105 0 0 0-.555-.05c-.605 0-.758.061-.758.652v.962h1.256V6.17H4.151v3.993h.836v1.264H1.642v-1.264ZM22.38 9.763c-.26.055-.488.048-.652.052-.685.017-.626-.208-.626-.854v-2.79h1.304V4.932h-1.304V1.891h-1.665v7.416c0 1.455.36 2.12 1.926 2.12.37 0 .88-.095 1.265-.178l-.247-1.486ZM32.72 10.17a.629.629 0 1 1 0 1.255.627.627 0 1 1 0-1.256Zm0 1.156a.53.53 0 0 0 .528-.529.524.524 0 0 0-.528-.522.522.522 0 0 0-.525.522c0 .29.235.53.525.53Zm.117-.22-.128-.187h-.087v.187h-.142v-.617h.258c.153 0 .248.077.248.213 0 .1-.05.169-.13.192l.155.212h-.174Zm-.21"
                  />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[118px] -rotate-[360deg]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-240deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 35 16"
                  fill="none"
                >
                  <path
                    fill="#FF282D"
                    d="M23.227 3.152v8.275h2.486v-1.264h-.822V1.89h-1.664v1.26ZM1.642 10.163h.845V6.17h-.845V5.072l.845-.139V3.822c0-1.347.293-1.93 2.01-1.93.37 0 .81.054 1.195.123L5.464 3.37a3.105 3.105 0 0 0-.555-.05c-.605 0-.758.061-.758.652v.962h1.256V6.17H4.151v3.993h.836v1.264H1.642v-1.264ZM22.38 9.763c-.26.055-.488.048-.652.052-.685.017-.626-.208-.626-.854v-2.79h1.304V4.932h-1.304V1.891h-1.665v7.416c0 1.455.36 2.12 1.926 2.12.37 0 .88-.095 1.265-.178l-.247-1.486ZM32.72 10.17a.629.629 0 1 1 0 1.255.627.627 0 1 1 0-1.256Zm0 1.156a.53.53 0 0 0 .528-.529.524.524 0 0 0-.528-.522.522.522 0 0 0-.525.522c0 .29.235.53.525.53Zm.117-.22-.128-.187h-.087v.187h-.142v-.617h.258c.153 0 .248.077.248.213 0 .1-.05.169-.13.192l.155.212h-.174Zm-.21"
                  />
                </svg>
              </span>
            </span>
            {/* middle shell */}
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[170px] rotate-[180deg]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-240deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 35 16"
                  fill="none"
                >
                  <path
                    fill="#FF282D"
                    d="M23.227 3.152v8.275h2.486v-1.264h-.822V1.89h-1.664v1.26ZM1.642 10.163h.845V6.17h-.845V5.072l.845-.139V3.822c0-1.347.293-1.93 2.01-1.93.37 0 .81.054 1.195.123L5.464 3.37a3.105 3.105 0 0 0-.555-.05c-.605 0-.758.061-.758.652v.962h1.256V6.17H4.151v3.993h.836v1.264H1.642v-1.264ZM22.38 9.763c-.26.055-.488.048-.652.052-.685.017-.626-.208-.626-.854v-2.79h1.304V4.932h-1.304V1.891h-1.665v7.416c0 1.455.36 2.12 1.926 2.12.37 0 .88-.095 1.265-.178l-.247-1.486ZM32.72 10.17a.629.629 0 1 1 0 1.255.627.627 0 1 1 0-1.256Zm0 1.156a.53.53 0 0 0 .528-.529.524.524 0 0 0-.528-.522.522.522 0 0 0-.525.522c0 .29.235.53.525.53Zm.117-.22-.128-.187h-.087v.187h-.142v-.617h.258c.153 0 .248.077.248.213 0 .1-.05.169-.13.192l.155.212h-.174Zm-.21"
                  />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[170px] rotate-[60deg]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-240deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 35 16"
                  fill="none"
                >
                  <path
                    fill="#FF282D"
                    d="M23.227 3.152v8.275h2.486v-1.264h-.822V1.89h-1.664v1.26ZM1.642 10.163h.845V6.17h-.845V5.072l.845-.139V3.822c0-1.347.293-1.93 2.01-1.93.37 0 .81.054 1.195.123L5.464 3.37a3.105 3.105 0 0 0-.555-.05c-.605 0-.758.061-.758.652v.962h1.256V6.17H4.151v3.993h.836v1.264H1.642v-1.264ZM22.38 9.763c-.26.055-.488.048-.652.052-.685.017-.626-.208-.626-.854v-2.79h1.304V4.932h-1.304V1.891h-1.665v7.416c0 1.455.36 2.12 1.926 2.12.37 0 .88-.095 1.265-.178l-.247-1.486ZM32.72 10.17a.629.629 0 1 1 0 1.255.627.627 0 1 1 0-1.256Zm0 1.156a.53.53 0 0 0 .528-.529.524.524 0 0 0-.528-.522.522.522 0 0 0-.525.522c0 .29.235.53.525.53Zm.117-.22-.128-.187h-.087v.187h-.142v-.617h.258c.153 0 .248.077.248.213 0 .1-.05.169-.13.192l.155.212h-.174Zm-.21"
                  />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[170px] -rotate-[60deg]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-240deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 35 16"
                  fill="none"
                >
                  <path
                    fill="#FF282D"
                    d="M23.227 3.152v8.275h2.486v-1.264h-.822V1.89h-1.664v1.26ZM1.642 10.163h.845V6.17h-.845V5.072l.845-.139V3.822c0-1.347.293-1.93 2.01-1.93.37 0 .81.054 1.195.123L5.464 3.37a3.105 3.105 0 0 0-.555-.05c-.605 0-.758.061-.758.652v.962h1.256V6.17H4.151v3.993h.836v1.264H1.642v-1.264ZM22.38 9.763c-.26.055-.488.048-.652.052-.685.017-.626-.208-.626-.854v-2.79h1.304V4.932h-1.304V1.891h-1.665v7.416c0 1.455.36 2.12 1.926 2.12.37 0 .88-.095 1.265-.178l-.247-1.486ZM32.72 10.17a.629.629 0 1 1 0 1.255.627.627 0 1 1 0-1.256Zm0 1.156a.53.53 0 0 0 .528-.529.524.524 0 0 0-.528-.522.522.522 0 0 0-.525.522c0 .29.235.53.525.53Zm.117-.22-.128-.187h-.087v.187h-.142v-.617h.258c.153 0 .248.077.248.213 0 .1-.05.169-.13.192l.155.212h-.174Zm-.21"
                  />
                </svg>
              </span>
            </span>
            {/* outer shell */}
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[220px] rotate-[120deg]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-120deg] opacity-15"></span>
            </span>
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[220px] rotate-[240deg]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-120deg] opacity-15"></span>
            </span>
            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[220px]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-120deg] opacity-10"></span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
