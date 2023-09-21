"use client";
import { useParams } from "next/navigation";
import Card from "../ui/card/Card";
import classes from "./Rules.module.css";

const Rules = () => {
  const params = useParams();
  const locale = params.locale;
  return (
    <section className="container mx-auto">
      <article>
        <div className="mx-2">
          <Card className="bg-[#F8F5EF] my-3  lg:flex lg:flex-wrap">
            <div className="lg:w-[60%] p-3  lg:p-[1.5rem] xl:p-[2rem]">
              <div className="mb-2">
                <h1
                  className={`${
                    classes["sofia-font-block"]
                  } text-[22px] text-center ${
                    locale === "en" ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  Terms & Conditions
                </h1>
              </div>
              <div className={`${classes["sofia-font"]} text-[12px]`}>
                <p className="mb-4 lg:w-[90%]">
                  Terms & Conditions – Tim Hortons GCC
                </p>
                <p className="mb-4 lg:w-[90%]">
                  By Registering on the Tim Hortons GCC Mobile App, you accept
                  the terms and conditions of the App and the Loyalty program.
                </p>
                <p className="mb-4 lg:w-[90%]">
                  Tim Hortons AG Café International Management Ltd reserves the
                  right to amend, cancel or change the terms and conditions or
                  suspend the loyalty program at any time without any notice and
                  Tim Hortons has the sole discretion on the same.
                </p>
                <p className="lg:w-[90%]">
                  You may register for certain activities provided through the
                  Services. When you register or provide any other information
                  in connection with the Services, you agree to provide
                  accurate, current, and complete information and to promptly
                  update this information to maintain its accuracy. You are
                  responsible for maintaining the confidentiality of any
                  password and username that you are given or select, and you
                  are responsible for all activities that occur under your
                  password or account. Tim Hortons has the right to suspend or
                  terminate any account or other registration if it suspects
                  that such information is inaccurate or incomplete. You agree
                  to immediately notify Tim Hortons of any unauthorized use of
                  your password or username or any other breach of security.
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:w-[35%] grow">
              <div className="w-[230px] h-[230px] md:w-[300px] md:h-[300px] lg:w-[100%] lg:h-[100%] mx-auto ">
                <video
                  autoPlay
                  loop
                  muted
                  className={`${
                    locale === "en" ? "rounded-r-lg" : "rounded-l-lg"
                  }`}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                >
                  <source
                    src="/assets/videos/landing/coffe.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Card>
        </div>
        <div className="px-4 md:px-10 text-[#3B2222] text-[13px] my-10">
          <div>
            <h1 className={`${classes["sofia-font-block"]}  `}>
              Loyalty Program
            </h1>
            <div>
              <p className="my-5">
                The terms and conditions of Tim Hortons Loyalty Program are
                listed below:
              </p>
              <p>
                1. The Tim Hortons membership commences when the customer
                registers into the program using the mobile application
                validating the account with One Time Password and providing the
                Date of Birth along with setting up the password
              </p>
              <p>
                2. The membership is valid for a period of one (1) year from the
                date of joining the program. At least one purchase of sandwich
                or beverage in a year is a prerequisite for successive renewal
                of membership
              </p>
              <p>
                3. Tim Hortons reserves the right to terminate any membership
                without any notice at its sole discretion
              </p>
              <p>
                4. This program is applicable across all Tim Hortons stores
                across the GCC
              </p>
              <p>5. Only one (1) membership per GSM phone number</p>
              <p>
                The membership is non-transferable and can only be used by the
                authenticated / validated member. Customer needs to complete
                successful OTP validation on the registered number to complete
                authentication
              </p>
              <p>
                Tim Hortons members are entitled to earn points stamps on
                purchase of any regular priced sandwich or beverageitem.
              </p>
              <p>
                Tim Hortons may at any time reject to reward or redeem points
                stamps for failure to pay for the purchases or for any breach of
                these conditions or for any judicious reason and the member
                shall have no right to claim the pointsstamps
              </p>
              <p>
                Points???Stamps cannot be transferred between member accounts.
                However, a member can change the number by editing the number on
                the mobile app and re-validating the same
              </p>
              <p>Stamps can never be exchanged or transferred to cash</p>
              <p>
                All stamps belong to Tim Hortons and may never be exchanged for
                goods not approved by Tim Hortons
              </p>
              <p>
                Membership rights are reserved with Tim Hortons and are subject
                to Tim Hortons’ approval. A membership can be terminated in the
                event of a member failing to comply with these Terms &
                Conditions or supplying any false or misleading information to
                Tim Hortons or abusing any membership privileges or not using
                membership for a period of 12 months or in case of death of a
                member or becoming bankrupt or under discretion of Tim Hortons
                for judicious reasons
              </p>
              <p>
                A member may cancel his / her membership by giving Tim Hortons
                written cancellation request through email
                support@timhortonsgcc.com
              </p>
              <p>
                In case of such termination Tim Hortons shall be responsible to
                the member only to the extent of the points lying to the credit
                of the member’s account
              </p>
              <p>
                Tim Hortons shall not be responsible whatsoever for any data
                loss, or corruption of data or its confidentiality or the likes
                of the customer. No claim of whatever nature in this regard,
                shall lie against Tim Hortons either by the customer or a third
                party
              </p>
              <p>
                Tim Hortons also does not take responsibility for any lost
                stamps stamps / discrepancy of points earned or any claim for
                damage to a mobile phone as a consequence of a Tim Hortons
                membership
              </p>
              <p>
                Tim Hortons shall not be held liable for any loss, theft, damage
                or unauthorized use of the mobile phones/membership/mobile app
                account and it is the sole responsibility of the member to
                ensure safety of his mobile phone, mobile app account and/or the
                password if any allotted to him for the purpose
              </p>
              <p>
                Any loss of mobile or sim card should be intimated to Tim
                Hortons immediately failing which member is liable for loss of
                points and will not hold Tim Hortons for any loss occurring due
                to such events
              </p>
              <p>
                All conditions and warranties, whether expressed or implied and
                whether arising under legislation or otherwise, as to condition,
                suitability, quality, fitness or safety of any reward supplied
                are expressly excluded to the full extent permitted by law. Any
                liability that cannot be fully excluded is limited, where
                permitted, to replacing, or crediting the value of the Loyalty
                stamps points at our discretion
              </p>
              <p>
                Tim Hortons shall not be responsible in any way for technical
                faults by third parties and service provider as they are beyond
                the control of Apparel Group. Apparel Group shall at the best
                shall endeavor to sort out the said problem
              </p>
            </div>
          </div>
          <div>
            <h1 className={`${classes["sofia-font-block"]} my-5 `}>
              Tim Hortons – Loyalty Beverages
            </h1>
            <div>
              <p>Members will collect 1 stamp on every Beverage purchased</p>
              <p>
                On the collection of 7 Stamps, the members get 1 Small size
                Beverage as a Reward
              </p>
              <p>
                Members will not collect Club Apparel points at any of the Tim
                Hortons stores
              </p>
              <p>
                Club Apparel Points cannot be redeemed at Tim Hortons stores
              </p>
              <p>Club Apparel stamps can be used in Tim Hortons App</p>
              <p>
                Club Apparel stamps will be duplicated in Tim Hortons account
              </p>
              <p>
                Earned Reward Beverages will be Valid for 3 months from the date
                of ??
              </p>
              <p>Add-Ons are NOT included with the redeemed Beverage</p>
              <p>
                The reward Beverage can be redeemed at the stores of Tim Hortons
                stores in United Arab EmiratesUAE, Oman, State of Qatar, Bahrain
                & Kingdom Of Saudi ArabiaSA
              </p>
              <p>Stamps are Not Collected for a redeemed Beverage</p>
              <p>
                Reward Beverage cannot be upsized or changed to any other
                products
              </p>
              <p>
                Members have to Complete their profile on the Tim Hortons App in
                order to redeem rewards
              </p>
              <p>
                All the above terms and conditions are subject to change at the
                discretion of Tim Hortons
              </p>
            </div>
          </div>
          <div>
            <h1 className={`${classes["sofia-font-block"]} my-5 `}>
              Tim Hortons Loyalty Sandwiches
            </h1>
            <div>
              <p>Members will collect 1 stamp on every Sandwich purchased</p>
              <p>
                On the collection of 7 Stamps, the members get 1 standard
                Sandwich as a Reward
              </p>
              <p>
                Members will not collect Club Apparel points at any of the Tim
                Hortons stores
              </p>
              <p>
                Club Apparel Points cannot be redeemed at Tim Hortons stores
              </p>
              <p>Club Apparel stamps can be used in Tim Hortons App</p>
              <p>
                Club Apparel stamps will be duplicated in Tim Hortons account
              </p>
              <p>Earned Reward Beverages will be Valid for 3 months</p>
              <p>Add-Ons are NOT included with the redeemed Beverage</p>
              <p>
                The reward Beverage can be redeemed at Tim Hortons stores in
                UAE, Oman, Qatar, Bahrain & KSA
              </p>
              <p>Stamps are Not Collected for a redeemed Beverage</p>
              <p>
                Reward Beverage cannot be upsized or changed to any other
                products
              </p>
              <p>
                Members have to Complete their profile on the Tim Hortons App in
                order to redeem rewards
              </p>
              <p>
                All the above terms and conditions are subject to change at the
                discretion of Tim Hortons
              </p>
              <p className="my-3">
                Any enquiries can be addressed to hotline: 800-TIMS (8467) or
                Email: support@timhortonsgcc.com
              </p>
              <p>
                Decision of Tim Hortons on all matters of this membership shall
                be final and binding on the parties.
              </p>
              <p>
                This shall be governed by the GCC laws and the courts of
                DubaiUnited Arab EmiratesAE laws and the courts of Dubai shall
                have exclusive Jurisdiction.
              </p>
            </div>
            <div>
              <h1 className={`${classes["sofia-font-block"]} my-5 `}>
                Delivery
              </h1>
              <div>
                <p>
                  “User” refers to you, as a user of the Services. A user is one
                  who accesses the Services for displaying, transacting, or
                  uploading information
                </p>
                <p>
                  Tim Hortons is a platform connecting Users with Tim Hortons
                  Restaurants allowing Users to order items for delivery and
                  pickup. When User orders from a partner restaurant, Tim
                  Hortons Application communicates the order to the selected
                  partner Restaurant from the users for them to complete the
                  User’s order and to manage the experience throughout the order
                  process.
                </p>
                <p>
                  Each delivering restaurant has a fixed delivery area, please
                  note the delivery area may change at any time. Tim Hortons
                  restaurants decide their own operating hours, which means that
                  the availability of our service, and the range of available
                  restaurants from which the User can order at a certain time,
                  depends on the Restaurants in the User’s area. Upon placing an
                  order through our App, it needs to be accepted by the selected
                  Tim Hortons Restaurant. A notification will be sent to the
                  User if the order has been accepted. For placing an order,
                  User will have to provide certain details like contact number
                  and delivery address etc. User needs to take particular care
                  when providing these details and needs to ensure the accuracy
                  at the time of placing an Order.
                </p>
                <p>
                  User must prepay for all items ordered using their account,
                  and for related delivery charges, even if they have ordered
                  the item for someone else.
                </p>
                <p>
                  Please note that our Tim Hortons Restaurants may operate a
                  minimum order value policy
                </p>
                <p>
                  Certain products may have allergens like nuts, dairy etc.; the
                  user can view the same in our App, if provided, while placing
                  an order. User should contact our Partner Restaurant prior to
                  ordering if they have any allergy. User must pre ensure that
                  they do not order any items that they are allergic from and
                  must directly inform the Partner Restaurant about any
                  prevailing allergies that they may want to avoid. User is
                  accountable and responsible for ascertaining with the Partner
                  Restaurants that the User is not ordering / consuming any item
                  that may cause any allergies to the User or violates any
                  dietary restrictions of the User
                </p>
                <p>
                  Some of the products listed may be suitable for certain ages
                  only. User should check the product they are ordering and read
                  its description, if provided, while placing the order. User
                  must ensure that they are an adult and are legally authorized
                  to order on Tim Hortons application. By ordering on Tim
                  Hortons App the User confirms that they are an Adult and
                  accept all Terms & Conditions of Tim Hortons.
                </p>
                <p>
                  User indemnifies Tim Hortons and its subsidiaries in the event
                  the Product ordered by User does not meet User’s dietary or
                  any other requirements and/or restrictions. By ordering on Tim
                  Hortons Application User expresses the desire to enter into
                  agreement with Tim Hortons, its subsidiaries, and empaneled
                  Partner Restaurants. User’s placing the Order does not
                  construe acceptance of the Order.
                </p>
                <p>
                  User has the option to place an order as a standard Delivery
                  or a Scheduled Delivery. For a standard Delivery, we will tell
                  the User an estimated delivery time while the User places the
                  order, but we will attempt delivery as soon as possible; User
                  agrees to be available at the delivery location to accept
                  delivery from the time of placing the order. For a Scheduled
                  Delivery, we will tell the time when the item is expected to
                  be delivered; User must be available to accept delivery ten
                  minutes before and ten minutes after that time. User
                  indemnifies Tim Hortons, its subsidiaries or restaurants and
                  Delivery Partners for any delays in delivery which occur due
                  to circumstances which are not in control of Tim Hortons, its
                  subsidiaries or Partner Restaurants and Delivery Partners,
                  circumstances such as, but not limited to, traffic and weather
                  conditions, breakdown of delivery vehicle, accident, wrong
                  address provided by user etc.
                </p>
                <p>
                  Tim Hortons, its subsidiaries or Partner Restaurants and
                  Delivery Partners will work to ensure all deliveries are made
                  within the promised timeframe. However, if there are any
                  delays due to unforeseen circumstances, we will inform the
                  user and work with the User to conclude the delivery
                </p>
                <p>
                  User is responsible to provide correct Delivery information
                  while placing the order. Delivery Partner will attempt
                  delivery at the address provided by the User while placing the
                  order. If Delivery Partner is not able to delivery
                  successfully due to User’s action, then the User will be
                  responsible for the loss of Order and will be charged
                  accordingly for such failure. Within the framework of such a
                  case, the User must accept all legal responsibilities arising
                  from ordering a meal to an address where he/she does not
                  exist. Reasons User might cause a delivery to fail include but
                  are not limited to the following:
                </p>
                <p>a. User does not come to the door to collect the order</p>
                <p>
                  b. User does not pick up the phone when the driver contacts
                  the User using the contact information, they have provided us
                  and/or User picked up the phone but then failed to provide
                  access within a reasonable amount of time, and
                </p>
                <p>
                  c. The User unable to guide the driver to find a safe location
                  to leave the food in absence of user.
                </p>
                <p>
                  During any product delivery made by the Delivery Partner, if
                  User is not available in the address specified in the system,
                  the order placed by the User shall not be delivered anywhere
                  else. Within the framework of such a case, the User accepts
                  all legal and financial responsibilities arising from ordering
                  a meal to an address where User is not available.
                </p>
                <p>
                  In relation to any returns, food cannot be returned, in case
                  of missing itemn in the order, User must get in touch with the
                  call center
                </p>
                <p>
                  Delivery periods/Takeaway time quoted at the time of ordering
                  are approximate only and may vary from Partner Restaurants /
                  Locations.
                </p>
                <p>
                  Please note, Pickup/Takeaway would mean where a Partner
                  Restaurant has agreed to provide an option to the Users to
                  collect the Order themselves from the Partner Restaurant. The
                  Pickup times for collection are provided by the Partner
                  Restaurant and are only estimates. Not all stores provide this
                  service
                </p>
                <p>
                  Tim Hortons, its subsidiaries, Partner Restaurants and
                  Delivery Partner reserves the right to cancel any order
                  without any reason whatsoever. In case of cancellation, Tim
                  Hortons will notify the User that their order has been
                  cancelled. User will not be charged for any orders cancelled
                  by Tim Hortons and/or the Partner Restaurant, and we will
                  reimburse the User for any payment already made.
                </p>
                <p>
                  Prices include VAT and other taxes as applicable by the
                  government and can also change at any time at the discretion
                  of the Partner Restaurantsgovernment. User will be notified of
                  any applicable charges and taxes prior to purchase on the
                  checkout page on our Application.
                </p>
                <p>
                  The final total price of User’s order will be displayed on the
                  checkout page, including the prices of Items and Delivery and
                  applicable Fees and taxes.
                </p>
                <p>
                  Payment for all Items and deliveries can be made on our
                  Application by credit or debit card, or other payment methods
                  made available by Tim Hortons.
                </p>
                <p>
                  Once the User’s order has been confirmed the credit or debit
                  card will be authorized and the total amount marked for
                  payment. Payment is made directly to Tim Hortons In an event
                  where User has an issue with the order, User will first
                  approach the call center or support@timhortonsgcc.com
                </p>
                <p>
                  If a User has an issue with Payment related matters, User will
                  need to resolve those with User’s respective payment option
                  provider. User must simultaneously inform Tim Hortons, its
                  subsidiaries, Partner Restaurants about any such issue that
                  User is facing regarding orders placed on Tim Hortons
                  Application.
                </p>
                <p>
                  Credit or Debit cards used in placing order on Tim Hortons App
                  must belong to the user. Otherwise, the user must attain the
                  legal permission from the card owner to perform the
                  transactions.
                </p>
                <p>
                  Tim Hortons reserves the right to provide other payment
                  methods or to no longer offer certain payment methods.
                </p>
                <p>
                  No replacement / refund / or any other resolution will be
                  provided without Partner Restaurants’ consent.
                </p>
                <p>
                  Additional instructions / requests made by User while placing
                  the Order will be attempted by the Partner Restaurant on a
                  best effort basis. Tim Hortons, its subsidiaries, Partner
                  Restaurants will not be held accountable for not following
                  these instructions partly or completely. Under any such
                  circumstance User shall not be entitled for Refund.
                </p>
                <p>
                  All refunds shall be processed in the same manner as they are
                  received
                </p>
                <p>
                  The user refund procedure might take 7-14 working days to
                  process on the Debit /Credit Cards bank payment gateway. The
                  user has to follow up with the bank in case of any delay in
                  crediting back the user’s account with the amount previously
                  paid by the user.
                </p>
                <p>
                  Tim Hortons at its discretion may make available from time to
                  time: (i) Coupons (which are promotional credits that may be
                  offered by us or by Partner Restaurants on our App) (ii)
                  E-Wallet Credit (which is credit that may be applied to a
                  user’s account Tim Hortons’s discretion) and (iii) Loyalty
                  Points & Rewards. Coupons, E-Wallet Credits, Loyalty Points &
                  Rewards operate as credits applying to a user’s Tim Hortons
                  account, redeemable (subject to conditions, as set out below)
                  against the cost of Items. Coupons, E-Wallet Credits, Loyalty
                  Points & Rewards are referred to collectively in these terms
                  (the Credit Terms) as Credits.
                </p>
                <p>
                  By placing an order on Tim Hortons Application, User agrees to
                  all terms & conditions including privacy policy of Tim Hortons
                  including Tim Hortons sharing user’s details with its
                  subsidiaries, Partner Restaurants, Delivery Partners, platform
                  service providers, marketing service providers etc. in order
                  to a seamless experience to the User and complete the delivery
                  of the Order. User indemnifies Club Apparel its subsidiaries,
                  Partner Restaurants, Delivery Partners, platform service
                  providers, marketing service providers etc. for any usage of
                  User’s details by these entities to provide seamless
                  experience to User at the time of the Order and subsequently
                  thereof to provide User with information on new
                  offers/products/features/restaurants/brands etc. to enhance
                  the User’s overall experience with Tim Hortons Application.
                  Tim Hortons its subsidiaries, Partner Restaurants, Delivery
                  Partners, platform service providers, marketing service
                  providers etc. reserves the right to analyse, interpret, use
                  User generated data both personal and generic to create a
                  better experience on Club Apparel platform.
                </p>
                <p>
                  To connect Users to certain Partner Restaurants, the
                  Restaurants’ contact details may be displayed on the specific
                  Partner Restaurant listing page on the Club Apparel App, which
                  connect Users directly to the Partner Restaurants’ phone
                  lines. Please note that the Partner Restaurant may record all
                  information regarding this call including the voice recording
                  of the conversation between the User, and the Partner
                  Restaurant (for internal billing tracking purposes and
                  customer service improvement at the restaurant’s end). Users
                  explicitly agree and permit the Partner Restaurant to record
                  all this information when they avail the telephony services.
                  If the User does not wish that their information be recorded
                  in such a manner, they are advised not to use the telephone
                  services provided by Club Apparel.
                </p>
                <p>
                  Tim Hortons is not liable for any information that may have
                  become outdated since the last time the information was
                  updated. Tim Hortons reserves the right to make changes and
                  corrections to any part of the Content on the App at any time
                  without prior notice.
                </p>
                <p>
                  All pictures and information contained on the App are owned by
                  or licensed to Tim Hortons. No other party is authorized to
                  reproduce or republish these in any format whatsoever without
                  the prior written permission of Tim Hortons. Tim Hortons
                  reserves the right to suspend/discontinue any or all products
                  without notice, make modifications and alterations in any or
                  all its contents, products and services contained on the App
                </p>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <h1 className={`${classes["sofia-font-block"]} my-5 `}>
              Coupon/Offers Terms & Conditions – GCC
            </h1>
            <div>
              <p>
                Coupons can be earned redeemed through the Tim Hortons Mobile
                App only
              </p>
              <p>
                Coupon is member exclusive, only Tim Hortons member can avail
                the coupon
              </p>
              <p>Coupons cannot be transferred to other members</p>
              <p>
                Coupon can be used only in specific stores as per the Brand
                promotion (as defined in the T&C of the Coupon)
              </p>
              <p>
                Coupons can be with or without transaction amount restrictions
                as per brand promotion (as defined in the T&C of the Coupon)
              </p>
              <p>
                Coupon validity varies for different promotion and is decided by
                Tim Hortons; the coupon expiry date can be checked on mobile app
              </p>
              <p>
                Coupon can be used multiple Times / Single time as per the
                promotion but only during the Promotion Period (as defined in
                the T&C of the Coupon)
              </p>
              <p>
                Coupon cannot be used on Sale items Coupon cannot be used on
                purchase of Gift Cards
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Rules;
