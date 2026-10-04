import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPageLayout,
  type LegalSection,
} from "@/components/sections/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NEXT STOP handles personal information: what is collected, how NEXT PASS codes and bookings work, what partner hostels receive, and the rights you have over your data.",
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    body: (
      <>
        <p>
          NEXT STOP is a network that connects independent hostels with the
          travellers moving between them. A traveller scans the NEXT STOP QR
          code displayed at a partner hostel, gets a digital NEXT PASS code on
          their phone, and uses it to unlock a partner&rsquo;s NEXT STOP rate in
          the next city, booking with the hostel rather than through a
          marketplace. This policy explains what
          personal information that model involves, why we need it, and what we
          do and do not do with it.
        </p>
        <p>
          It covers this website and the booking flow it leads into. It does not
          cover what a partner hostel does with your information once you are
          its guest — each hostel is responsible for its own guest records,
          registration requirements and marketing, and has its own privacy
          notice.
        </p>
        <p>
          Today NEXT STOP is a pre-launch preview. Booking is not open, no
          payments are taken, and the forms on this site are demonstrations that
          do not transmit what you type. The policy below describes the service
          as it is designed to run once it is live.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information we collect",
    body: (
      <>
        <p>
          We try to collect as little as the model allows. A NEXT PASS
          deliberately carries no name on it, and browsing the site requires no
          account.
        </p>
        <ul>
          <li>
            <strong>Information you give us.</strong> What you type into a form:
            your name, email address, chosen subject and message when you
            contact us; the hostel name, city, contact person and details you
            send when applying to become a partner.
          </li>
          <li>
            <strong>Booking information.</strong> When booking opens: the
            traveller name, contact email, arrival and departure dates, number
            of guests, room type and the NEXT PASS code used to unlock the
            NEXT STOP rate.
          </li>
          <li>
            <strong>Technical information.</strong> Standard server and device
            data such as IP address, browser type, language, referring page and
            the pages you visit, used to keep the site running and secure.
          </li>
          <li>
            <strong>Preferences stored on your device.</strong> Small items such
            as a recently viewed city or a saved hostel, kept in your browser
            rather than on our servers where that is possible.
          </li>
        </ul>
        <p>
          We do not ask for passport numbers, dates of birth or payment card
          details on this site. Where a hostel needs those for check-in or for
          local guest registration, they are given to the hostel directly.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    heading: "How we use information",
    body: (
      <>
        <p>We use the information described above to:</p>
        <ul>
          <li>
            pass a booking request to the partner hostel you chose, and confirm
            it back to you;
          </li>
          <li>
            check that a NEXT PASS code is valid and has not already been used,
            and credit the hostel that issued it;
          </li>
          <li>answer messages sent through the contact and partner forms;</li>
          <li>
            keep the network honest — detecting duplicated or fraudulent codes,
            abuse of the booking flow and attacks on the site;
          </li>
          <li>
            understand which destinations and routes people actually use, so
            listings and guides reflect where travellers go;
          </li>
          <li>meet accounting, tax and other legal obligations.</li>
        </ul>
        <p>
          We do not sell personal information, and we do not rent or trade
          traveller lists to advertisers. If we ever want to send you travel
          email that you did not ask for, we will ask first, and every message
          will carry a working unsubscribe link.
        </p>
      </>
    ),
  },
  {
    id: "next-pass-codes",
    heading: "NEXT PASS codes and bookings",
    body: (
      <>
        <p>
          A NEXT PASS is digital. Every partner hostel displays its own NEXT
          STOP QR code at reception; scanning it with your phone camera opens NEXT
          STOP, and a short flow generates a unique pass code that is shown on
          your screen. There is no registration to work
          through, so there is no account behind a pass and no profile attached
          to it.
        </p>
        <p>
          The QR code carries the hostel&rsquo;s partner identifier, which is
          why the pass records which hostel it was generated at. That page needs
          nothing about you to do its job: generating a pass does not ask for
          your name, your email address or a login. What the page does handle is
          the ordinary technical data any website receives — your IP address and
          browser type — used to keep the flow working and to stop the same code
          being generated or reused automatically.
        </p>
        <p>
          When you later use a code to book, three things are recorded: that the
          code was used, which partner generated it, and which partner received
          the booking. That record is what lets the originating hostel be
          credited for the recommendation. It is a link between two hostels and
          a code — your identity is not part of it.
        </p>
        <p>
          The booking itself is a different matter. To reserve a bed, the
          receiving hostel needs a name, contact details and your dates, and we
          pass exactly those to it. From that point the reservation is a normal
          NEXT STOP booking between you and the hostel, on the hostel&rsquo;s own
          terms.
        </p>
        <p>
          Because a pass is not tied to a named account, there is no stored
          identity for us to look it up by. If you lose sight of the code, save
          it while you have it — a screenshot or a bookmark is enough — or scan
          the hostel&rsquo;s QR code again while you are still there.
        </p>
      </>
    ),
  },
  {
    id: "cookies-and-analytics",
    heading: "Cookies and analytics",
    body: (
      <>
        <p>
          Cookies and similar browser storage are used for two purposes.
          Essential storage keeps the site working — remembering a search you
          are in the middle of, holding a booking step together, and protecting
          forms from abuse. This cannot be switched off without breaking the
          site.
        </p>
        <p>
          Analytics storage tells us, in aggregate, which pages are read, which
          destinations are searched and where people abandon the booking flow.
          We use it to decide what to build next, not to profile individuals,
          and we choose measurement that does not follow you across other
          websites.
        </p>
        <p>
          Where the law requires consent for non-essential storage, we ask for
          it before setting anything, and a refusal leaves the site fully
          usable. You can also clear or block cookies in your browser settings
          at any time.
        </p>
      </>
    ),
  },
  {
    id: "sharing-with-partners",
    heading: "Sharing with partner hostels",
    body: (
      <>
        <p>
          A booking only works if the hostel receives it, so the partner you
          book with gets the details it needs to hold your bed: your name, your
          email address, your arrival and departure dates, the room or bed type,
          the number of guests and any note you added to the reservation.
        </p>
        <p>
          The hostel whose QR code generated your NEXT PASS is told that a code
          from it led to a booking. It is not told who booked, where you went or
          what you paid.
        </p>
        <p>
          Beyond partner hostels, information is shared only with the service
          providers that run the platform — hosting, email delivery, error
          monitoring and, once booking opens, payment processing — and only to
          the extent they need it to do that job. We ask them to protect it and
          to use it for nothing else. We will also disclose information where a
          law or a valid legal request requires it.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "Data retention",
    body: (
      <>
        <p>
          We keep information only as long as it is doing something useful.
          Messages sent through the contact form are kept while the conversation
          is open and for a reasonable period afterwards, in case you write
          again about the same thing. Partner applications are kept for as long
          as the hostel is a partner, or until an unsuccessful application is
          closed.
        </p>
        <p>
          Booking records are kept for as long as accounting and tax rules
          require, which is typically several years. Pass-code records — code,
          issuing partner, receiving partner — are kept while they matter for
          crediting partners and preventing reuse, and are stripped of anything
          identifying when they no longer do.
        </p>
        <p>
          Technical logs are short-lived and rotate automatically. Aggregated
          statistics that can no longer be connected to a person may be kept
          indefinitely.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you have rights over the personal
          information we hold. These generally include the right to:
        </p>
        <ul>
          <li>ask what we hold about you and get a copy of it;</li>
          <li>have information corrected when it is wrong or out of date;</li>
          <li>
            ask us to delete information we no longer have a reason to keep;
          </li>
          <li>object to, or ask us to restrict, certain uses;</li>
          <li>receive information you gave us in a portable format;</li>
          <li>withdraw consent where our use of it rests on consent.</li>
        </ul>
        <p>
          To exercise any of these, use the contact form and say what you are
          asking for. We will respond within the time the applicable law allows,
          and we may need to confirm who you are first so that we do not hand
          your information to somebody else. If you think we have handled your
          data badly, you can complain to your local data protection authority.
        </p>
        <p>
          For information held by a partner hostel about your stay, the request
          goes to that hostel. We will tell you who to ask if you are not sure.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    heading: "International transfers",
    body: (
      <>
        <p>
          NEXT STOP is a European project launching in Spain, with hostels along
          routes that cross several countries. Booking inherently moves
          information across borders: to book a bed in Tirana from a hostel in
          Granada, the reservation has to reach Albania.
        </p>
        <p>
          Some of the service providers we rely on also operate outside the
          European Economic Area. Where information leaves the EEA, we rely on
          the transfer mechanisms the law provides — such as adequacy decisions
          or standard contractual clauses — and we prefer providers with
          European hosting where there is a reasonable choice.
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children",
    body: (
      <>
        <p>
          NEXT STOP is not intended for children. Most partner hostels set a
          minimum age of 18 for shared dorms, and the booking flow is built for
          adults making their own travel arrangements.
        </p>
        <p>
          We do not knowingly collect personal information from anyone under 16.
          If you believe a child has given us information, write to us through
          the contact form and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <>
        <p>
          This policy will change, most obviously when booking opens and there
          is a real reservation system behind it. When it does, we will update
          the date at the top of this page.
        </p>
        <p>
          If a change materially affects what we do with information we already
          hold — a new purpose, a new category of recipient — we will say so
          clearly rather than quietly editing a paragraph, and we will give
          notice before it takes effect.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    heading: "Contact us",
    body: (
      <>
        <p>
          Questions about this policy, about what we hold, or about a specific
          booking should go through the{" "}
          <Link href="/contact">contact form</Link>. Choose the subject that
          fits and tell us which section you are asking about — it gets you a
          faster and more useful answer.
        </p>
        <p>
          Published contact addresses and the registered company details of the
          entity operating NEXT STOP will be added to this page before booking
          opens. We would rather leave them blank than print something that is
          not yet true.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy"
      accent="Policy"
      subtitle="What NEXT STOP collects, why it needs it, what partner hostels receive, and how little of it a NEXT PASS actually requires."
      crumbLabel="Privacy Policy"
      lastUpdated="20 September 2026"
      sections={sections}
    />
  );
}
