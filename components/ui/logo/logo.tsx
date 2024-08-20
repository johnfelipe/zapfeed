import React from "react";
import { twMerge } from "tailwind-merge";

function Logo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 368 100" className={twMerge("h-8 aspect-[11/3]", className)}>
      <g clipPath="url(#clip0_21_2)">
        <path
          fill="#fff"
          d="M111.896 71v-6.784l20.224-23.424 1.28 2.88h-20.608v-7.488h28.032v6.848l-19.84 23.424-1.28-2.88h21.248V71h-29.056zm44.381.768c-2.432 0-4.544-.405-6.336-1.216-1.792-.81-3.179-1.963-4.16-3.456-.982-1.536-1.472-3.307-1.472-5.312 0-1.92.426-3.627 1.28-5.12.853-1.536 2.176-2.816 3.968-3.84 1.792-1.024 4.053-1.75 6.784-2.176l11.392-1.856v6.4l-9.792 1.664c-1.664.299-2.902.832-3.712 1.6-.811.768-1.216 1.77-1.216 3.008 0 1.195.448 2.155 1.344 2.88.938.683 2.09 1.024 3.455 1.024 1.75 0 3.286-.363 4.609-1.088 1.365-.768 2.41-1.813 3.136-3.136.768-1.323 1.152-2.773 1.152-4.352v-8.96c0-1.493-.598-2.73-1.792-3.712-1.152-1.024-2.688-1.536-4.608-1.536-1.792 0-3.392.49-4.8 1.472-1.366.939-2.368 2.197-3.008 3.776l-6.848-3.328a11.961 11.961 0 013.2-4.736c1.493-1.365 3.242-2.432 5.248-3.2 2.005-.768 4.181-1.152 6.527-1.152 2.859 0 5.377.533 7.553 1.6 2.176 1.024 3.861 2.475 5.056 4.352 1.237 1.835 1.856 3.99 1.856 6.464V71h-7.936v-5.952l1.792-.128c-.896 1.493-1.963 2.752-3.2 3.776A14.46 14.46 0 01161.525 71c-1.579.512-3.328.768-5.248.768zM182.842 83.8V36.184h7.872v6.912l-.768-1.728c1.194-1.877 2.816-3.328 4.864-4.352 2.048-1.067 4.416-1.6 7.104-1.6 3.285 0 6.25.81 8.896 2.432 2.645 1.621 4.736 3.797 6.272 6.528 1.578 2.73 2.368 5.803 2.368 9.216 0 3.37-.768 6.443-2.304 9.216-1.536 2.773-3.627 4.97-6.272 6.592-2.646 1.579-5.654 2.368-9.024 2.368-2.518 0-4.843-.49-6.976-1.472-2.091-1.024-3.755-2.475-4.992-4.352l1.344-1.664V83.8h-8.384zm18.048-19.712c1.92 0 3.626-.448 5.12-1.344 1.493-.896 2.645-2.133 3.456-3.712.853-1.579 1.28-3.392 1.28-5.44 0-2.048-.427-3.84-1.28-5.376-.811-1.579-1.963-2.816-3.456-3.712-1.494-.939-3.2-1.408-5.12-1.408-1.835 0-3.499.448-4.992 1.344-1.451.896-2.603 2.155-3.456 3.776-.811 1.579-1.216 3.37-1.216 5.376 0 2.048.405 3.861 1.216 5.44.853 1.579 2.005 2.816 3.456 3.712 1.493.896 3.157 1.344 4.992 1.344zM229.124 71V43.672h-6.144v-7.488h6.144v-1.152c0-2.645.533-4.885 1.6-6.72a10.902 10.902 0 014.608-4.288c1.962-.981 4.288-1.472 6.976-1.472.512 0 1.066.043 1.664.128.64.043 1.173.107 1.6.192v7.232a6.213 6.213 0 00-1.216-.128 7.774 7.774 0 00-.96-.064c-1.878 0-3.328.427-4.352 1.28-1.024.81-1.536 2.09-1.536 3.84v1.152h7.744v7.488h-7.744V71h-8.384zm37.48.768c-3.584 0-6.72-.81-9.408-2.432-2.688-1.621-4.779-3.819-6.272-6.592-1.494-2.773-2.24-5.845-2.24-9.216 0-3.499.746-6.592 2.24-9.28 1.536-2.73 3.605-4.885 6.208-6.464 2.645-1.579 5.589-2.368 8.832-2.368 2.73 0 5.12.448 7.168 1.344 2.09.896 3.861 2.133 5.312 3.712a16.553 16.553 0 013.328 5.44c.768 2.005 1.152 4.181 1.152 6.528 0 .597-.043 1.216-.128 1.856-.043.64-.15 1.195-.32 1.664h-26.881v-6.4h22.145l-3.968 3.008c.384-1.963.277-3.712-.32-5.248-.555-1.536-1.494-2.752-2.816-3.648-1.28-.896-2.838-1.344-4.672-1.344-1.75 0-3.307.448-4.672 1.344-1.366.853-2.411 2.133-3.136 3.84-.683 1.664-.939 3.69-.768 6.08-.171 2.133.106 4.032.832 5.696.768 1.621 1.877 2.88 3.328 3.776 1.493.896 3.2 1.344 5.12 1.344s3.541-.405 4.864-1.216a8.703 8.703 0 003.2-3.264l6.784 3.328c-.683 1.664-1.75 3.136-3.2 4.416-1.451 1.28-3.179 2.283-5.184 3.008-1.963.725-4.139 1.088-6.528 1.088zm39.187 0c-3.584 0-6.72-.81-9.408-2.432-2.688-1.621-4.779-3.819-6.272-6.592-1.493-2.773-2.24-5.845-2.24-9.216 0-3.499.747-6.592 2.24-9.28 1.536-2.73 3.605-4.885 6.208-6.464 2.645-1.579 5.589-2.368 8.832-2.368 2.731 0 5.12.448 7.168 1.344 2.091.896 3.861 2.133 5.312 3.712a16.537 16.537 0 013.328 5.44c.768 2.005 1.152 4.181 1.152 6.528 0 .597-.043 1.216-.128 1.856-.043.64-.149 1.195-.32 1.664h-26.88v-6.4h22.144l-3.968 3.008c.384-1.963.277-3.712-.32-5.248-.555-1.536-1.493-2.752-2.816-3.648-1.28-.896-2.837-1.344-4.672-1.344-1.749 0-3.307.448-4.672 1.344-1.365.853-2.411 2.133-3.136 3.84-.683 1.664-.939 3.69-.768 6.08-.171 2.133.107 4.032.832 5.696.768 1.621 1.877 2.88 3.328 3.776 1.493.896 3.2 1.344 5.12 1.344s3.541-.405 4.864-1.216a8.703 8.703 0 003.2-3.264l6.784 3.328c-.683 1.664-1.749 3.136-3.2 4.416-1.451 1.28-3.179 2.283-5.184 3.008-1.963.725-4.139 1.088-6.528 1.088zm38.868 0c-3.371 0-6.379-.79-9.024-2.368-2.646-1.621-4.736-3.819-6.272-6.592-1.536-2.773-2.304-5.845-2.304-9.216 0-3.413.768-6.485 2.304-9.216 1.536-2.73 3.626-4.907 6.272-6.528 2.688-1.621 5.674-2.432 8.96-2.432 2.645 0 4.992.533 7.04 1.6 2.09 1.024 3.733 2.475 4.927 4.352l-1.279 1.728V22.552h8.384V71h-7.936v-6.72l.896 1.664c-1.195 1.877-2.859 3.328-4.992 4.352-2.134.981-4.459 1.472-6.976 1.472zm.896-7.68c1.92 0 3.605-.448 5.056-1.344 1.45-.896 2.581-2.133 3.392-3.712.853-1.579 1.28-3.392 1.28-5.44 0-2.005-.427-3.797-1.28-5.376-.811-1.621-1.942-2.88-3.392-3.776-1.451-.896-3.136-1.344-5.056-1.344-1.878 0-3.563.47-5.056 1.408-1.494.896-2.667 2.133-3.52 3.712-.811 1.536-1.216 3.328-1.216 5.376 0 2.048.405 3.861 1.216 5.44.853 1.579 2.026 2.816 3.52 3.712 1.493.896 3.178 1.344 5.056 1.344z"
        ></path>
        <path
          fill="#FF204E"
          fillRule="evenodd"
          d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50zM26.524 48.16a2.673 2.673 0 00-.56 2.79c.177.47.484.88.884 1.183l31.741 24a2.631 2.631 0 002.906.177c.4-.233.734-.567.966-.971a2.683 2.683 0 00.011-2.659l-8.848-15.61 17.773-4.483a2.64 2.64 0 001.25-.726 2.687 2.687 0 00.606-2.732 2.667 2.667 0 00-.825-1.193l-29.096-24a2.621 2.621 0 00-3.264-.064 2.687 2.687 0 00-.838 3.179l6.71 15.789-18.145 4.576a2.64 2.64 0 00-1.271.744z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_21_2">
          <path fill="#fff" d="M0 0H368V100H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;
