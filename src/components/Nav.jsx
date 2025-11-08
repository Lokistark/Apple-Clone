import React from 'react';

const AppleLogo = () => (
  <svg width="20" height="24" fill="currentColor" viewBox="0 0 20 24">
    <path d="M16.69 12.77c-.02-2.16 1.77-3.19 1.85-3.24-1.01-1.45-2.57-1.66-3.12-1.68-1.33-.13-2.59.78-3.27.78-.67 0-1.7-.76-2.81-.74-1.44.02-2.77.84-3.5 2.14-1.48 2.57-.38 6.35 1.05 8.43.71 1.03 1.56 2.18 2.67 2.14 1.07-.04 1.48-.69 2.78-.69 1.3 0 1.66.69 2.79.67 1.16-.02 1.88-1.05 2.57-2.09.81-1.19 1.14-2.34 1.16-2.4-.03-.01-2.21-.85-2.24-3.38zm-2.11-6.15c.59-.72.99-1.73.88-2.73-.85.03-1.88.56-2.5 1.28-.54.6-1.02 1.61-.84 2.56.96.08 1.93-.49 2.46-1.11z" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
    <path d="M8.5 2a6.5 6.5 0 0 1 5.21 10.59l4.1 4.1a1 1 0 0 1-1.41 1.41l-4.1-4.1A6.5 6.5 0 1 1 8.5 2zm0 2a4.5 4.5 0 1 0 .001 9.001A4.5 4.5 0 0 0 8.5 4z" />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="24" fill="currentColor" viewBox="0 0 20 24">
    <path d="M7 18a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm8 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm1.42-4.16A1 1 0 0 0 17 14H6.42l-.69-3h10.19a1 1 0 0 0 .97-.76l1.43-5.71a1 1 0 0 0-.97-1.24H5.21l-.94-4H1a1 1 0 1 0 0 2h2.34l2.73 11.8A3 3 0 0 0 9.94 21h7a1 1 0 1 0 0-2h-7a1 1 0 0 1-.95-.68l.69-2.66h7.31z" />
  </svg>
);

const navItemEffect =
  "hover:text-white cursor-pointer px-2 py-1 rounded transition duration-150 hover:shadow-lg hover:bg-neutral-800 hover:-translate-y-1 active:shadow-xl active:translate-y-0 focus:outline-none transform";

export default function Nav() {
  return (
    <nav className="w-full bg-neutral-900 text-gray-200 shadow z-50">
      <div className="w-full max-w-screen-xl mx-auto flex flex-row items-center px-8 py-2">
        <ul className="flex flex-row justify-center items-center space-x-8 mx-auto text-sm font-medium select-none">
          {/* Apple logo before Store */}
          <li className={navItemEffect}>
            <AppleLogo />
          </li>
          {['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'].map((item) =>
            item === 'Support' ? (
              <React.Fragment key={item}>
                <li className={navItemEffect}>
                  {item}
                </li>
                {/* Search and Cart icons after Support */}
                <li className="flex space-x-4 items-center">
                  <span className={navItemEffect}><SearchIcon /></span>
                  <span className={navItemEffect}><CartIcon /></span>
                </li>
              </React.Fragment>
            ) : (
              <li className={navItemEffect} key={item}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="w-full bg-neutral-800 text-center py-2 text-gray-300 text-sm">
        Get up to ₹10000 instant cashback on your favourite products with eligible cards. Plus up to 6 months of No Cost EMI.
        <a href="#" className="text-sky-400 hover:underline ml-2">Shop &gt;</a>
      </div>
    </nav>
  );
}





