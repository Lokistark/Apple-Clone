import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-4 py-8 text-xs text-gray-700 border-t mt-16">
      <div className="max-w-6xl mx-auto space-y-3">
        {/* Legal/Terms Line */}
        <div>
          <p className="mb-1">
            <p>No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.</p><br></br>
            <p>Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback</p><br></br>
            <p>A subscription is required for Apple TV+.</p><br></br>
            <p>Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>
          </p>
        </div>


        {/* Multi-column Footer */}
        <div className="grid md:grid-cols-6 grid-cols-2 gap-6 mt-6 mb-4">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-2 hover:underline cursor-pointer">Shop and Learn</h3>
            <ul className="space-y-1 [&>li:hover]:underline">
              <li className="hover:underline cursor-pointer">Store</li>
              <li className="hover:underline cursor-pointer">Mac</li>
              <li className="hover:underline cursor-pointer">iPad</li>
              <li className="hover:underline cursor-pointer">iPhone</li>
              <li className="hover:underline cursor-pointer">Watch</li>
              <li className="hover:underline cursor-pointer" >AirPods</li>
              <li className="hover:underline cursor-pointer">TV &amp; Home</li>
              <li className="hover:underline cursor-pointer">AirTag</li>
              <li className="hover:underline cursor-pointer">Accessories</li>
              <li classname="hover:underline cursor-pointer">Gift Cards</li>
              <li className="font-bold hover:underline cursor-pointer">Apple Wallet</li>
              <li className="hover:underline cursor-pointer">Wallet</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-2 hover:underline cursor-pointer">Account</h3>
            <ul className="space-y-1 [&>li:hover]:underline">
              <li className="hover:underline cursor-pointer">Manage Your Apple Account</li>
              <li className="hover:underline cursor-pointer">Apple Store Account</li>
              <li className="hover:underline cursor-pointer">iCloud.com</li>
              <li className="font-bold mt-2 hover:underline cursor-pointer">Entertainment</li>
              <li className="hover:underline cursor-pointer">Apple One</li>
              <li className="hover:underline cursor-pointer">Apple TV+</li>
              <li className="hover:underline cursor-pointer">Apple Music</li>
              <li className="hover:underline cursor-pointer">Apple Arcade</li>
              <li className="hover:underline cursor-pointer">Apple Podcasts</li>
              <li className="hover:underline cursor-pointer">Apple Books</li>
              <li className="hover:underline cursor-pointer">App Store</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-2 hover:underline cursor-pointer">Apple Store</h3>
            <ul className="space-y-1 [&>li:hover]:underline">
              <li className="hover:underline cursor-pointer">Find a Store</li>
              <li className="hover:underline cursor-pointer">Genius Bar</li>
              <li className="hover:underline cursor-pointer">Today at Apple</li>
              <li className="hover:underline cursor-pointer">Group Reservations</li>
              <li className="hover:underline cursor-pointer">Apple Camp</li>
              <li className="hover:underline cursor-pointer">Apple Trade In</li>
              <li className="hover:underline cursor-pointer">Ways to Buy</li>
              <li className="hover:underline cursor-pointer">Recycling Programme</li>
              <li className="hover:underline cursor-pointer">Order Status</li>
              <li className="hover:underline cursor-pointer">Shopping Help</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-2 hover:underline cursor-pointer">For Business</h3>
            <ul className="space-y-1 [&>li:hover]:underline">
              <li className="hover:underline cursor-pointer">Apple and Business</li>
              <li className="hover:underline cursor-pointer">Shop for Business</li>
              <li className="font-bold mt-2 hover:underline cursor-pointer">For Education</li>
              <li className="hover:underline cursor-pointer">Apple and Education</li>
              <li className="hover:underline cursor-pointer">Shop for Education</li>
              <li className="hover:underline cursor-pointer">Shop for University</li>
              <li className="font-bold mt-2 hover:underline cursor-pointer">For Healthcare</li>
              <li className="hover:underline cursor-pointer">Apple and Healthcare</li>
              <li className="font-bold mt-2 hover:underline cursor-pointer">For Government</li>
              <li className="hover:underline cursor-pointer">Apple and Government</li>
            </ul>
          </div>
          {/* Column 5 */}
          <div>
            <h3 className="font-bold mb-2 hover:underline cursor-pointer">Apple Values</h3>
            <ul className="space-y-1 [&>li:hover]:underline">
              <li className="hover:underline cursor-pointer">Accessibility</li>
              <li className="hover:underline cursor-pointer">Education</li>
              <li className="hover:underline cursor-pointer">Environment</li>
              <li className="hover:underline cursor-pointer">Privacy</li>
              <li className="hover:underline cursor-pointer">Supply Chain Innovation</li>
            </ul>
          </div>
          {/* Column 6 */}
          <div>
            <h3 className="font-bold mb-2 hover:underline cursor-pointer">About Apple</h3>
            <ul className="space-y-1 [&>li:hover]:underline">
              <li className="hover:underline cursor-pointer">Newsroom</li>
              <li className="hover:underline cursor-pointer">Apple Leadership</li>
              <li className="hover:underline cursor-pointer">Career Opportunities</li>
              <li className="hover:underline cursor-pointer">Investors</li>
              <li className="hover:underline cursor-pointer">Ethics &amp; Compliance</li>
              <li className="hover:underline cursor-pointer">Events</li>
              <li className="hover:underline cursor-pointer">Contact Apple</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t mt-4 pt-3 flex flex-col md:flex-row md:items-center md:justify-between text-gray-500 text-xs">
          <div>
            Copyright &copy; 2025 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Legal</a>
            <span>|</span>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4 text-right">
            India
          </div>
        </div>

      </div>
    </footer>
  );
}




