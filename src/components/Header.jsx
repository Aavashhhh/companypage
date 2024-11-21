import React from 'react';

const Header = () => {
  return (
    <header className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-left text-2xl font-bold mb-4">Aerospace & Defense</h1>

        {/* Industry and Location section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Industry Section */}
          <div>
            <label className="text-left block mb-2 text-sm font-medium">Industry</label>
            <select className="w-full p-2 border rounded max-h-40 overflow-y-auto text-sm">
            <option>All</option>
            <option>Accounting & Tax</option>
            <option>Advertising & Public Relations</option>
            <option>Aerospace & Defense</option>
            <option>Agriculture</option>
            <option>Airlines, Airports & Air Transportation</option>
            <option>Ambulance & Medical Transportation</option>
            <option>Animal Production</option>
            <option>Architectural & Engineering Services</option>
            <option>Arts, Entertainment & Recreation</option>
            <option>Auctions & Galleries</option>
            <option>Automotive Parts & Accessories Stores</option>
            <option>Banking & Lending</option>
            <option>Bars & Nightclubs</option>
            <option>Beauty & Personal Accessories Stores</option>
            <option>Beauty & Wellness</option>
            <option>Biotechnology</option>
            <option>Broadcast Media</option>
            <option>Business Consulting</option>
            <option>Car & Truck Rental</option>
            <option>Catering & Food Service Contractors</option>
            <option>Chemical Manufacturing</option>
            <option>Civic & Social Services</option>
            <option>Colleges & Universities</option>
            <option>Commercial Equipment Services</option>
            <option>Commercial Printing</option>
            <option>Computer Hardware Development</option>
            <option>Construction</option>
            <option>Construction, Repair & Maintenance Services</option>
            <option>Consumer Electronics & Appliances Stores</option>
            <option>Consumer Product Manufacturing</option>
            <option>Convenience Stores</option>
            <option>Crop Production</option>
            <option>Culture & Entertainment</option>
            <option>Debt Relief</option>
            <option>Dental Clinics</option>
            <option>Department, Clothing & Shoe Stores</option>
            <option>Drug & Health Stores</option>
            <option>Education</option>
            <option>Education & Training Services</option>
            <option>Electronics Manufacturing</option>
            <option>Energy & Utilities</option>
            <option>Energy, Mining & Utilities</option>
            <option>Event Services</option>
            <option>Farm Support</option>
            <option>Film Production</option>
            <option>Financial Services</option>
            <option>Financial Transaction Processing</option>
            <option>Fishery</option>
            <option>Floral Nursery</option>
            <option>Food & Beverage Manufacturing</option>
            <option>Food & Beverage Stores</option>
            <option>Forestry, Logging & Timber Operations</option>
            <option>Gambling</option>
            <option>General Merchandise & Superstores</option>
            <option>General Repair & Maintenance</option>
            <option>Gift, Novelty & Souvenir Stores</option>
            <option>Government & Public Administration</option>
            <option>Grantmaking & Charitable Foundations</option>
            <option>Grocery Stores</option>
            <option>Health Care Products Manufacturing</option>
            <option>Healthcare</option>
            <option>Home Furniture & Housewares Stores</option>
            <option>Hospitals & Health Clinics</option>
            <option>Hotels & Resorts</option>
            <option>Hotels & Travel Accommodation</option>
            <option>HR Consulting</option>
            <option>Human Resources & Staffing</option>
            <option>Information Technology</option>
            <option>Information Technology Support Services</option>
            <option>Insurance</option>
            <option>Insurance Agencies & Brokerages</option>
            <option>Insurance Carriers</option>
            <option>Internet & Web Services</option>
            <option>Investment & Asset Management</option>
            <option>Laundry & Dry Cleaning</option>
            <option>Law Firms</option>
            <option>Legal</option>
            <option>Legal Services</option>
            <option>Machinery Manufacturing</option>
            <option>Management & Consulting</option>
            <option>Manufacturing</option>
            <option>Marine Transportation</option>
            <option>Media & Communication</option>
            <option>Media & Entertainment Stores</option>
            <option>Medical Testing & Clinical Laboratories</option>
            <option>Membership Organizations</option>
            <option>Metal & Mineral Manufacturing</option>
            <option>Mining & Metals</option>
            <option>Municipal Agencies</option>
            <option>Music & Sound Production</option>
            <option>National Agencies</option>
            <option>Nonprofit & NGO</option>
            <option>Nursing Care</option>
            <option>Office Supply & Copy Stores</option>
            <option>Parking & Valet</option>
            <option>Personal Consumer Services</option>
            <option>Pet & Pet Supplies Stores</option>
            <option>Pet Care & Veterinary</option>
            <option>Pharmaceutical</option>
            <option>Pharmaceutical & Biotechnology</option>
            <option>Photography</option>
            <option>Preschools & Child Care Services</option>
            <option>Primary & Secondary Schools</option>
            <option>Private Households</option>
            <option>Property Management</option>
            <option>Publishing</option>
            <option>Rail Transportation</option>
            <option>Real Estate</option>
            <option>Real Estate Agencies</option>
            <option>Recruiting</option>
            <option>Recruiting & Staffing</option>
            <option>Religious Institutions</option>
            <option>Research & Development</option>
            <option>Restaurants & Cafes</option>
            <option>Restaurants & Food Service</option>
            <option>Retail & Wholesale</option>
            <option>Security & Protective</option>
            <option>Shipping & Trucking</option>
            <option>Software Development</option>
            <option>Sporting Goods Stores</option>
            <option>Sports & Recreation</option>
            <option>Staffing</option>
            <option>State & Regional Agencies</option>
            <option>Stock Exchanges</option>
            <option>Taxi & Car Services</option>
            <option>Telecommunications</option>
            <option>Textile & Apparel Manufacturing</option>
            <option>Ticket Sales</option>
            <option>Toy & Hobby Stores</option>
            <option>Translation & Linguistic Services</option>
            <option>Transportation & Logistics</option>
            <option>Transportation Equipment Manufacturing</option>
            <option>Transportation Management</option>
            <option>Travel Agencies</option>
            <option>Vehicle Dealers</option>
            <option>Vehicle Repair & Maintenance</option>
            <option>Video Game Publishing</option>
            <option>Waste Management</option>
            <option>Wholesale</option>
            <option>Wood & Paper Manufacturing</option>
            </select>
          </div>

          {/* Location Section */}
          <div>
            <label className="text-left block mb-2 text-sm font-medium">Location</label>
            <select className="w-full p-2 border rounded max-h-40 overflow-y-auto text-sm">
              <option>United States</option>
              <option>Alabama - 254 companies</option>
              <option>Huntsville, AL - 155 companies</option>
              <option>Mobile, AL - 33 companies</option>
              <option>Alaska - 49 companies</option>
              <option>American Samoa - 2 companies</option>
              <option>Arizona - 280 companies</option>
              <option>Mesa, AZ - 41 companies</option>
              <option>Phoenix, AZ - 123 companies</option>
              <option>Tempe, AZ - 45 companies</option>
              <option>Tucson, AZ - 54 companies</option>
              <option>Arkansas - 103 companies</option>
              <option>California - 803 companies</option>
              <option>El Segundo, CA - 46 companies</option>
              <option>Irvine, CA - 38 companies</option>
              <option>Long Beach, CA - 33 companies</option>
              <option>Los Angeles, CA - 159 companies</option>
              <option>Ontario, CA - 47 companies</option>
              <option>Sacramento, CA - 41 companies</option>
              <option>San Diego, CA - 179 companies</option>
              <option>San Francisco, CA - 62 companies</option>
              <option>San Jose, CA - 43 companies</option>
              <option>Santa Ana, CA - 38 companies</option>
              <option>Colorado - 251 companies</option>
              <option>Colorado Springs, CO - 107 companies</option>
              <option>Denver, CO - 87 companies</option>
              <option>Connecticut - 146 companies</option>
              <option>Delaware - 70 companies</option>
              <option>District of Columbia - 204 companies</option>
              <option>Washington, DC - 204 companies</option>
              <option>Florida - 567 companies</option>
              <option>Fort Lauderdale, FL - 57 companies</option>
              <option>Jacksonville, FL - 96 companies</option>
              <option>Melbourne, FL - 47 companies</option>
              <option>Miami, FL - 121 companies</option>
              <option>Orlando, FL - 115 companies</option>
              <option>Pensacola, FL - 39 companies</option>
              <option>Tampa, FL - 95 companies</option>
              <option>Georgia - 318 companies</option>
              <option>Atlanta, GA - 133 companies</option>
              <option>Augusta, GA - 39 companies</option>
              <option>Savannah, GA - 38 companies</option>
              <option>Guam - 17 companies</option>
              <option>Hawaii - 79 companies</option>
              <option>Honolulu, HI - 50 companies</option>
              <option>Idaho - 46 companies</option>
              <option>Illinois - 254 companies</option>
              <option>Chicago, IL - 118 companies</option>
              <option>Indiana - 173 companies</option>
              <option>Indianapolis, IN - 62 companies</option>
              <option>Iowa - 72 companies</option>
              <option>Kansas - 117 companies</option>
              <option>Wichita, KS - 69 companies</option>
              <option>Kentucky - 132 companies</option>
              <option>Louisville, KY - 38 companies</option>
              <option>Louisiana - 139 companies</option>
              <option>New Orleans, LA - 39 companies</option>
              <option>Maine - 44 companies</option>
              <option>Maryland - 286 companies</option>
              <option>Aberdeen Proving Ground, MD - 35 companies</option>
              <option>Baltimore, MD - 56 companies</option>
              <option>Bethesda, MD - 33 companies</option>
              <option>Columbia, MD - 43 companies</option>
              <option>Fort Meade, MD - 45 companies</option>
              <option>Lexington Park, MD - 35 companies</option>
              <option>Massachusetts - 216 companies</option>
              <option>Boston, MA - 61 companies</option>
              <option>Michigan - 240 companies</option>
              <option>Detroit, MI - 48 companies</option>
              <option>Minnesota - 122 companies</option>
              <option>Minneapolis, MN - 42 companies</option>
              <option>Mississippi - 98 companies</option>
              <option>Missouri - 174 companies</option>
              <option>Kansas City, MO - 35 companies</option>
              <option>St. Louis, MO - 78 companies</option>
              <option>Montana - 34 companies</option>
              <option>Nebraska - 60 companies</option>
              <option>Nevada - 123 companies</option>
              <option>Las Vegas, NV - 82 companies</option>
              <option>New Hampshire - 82 companies</option>
              <option>New Jersey - 194 companies</option>
              <option>Newark, NJ - 34 companies</option>
              <option>New Mexico - 114 companies</option>
              <option>Albuquerque, NM - 68 companies</option>
              <option>New York State - 324 companies</option>
              <option>New York, NY - 137 companies</option>
              <option>North Carolina - 275 companies</option>
              <option>Charlotte, NC - 54 companies</option>
              <option>Fayetteville, NC - 35 companies</option>
              <option>Fort Liberty, NC - 48 companies</option>
              <option>Greensboro, NC - 33 companies</option>
              <option>Raleigh, NC - 41 companies</option>
              <option>North Dakota - 42 companies</option>
              <option>Ohio - 298 companies</option>
              <option>Cincinnati, OH - 51 companies</option>
              <option>Cleveland, OH - 60 companies</option>
              <option>Columbus, OH - 36 companies</option>
              <option>Dayton, OH - 56 companies</option>
              <option>Oklahoma - 139 companies</option>
              <option>Oklahoma City, OK - 60 companies</option>
              <option>Tulsa, OK - 57 companies</option>
              <option>Oregon - 93 companies</option>
              <option>Portland, OR - 44 companies</option>
              <option>Pennsylvania - 248 companies</option>
              <option>Philadelphia, PA - 78 companies</option>
              <option>Pittsburgh, PA - 56 companies</option>
              <option>Puerto Rico - 37 companies</option>
              <option>Rhode Island - 41 companies</option>
              <option>South Carolina - 165 companies</option>
              <option>Charleston, SC - 63 companies</option>
              <option>North Charleston, SC - 41 companies</option>
              <option>South Dakota - 30 companies</option>
              <option>Tennessee - 151 companies</option>
              <option>Memphis, TN - 35 companies</option>
              <option>Nashville, TN - 50 companies</option>
              <option>Texas - 545 companies</option>
              <option>Arlington, TX - 34 companies</option>
              <option>Austin, TX - 76 companies</option>
              <option>Dallas-Fort Worth, TX - 52 companies</option>
              <option>Dallas, TX - 120 companies</option>
              <option>El Paso, TX - 42 companies</option>
              <option>Fort Bliss, TX - 35 companies</option>
              <option>Fort Cavazos, TX - 48 companies</option>
              <option>Fort Worth, TX - 73 companies</option>
              <option>Houston, TX - 175 companies</option>
              <option>Irving, TX - 40 companies</option>
              <option>San Antonio, TX - 127 companies</option>
              <option>Utah - 136 companies</option>
              <option>Salt Lake City, UT - 47 companies</option>
              <option>Vermont - 28 companies</option>
              <option>Virgin Islands - 3 companies</option>
              <option>Virginia - 462 companies</option>
              <option>Alexandria, VA - 79 companies</option>
              <option>Arlington, VA - 111 companies</option>
              <option>Chantilly, VA - 56 companies</option>
              <option>Chesapeake, VA - 36 companies</option>
              <option>Dulles, VA - 35 companies</option>
              <option>Fairfax, VA - 49 companies</option>
              <option>Falls Church, VA - 33 companies</option>
              <option>Fort Belvoir, VA - 46 companies</option>
              <option>Hampton, VA - 41 companies</option>
              <option>Herndon, VA - 64 companies</option>
              <option>McLean, VA - 46 companies</option>
              <option>Newport News, VA - 51 companies</option>
              <option>Norfolk, VA - 85 companies</option>
              <option>Reston, VA - 60 companies</option>
              <option>Richmond, VA - 34 companies</option>
              <option>Springfield, VA - 47 companies</option>
              <option>Sterling, VA - 42 companies</option>
              <option>Virginia Beach, VA - 67 companies</option>
              <option>Washington State - 267 companies</option>
              <option>Everett, WA - 43 companies</option>
              <option>Seattle, WA - 89 companies</option>
              <option>West Virginia - 66 companies</option>
              <option>Wisconsin - 121 companies</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
