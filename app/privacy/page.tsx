import type {Metadata} from "next";
import Link from "next/link";
import {PageFrame} from "@/app/components/page-frame";
import {siteConfig} from "@/lib/site-config";

export const metadata:Metadata={
 title:"Privacy Notice",
 description:"How Farefold handles information you choose to include in a project enquiry."
};

export default function Privacy(){
 return <PageFrame eyebrow="Privacy / Project enquiries" title={<>Your information.<br/><i>Handled with care.</i></>}>
  <article className="guideArticle section">
   <div className="guideArticleIntro">
    <p>This notice explains what happens when you use the Farefold website to prepare a project enquiry. It is written for the current WhatsApp-first enquiry process.</p>
   </div>
   <div className="guideSteps">
    <div><span>01</span><p><strong>Information you choose to provide.</strong><br/>The enquiry form may ask for your name, business name, email address, phone number, project stage, the service you need, product or format, what you serve, approximate volume, timeline, city and project brief. Optional fields can be left blank.</p></div>
    <div><span>02</span><p><strong>How the enquiry is sent.</strong><br/>When you submit the form, your answers are assembled in your browser into a WhatsApp message and a WhatsApp chat is opened. The information is not sent to Farefold by the form itself. It is shared when you choose to press Send in WhatsApp.</p></div>
    <div><span>03</span><p><strong>WhatsApp and other providers.</strong><br/>WhatsApp is a third-party service. Once you choose to send a message, its handling is subject to WhatsApp&apos;s own terms and privacy information. Your email provider may also process messages if you contact Farefold by email.</p></div>
    <div><span>04</span><p><strong>How Farefold uses an enquiry.</strong><br/>If you send an enquiry, Farefold can use the details you provide to understand your project, respond to you, prepare a quotation and discuss the requested branding or packaging work. Do not include passwords, payment-card details or information that is not needed for your enquiry.</p></div>
    <div><span>05</span><p><strong>Website hosting and technical logs.</strong><br/>When the website is hosted, the hosting provider may process technical information such as request logs for security and operation. The hosting provider and its applicable practices will be identified as part of the live deployment setup.</p></div>
    <div><span>06</span><p><strong>Questions or updates.</strong><br/>For a privacy question about an enquiry you sent to Farefold, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. If your information was sent through WhatsApp, you may also need to manage that message or its data through WhatsApp.</p></div>
   </div>
   <div className="guideArticleCta">
    <h2>Have a project in mind?</h2>
    <p>Share only the details needed to help us understand what you are building.</p>
    <div><Link className="primary" href="/contact">Start a project <span>→</span></Link><Link className="secondary" href="/">Back to Farefold</Link></div>
   </div>
   <p className="catalogDisclosure">This notice describes the current website enquiry flow. It is not a statement that the website is already deployed or that any particular hosting, analytics or customer-management service is in use. Review and update it when the live hosting and business data-handling arrangements are confirmed.</p>
  </article>
 </PageFrame>
}
