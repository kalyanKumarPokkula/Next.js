import Image from "next/image";
import React from "react";
import { Timeline } from "./components/ui/timeline";
import { LinkPreview } from "./components/ui/link-preview";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            ONLINE BOOKSTORE E-COMMERCE APPLICATION
          </p>
          <div className="grid gap-4 mb-4 leading-relaxed">
            <p>
              This project is a full-stack, microservice-based e-commerce
              platform tailored for an online bookstore. Designed for
              scalability and maintainability, it integrates a wide range of
              modern technologies and frameworks.
            </p>
            <ul className="list-disc ml-8">
              <li>
                <span className="text-xl font-medium">Frontend:</span> <br />{" "}
                The user interface is built using{" "}
                <LinkPreview
                  url="https://github.com/kalyanKumarPokkula/online-book-store.git"
                  className="text-neutral-500 dark:text-neutral-400 font-bold"
                >
                  React.js with Tailwind CSS
                </LinkPreview>{" "}
                , clean, and seamless user experience across devices.
              </li>
              <li>
                <span className="text-xl font-medium">Backend: </span> <br />
                The application employs multiple microservices, each designed to
                handle specific business functions:
              </li>
              <ol className="list-disc ml-8">
                <li>
                  <span className="font-medium"> Spring Boot: </span> Manages
                  the{" "}
                  <LinkPreview
                    url="https://github.com/kalyanKumarPokkula/orderservice.git"
                    className="text-neutral-500 dark:text-neutral-400 font-bold"
                  >
                    Order Service
                  </LinkPreview>{" "}
                  handling order placement, tracking management.
                </li>
                <li>
                  <span className="font-medium"> Node.js: </span> Drives the{" "}
                  <LinkPreview
                    url="https://github.com/kalyanKumarPokkula/online-book-store-backend.git"
                    className="text-neutral-500 dark:text-neutral-400 font-bold"
                  >
                    Book Service
                  </LinkPreview>{" "}
                  enabling operations such as viewing, adding, updating, and
                  deleting books..
                </li>
                <li>
                  <span className="font-medium"> Flask: </span> Handles{" "}
                  <LinkPreview
                    url="https://github.com/kalyanKumarPokkula/Payment-service.git"
                    className="text-neutral-500 dark:text-neutral-400 font-bold"
                  >
                    Payment Processing
                  </LinkPreview>{" "}
                  via Stripe, ensuring secure and seamless transactions.
                </li>
                <li>
                  <span className="font-medium"> Gin (Go Framework): </span>{" "}
                  Manages{" "}
                  <LinkPreview
                    url="https://github.com/kalyanKumarPokkula/User-Authentication.git"
                    className="text-neutral-500 dark:text-neutral-400 font-bold"
                  >
                    User Authentication
                  </LinkPreview>{" "}
                  with JWT-based authorization to ensure secure access.
                </li>
                <li>
                  <span className="font-medium"> Notification Service: </span>{" "}
                  Developed using Python and Redis for real-time messaging and{" "}
                  <LinkPreview
                    url="https://github.com/kalyanKumarPokkula/Notification-Service.git"
                    className="text-neutral-500 dark:text-neutral-400 font-bold"
                  >
                    Notifications
                  </LinkPreview>{" "}
                  across the platform.
                </li>
                <li>
                  <span className="font-medium"> Api Gateway: </span>
                  Facilitates smooth{" "}
                  <LinkPreview
                    url="https://tailwindcss.com"
                    className="text-neutral-500 dark:text-neutral-400 font-bold"
                  >
                    communication
                  </LinkPreview>{" "}
                  between microservices, ensuring centralized routing and secure
                  data flow between services.
                </li>
              </ol>
              <li>
                <span className="text-xl font-medium">Database: </span>
                <br /> A highly reliable{" "}
                <LinkPreview
                  url="https://www.mysql.com/"
                  className="text-neutral-500 dark:text-neutral-400 font-bold"
                >
                  MySQL database
                </LinkPreview>{" "}
                is used for efficient management and storage of user data,
                orders, books, and other essential information.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
