import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PrivacyPolicyPage: React.FC = () => {
  return (
      <div className="max-w-3xl mx-auto">
        <Alert className="mb-8 bg-gray-50">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Last updated: May 9, 2025
          </AlertDescription>
        </Alert>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              At DigitalJugaad, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform 
              you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the 
              law protects you.
            </p>
            <p className="text-gray-700">
              Please read this Privacy Policy carefully before using our services or submitting any personal information to us.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="personal-info">
                <AccordionTrigger className="text-lg font-medium">Personal Information</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-2">We may collect the following personal information when you register or make a purchase:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Billing address</li>
                    <li>Payment information (we do not store complete payment details)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="usage-info">
                <AccordionTrigger className="text-lg font-medium">Usage Information</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-2">We automatically collect certain information about your device and how you interact with our website, including:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on those pages</li>
                    <li>Referral source</li>
                    <li>Device information</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cookies">
                <AccordionTrigger className="text-lg font-medium">Cookies and Similar Technologies</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-2">We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with small amount of data that may include an anonymous unique identifier.</p>
                  <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>To process and fulfill your orders</li>
              <li>To provide customer support and respond to inquiries</li>
              <li>To improve our website and products</li>
              <li>To send you transactional emails related to your purchases</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To detect and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li><strong>Service Providers:</strong> Third-party companies that help us provide our services, such as payment processors, email delivery services, and hosting providers.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.</li>
            </ul>
            <p className="text-gray-700">
              We do not sell your personal information to third parties.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, 
              accidental loss, destruction, or damage.
            </p>
            <p className="text-gray-700">
              However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to erasure (the "right to be forgotten")</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
              <li>Rights related to automated decision-making and profiling</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Email: privacy@digitaljugaad.com</li>
              <li>Phone: +91 98765 43210</li>
            </ul>
          </CardContent>
        </Card>
      </div>
  );
};

export default PrivacyPolicyPage;